# 10 · Un asistente propio

> Al terminar tendrás un asistente con instrucciones fijas y memoria de conversación, publicado en la zona privada de tu web para que solo lo usen personas con acceso.

**Tiempo estimado:** 90 minutos
**Necesitas antes:** lección 09 (clave de API) y lección 05 (web con login publicada en Cloudflare).

## Qué vas a conseguir

El programa de la lección 09 responde a una pregunta y se olvida. Ahora vas a darle dos cosas: una personalidad fija (qué es, cómo habla, de qué no habla) y memoria de la conversación. Y lo vas a poner en tu web, detrás del login, para que nadie más gaste tu saldo.

## Antes de empezar: un concepto

La API de Claude **no recuerda nada** entre llamadas. Cada petición es nueva. La "memoria" de un chat es un truco: en cada llamada se envía la conversación entera, y el modelo la lee de nuevo. Así que la memoria vive en tu programa, no en Claude.

Y las **instrucciones fijas** se llaman "system prompt": un texto que va aparte de la conversación y que el modelo trata como las reglas del juego. Es el `CLAUDE.md` de tu asistente.

Todo esto tiene que ejecutarse en el servidor, no en el navegador de quien visita la web. Si la clave viajara al navegador, cualquiera podría copiarla. Por eso el asistente será una ruta de tu web que corre en Cloudflare, con la clave guardada como secreto.

## Pasos

### 1. Guarda la clave en Cloudflare

En el navegador, en tu Worker de Cloudflare, **Settings**, **Variables and Secrets**, añade un secreto llamado `ANTHROPIC_API_KEY` con tu clave. Si desplegaste con GitHub Actions como en la lección 04, añádela también como secreto del repositorio en GitHub y en el workflow, igual que hiciste con las de Supabase.

### 2. Declara la clave en el proyecto

Abre Claude en la carpeta de tu web y pídele:

```
Añade ANTHROPIC_API_KEY al esquema de astro:env en astro.config.mjs como variable de servidor secreta, igual que SUPABASE_URL. Instala @anthropic-ai/sdk.
```

### 3. Crea la ruta del asistente

Pide que cree `src/pages/api/asistente.ts` con este contenido:

```typescript
import type { APIRoute } from "astro";
import Anthropic from "@anthropic-ai/sdk";
import { ANTHROPIC_API_KEY } from "astro:env/server";

const INSTRUCCIONES = `Eres el asistente de la web de Nuria. Respondes en español, en tono cercano y breve.
Solo hablas de los servicios de Nuria y de cómo contactar con ella. Si te preguntan otra cosa, lo dices amablemente y reconduces.
No inventas precios ni fechas: si no lo sabes, dices que Nuria lo confirmará por correo.`;

export const POST: APIRoute = async ({ request, locals }) => {
  if (!locals.user) return new Response("No autorizado", { status: 401 });

  const { mensajes } = (await request.json()) as {
    mensajes: Anthropic.MessageParam[];
  };
  if (!Array.isArray(mensajes) || mensajes.length === 0 || mensajes.length > 40) {
    return new Response("Conversación no válida", { status: 400 });
  }

  const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY });
  const respuesta = await client.messages.create({
    model: "claude-opus-5",
    max_tokens: 2000,
    system: INSTRUCCIONES,
    messages: mensajes,
  });

  const texto = respuesta.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("");

  return Response.json({ texto });
};
```

Qué hace: rechaza a quien no ha iniciado sesión (eso lo garantiza el middleware de la lección 05), recibe la conversación entera desde el navegador, la envía a Claude con las instrucciones fijas, y devuelve solo el texto. El límite de 40 mensajes evita que una conversación crezca sin fin y dispare el coste.

### 4. Crea la página del chat

Pide que cree `src/pages/area/asistente.astro`: una página de la zona privada con una lista de mensajes y un formulario. El navegador guarda la conversación en una variable y en cada envío manda la lista completa a `/api/asistente`. Dile a Claude:

```
Crea src/pages/area/asistente.astro usando el layout Base. Debe tener una lista de mensajes y un formulario con un campo de texto. Un script en el navegador guarda un array `mensajes` con {role, content}; al enviar, añade el mensaje del usuario, hace fetch POST a /api/asistente con { mensajes }, añade la respuesta como {role: "assistant", content: texto} y la pinta. Sin librerías, solo JavaScript del navegador. Sin exponer ninguna clave.
```

Compruébalo en local con `npm run dev`, entra con tu usuario, ve a `/area/asistente` y habla con él. Pregúntale algo fuera de tema para ver que reconduce.

### 5. Ajusta las instrucciones

Cambia el texto de `INSTRUCCIONES` hasta que suene como quieres. Cada cambio se prueba en segundos. Aquí es donde más se aprende: qué pasa si le pides que sea breve, que pregunte antes de responder, que nunca hable de precios.

### 6. Publica

```
Haz commit con el mensaje "Asistente en la zona privada" y súbelo.
```

Al subir a `main`, Cloudflare despliega. Entra en tu web, inicia sesión, y ahí está.

## Comprueba que funcionó

- [ ] `/area/asistente` responde y recuerda lo que has dicho dos mensajes antes.
- [ ] Sin iniciar sesión, `/area/asistente` redirige al login y `/api/asistente` devuelve 401.
- [ ] La clave no aparece en ningún archivo del repositorio ni en el código que llega al navegador.
- [ ] Preguntarle algo fuera de tema hace que reconduzca, como dicen las instrucciones.

## Qué has aprendido

Un asistente son tres piezas: instrucciones fijas, historial que se reenvía entero, y un servidor que guarda la clave y decide quién puede usarlo. Esto es lo mismo que tienen por dentro los chats comerciales, solo que aquí lo controlas tú: qué sabe, cómo habla, quién entra y cuánto puede gastar. A partir de aquí, darle herramientas (buscar en tu base de datos, reservar una cita) es añadir piezas al mismo esquema, y es lo que vendría en un curso siguiente.

## Errores típicos

**401 al hablar con el asistente estando dentro.** El middleware no está poniendo `locals.user` para rutas `/api/`. Revisa que en `middleware.ts` la sesión se consulta también para ellas.

**La respuesta tarda mucho.** Es normal que tarde unos segundos. Si supera medio minuto, baja `max_tokens` o pide respuestas más cortas en las instrucciones.

**El asistente "olvida".** El navegador no está enviando el historial completo, solo el último mensaje. Comprueba que el array `mensajes` crece y se manda entero.

**Funciona en local y no en Cloudflare.** Falta el secreto `ANTHROPIC_API_KEY` en el Worker, o el workflow no lo copia. Repite el paso 1.

## Guarda tu progreso

Ya lo has hecho en el paso 6. Enhorabuena: has terminado el curso.
