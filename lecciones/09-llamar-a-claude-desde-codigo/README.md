# 09 · Llamar a Claude desde código

> Al terminar tendrás un programa de quince líneas que envía una pregunta a Claude y muestra la respuesta, y entenderás qué es una API y una clave.

**Tiempo estimado:** 45 minutos
**Necesitas antes:** lecciones 00 a 02. Una tarjeta para dar de alta la cuenta de API (el gasto de esta lección es de céntimos).

## Qué vas a conseguir

Hasta ahora has usado Claude desde el chat y desde Claude Code. Las dos son aplicaciones que alguien ha hecho. Ahora vas a hacer tú una, mínima: un programa que habla con Claude. Es el primer paso para meter IA dentro de cualquier cosa que construyas.

## Antes de empezar: un concepto

Una **API** es la puerta por la que un programa habla con otro. Tu programa enviará un texto a los servidores de Anthropic y recibirá otro texto de vuelta. Es lo mismo que pasa cuando escribes en el chat, pero sin la ventana: lo hace tu código.

Para entrar por esa puerta hace falta una **clave de API**: una cadena larga que identifica tu cuenta y a la que se cobra el uso. Es como una tarjeta de crédito: no se enseña, no se pega en un chat, no se sube a GitHub. Se guarda en el ordenador, en un sitio que tu programa sabe leer.

## Pasos

### 1. Consigue una clave

En el navegador, entra en [console.anthropic.com](https://console.anthropic.com), crea una cuenta (es distinta de la del chat) y añade saldo, con cinco euros sobra para todo el curso. Luego en **API Keys**, **Create Key**. Cópiala ahora: no se vuelve a mostrar.

### 2. Guárdala donde el programa la lea

En la terminal, pega esto cambiando el texto entre comillas por tu clave:

```bash
echo 'export ANTHROPIC_API_KEY="sk-ant-PEGA-AQUI-TU-CLAVE"' >> ~/.zshrc && source ~/.zshrc
```

Eso escribe la clave en un archivo de configuración de tu terminal, fuera de cualquier proyecto. Todos tus programas la encontrarán ahí, y nunca acabará en git por accidente.

### 3. Crea el proyecto

```bash
mkdir hola-claude
cd hola-claude
npm init -y
npm install @anthropic-ai/sdk
```

La primera vez que uses `npm` puede que te pida instalar Node.js: es el programa que ejecuta código JavaScript en tu ordenador. Si no lo tienes, `claude` te lo instala si se lo pides.

### 4. Escribe el programa

Abre Claude en la carpeta y pídele que cree el archivo con exactamente este contenido, o créalo tú con cualquier editor. Se llama `hola-claude.mjs`:

```javascript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // lee ANTHROPIC_API_KEY del entorno

const pregunta = process.argv.slice(2).join(" ") || "Preséntate en dos frases.";

const respuesta = await client.messages.create({
  model: "claude-opus-5",
  max_tokens: 16000,
  messages: [{ role: "user", content: pregunta }],
});

for (const bloque of respuesta.content) {
  if (bloque.type === "text") console.log(bloque.text);
}
```

Línea a línea: importas la librería de Anthropic, creas un cliente (que encuentra la clave solo), tomas la pregunta de lo que escribas al ejecutar, envías un mensaje al modelo, y muestras los bloques de texto de la respuesta.

### 5. Ejecútalo

```bash
node hola-claude.mjs
```

Claude se presenta. Ahora con tu pregunta:

```bash
node hola-claude.mjs "Dame tres nombres para una tienda de cerámica"
```

Cada ejecución cuesta una fracción de céntimo. Puedes ver el gasto en la consola de Anthropic, en **Usage**.

### 6. Guárdalo sin la clave

```
Convierte esta carpeta en repositorio, crea un repositorio privado en GitHub llamado hola-claude y súbelo. Antes, comprueba que ningún archivo contiene la clave de API.
```

Claude añadirá un `.gitignore` para no subir `node_modules` (la librería, que se reinstala) y confirmará que la clave no está en ningún archivo, porque vive en `~/.zshrc`, fuera del proyecto.

## Comprueba que funcionó

- [ ] `node hola-claude.mjs` imprime una respuesta de Claude.
- [ ] `echo $ANTHROPIC_API_KEY` en la terminal muestra tu clave (y no aparece en ningún archivo del proyecto).
- [ ] El repositorio en GitHub no contiene la clave.

## Qué has aprendido

Un programa que usa IA son tres cosas: una clave que lo identifica, una llamada que envía un mensaje, y un bucle que lee la respuesta. Todo lo demás es decidir qué mensaje enviar y qué hacer con lo que vuelve. La clave es lo único delicado: fuera del código, fuera de git, fuera del chat. Y el modelo se elige por nombre; cuando salga uno nuevo, cambias una línea.

## Errores típicos

**`AuthenticationError` o `invalid x-api-key`.** El programa no encuentra la clave, o está mal copiada. Ejecuta `echo $ANTHROPIC_API_KEY`: si sale vacío, repite el paso 2 y abre una terminal nueva.

**`Cannot find package '@anthropic-ai/sdk'`.** No estás en la carpeta `hola-claude`, o falló `npm install`. Entra en la carpeta y repítelo.

**`SyntaxError: Cannot use import statement`.** El archivo no termina en `.mjs`. Renómbralo.

**Respuesta cortada.** No debería pasar con `max_tokens: 16000`, pero si pides algo muy largo, sube ese número.

## Guarda tu progreso

Ya lo has hecho en el paso 6.
