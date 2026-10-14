# grokbot

Un asistente que habla en tu nombre con tus agentes de Grok Bot. Tú le escribes aquí, él le pasa la pregunta al agente que toque, espera su respuesta y te la trae a esta misma conversación.

Está hecho con el **BDK** (Bot Development Kit de Cursor): un kit en el que un bot es una carpeta de archivos. El texto con sus instrucciones está en un `.md`; lo que puede hacer, en archivos `.ts`. Se creó con la plantilla oficial:

```bash
npx @cursor/bdk init ./grokbot --template grokbot-agents
```

## Qué hay en la carpeta

- `bot/instructions.md` las instrucciones fijas del bot, como el `CLAUDE.md` de un proyecto. Se pueden cambiar sin tocar código.
- `bot/extensions/grokbot.ts` la lista de agentes con los que puede hablar. Es una lista cerrada: un nombre que no esté aquí se rechaza.
- `bot/agent.ts` la configuración del bot. No fija modelo, así que usa el que trae el kit por defecto: `grok-4.5`.
- `evals/` una prueba automática: le pregunta con quién puede hablar y comprueba que da la lista sin escribir a nadie.

## Antes de usarlo

### 1. Pon los nombres de tus agentes

Abre `bot/extensions/grokbot.ts`. Ahora pone `"Plan Keeper"`, que es el ejemplo de la plantilla. Cámbialo por los nombres exactos que ves en la app de Grok Bot, separados por comas:

```ts
agents: ["Nombre del agente", "Otro agente"],
```

Copia los nombres tal cual. Si uno está mal escrito, la primera vez que el bot le escriba se creará un agente nuevo y vacío con ese nombre. Si alguna respuesta dice `created: true`, es eso: revisa el nombre.

### 2. Instala y entra con tu cuenta de Cursor

En la terminal, desde la carpeta del repositorio `operations`:

```bash
cd grokbot
npm install
npx bdk login
```

`npm install` descarga el kit. `npx bdk login` abre el navegador para que entres con tu cuenta de Cursor. El bot usa esa cuenta para hablar con tus agentes de Grok Bot, así que no hay que pegar ninguna clave en ningún archivo.

### 3. Comprueba que está bien montado

```bash
npx bdk validate
```

Debe decir `ok: grokbot (grokbot) has no diagnostics`.

### 4. Arráncalo y habla con él

```bash
npm run dev
```

En la terminal aparece `grokbot listening` y, debajo, la dirección del playground: una página de chat para probar el bot en tu ordenador. Ábrela en el navegador (normalmente `http://127.0.0.1:3000/grokbot/playground`). Prueba primero:

```
¿Con quién puedes hablar? No le escribas a nadie.
```

Debe responder con la lista que pusiste en el paso 1. Después pídele algo para uno de ellos, por ejemplo: "Pregúntale a Plan Keeper si movemos el picnic del sábado: hay un 70 % de lluvia de 13 a 16 h. Quiero un sí o no y una hora alternativa."

El agente de Grok Bot no ve esta conversación, solo el mensaje que le llega. Por eso el bot le manda un mensaje completo: quién pregunta, los datos y qué respuesta se espera.

## Comprueba que funcionó

- [ ] `npx bdk validate` no da errores.
- [ ] En el playground, "¿con quién puedes hablar?" devuelve tus agentes y no envía nada.
- [ ] Una pregunta para uno de tus agentes vuelve con su respuesta en la misma conversación.
- [ ] Un nombre que no está en la lista se rechaza.
- [ ] `npx bdk eval` pasa la prueba de `evals/`.

## Errores típicos

**`BDK needs a Cursor credential to run turns`.** No has entrado con tu cuenta. Ejecuta `npx bdk login` y vuelve a arrancar.

**El bot dice que un agente no está permitido.** El nombre no está en `bot/extensions/grokbot.ts` o está escrito distinto. Cópialo exacto de la app de Grok Bot.

**`ask` responde que el agente está ocupado y no envía nada.** Ese agente sigue con una tarea anterior. Espera a que termine en la app de Grok Bot y vuelve a preguntar.

**La respuesta tarda.** Si el agente tarda más de dos minutos, el bot devuelve lo que lleva y sigue esperando con `check`. Es normal en tareas largas.

## Para quien edite el código

`AGENTS.md` tiene el ciclo de comandos para un agente de programación. Documentación del kit: `npx bdk docs`, o la guía de la extensión en `node_modules/@cursor/bdk/docs/guides/grokbot-agents.md`.
