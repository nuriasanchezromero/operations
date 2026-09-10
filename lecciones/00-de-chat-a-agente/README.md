# 00 · De chat a agente

> Al terminar tendrás Claude Code instalado y habrás tenido tu primera conversación con una IA que puede crear archivos en tu ordenador.

**Tiempo estimado:** 30 minutos
**Necesitas antes:** un Mac o un PC, y una cuenta de Claude (la misma del chat).

## Qué vas a conseguir

Vas a instalar una herramienta que se llama Claude Code y a pedirle algo tan simple como "crea un archivo con la lista de la compra". La diferencia con el chat es que el archivo aparecerá de verdad en tu ordenador. Ese es todo el salto de esta lección: de leer respuestas a ver resultados.

## Antes de empezar: un concepto

En el chat, tú escribes, la IA responde, y todo se queda en la ventana. Si te da un texto, lo copias tú. Si te da pasos, los haces tú.

Un **agente** es la misma IA, pero con manos. Puede crear y editar archivos, ejecutar programas y comprobar si algo funcionó. Tú sigues hablando igual, en tu idioma. Lo que cambia es que ahora dices "hazlo" en vez de "dime cómo se hace".

Eso tiene una consecuencia: el agente actúa en una carpeta concreta de tu ordenador. Por eso lo primero siempre es decidir en qué carpeta trabaja. Todo lo que haga, lo hará ahí dentro.

## Pasos

### 1. Abre la terminal

La terminal es una ventana donde escribes órdenes en texto en vez de hacer clic. Vas a usarla muy poco: solo para arrancar Claude Code. Luego hablas con él como en el chat.

- **Mac:** pulsa `Cmd + espacio`, escribe `Terminal`, Enter.
- **Windows:** pulsa la tecla Windows, escribe `PowerShell`, Enter.

Verás una ventana con texto y un cursor parpadeando. Eso es todo.

### 2. Instala Claude Code

Copia esta línea, pégala en la terminal y pulsa Enter:

**Mac:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows (PowerShell):**
```powershell
irm https://claude.ai/install.ps1 | iex
```

Tardará un minuto. Cuando termine, cierra la terminal y vuelve a abrirla (para que reconozca el programa nuevo).

### 3. Crea una carpeta para practicar

Escribe estas dos líneas, una a una, con Enter después de cada una:

```bash
mkdir practica-ia
cd practica-ia
```

La primera crea una carpeta llamada `practica-ia`. La segunda "entra" en ella. A partir de ahora, todo lo que haga el agente ocurrirá dentro de esa carpeta.

### 4. Arranca Claude Code

```bash
claude
```

La primera vez te pedirá iniciar sesión: se abrirá el navegador, aceptas con tu cuenta de Claude, y vuelves a la terminal. Verás un cuadro de texto esperando. Es el chat, pero dentro de tu carpeta.

### 5. Tu primer encargo

Escribe esto y pulsa Enter:

```
Crea un archivo llamado lista-compra.md con una lista de la compra para una semana, organizada por secciones del supermercado.
```

Claude te dirá qué va a hacer, te pedirá permiso para crear el archivo (di que sí), y lo creará.

### 6. Compruébalo con tus propios ojos

Abre la carpeta `practica-ia` con el Finder (Mac) o el Explorador (Windows). Ahí está el archivo. Ábrelo. Eso lo ha escrito la IA directamente en tu disco.

Ahora vuelve a la terminal y pide un cambio:

```
Añade una sección de "Limpieza" al final de la lista.
```

Mira el archivo otra vez. Ha cambiado. No has copiado nada tú.

## Comprueba que funcionó

- [ ] Al escribir `claude` en la terminal se abre el chat.
- [ ] Existe el archivo `lista-compra.md` dentro de `practica-ia`.
- [ ] El archivo tiene la sección "Limpieza" que pediste después.

## Qué has aprendido

Un agente es una IA que actúa dentro de una carpeta de tu ordenador. Le hablas igual que en el chat, pero en vez de copiar sus respuestas, ves los resultados aparecer. Antes de hacer algo te pide permiso: eso es normal y es bueno. Con el tiempo aprenderás cuándo decir que sí sin mirar y cuándo leer con calma. Y lo más importante: la carpeta en la que estás cuando escribes `claude` es donde va a trabajar. Elegirla bien es la primera decisión de cada proyecto.

## Errores típicos

**"command not found: claude".** La terminal no ha reconocido el programa nuevo. Cierra la terminal del todo y ábrela otra vez. Si sigue igual, repite el paso 2.

**Se abre el navegador pero no vuelve a la terminal.** Inicia sesión en el navegador y vuelve tú a la ventana de la terminal a mano. Suele estar esperando ya.

**Claude pregunta algo y no sé qué contestar.** Contesta como en el chat, con tus palabras. Si no entiendes la pregunta, dile "no entiendo, explícamelo".

## Guarda tu progreso

Todavía no. Guardar versiones es la lección 02. Por ahora, deja la carpeta `practica-ia` donde está: la vas a usar en la siguiente lección.
