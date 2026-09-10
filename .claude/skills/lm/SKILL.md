---
name: lm
description: Use when the user invokes $lm, _lm or /lm, or asks "now what?", "what do I do now?", "simplify this", "in layman's terms", "¿y ahora qué?", "¿qué hago ahora?", "explícamelo fácil", "en cristiano", or wants a technical situation, handoff, error or decision turned into plain next steps they can carry out themselves.
---

# LM: plain next steps

Turn the situation into one answer made of step blocks. The situation is the text after the trigger, or the conversation so far when nothing follows it.

## Output contract

**Index.** Only when there are three or more steps: one line at the very top listing the steps as short phrases separated by " · ", for example `Pasos: 1 crear cuenta · 2 subir archivos · 3 comprobar`. Nothing else before the first block.

**One block per step**, separated by a blank line, in dependency order first and urgency second. Every block has exactly three levels, in this order:

1. **The action line, then the button.** The line is bold, numbered, one line: starts with a verb and says where it happens (your computer, the browser, the phone, the terminal) without any command in it. When a command exists it goes directly under the line in its own fenced code block tagged `bash`, one command per block, so the app shows a Run button. Write every command to run from the computer the reader is sitting at. For a page to open, use `open URL` on Mac or `start URL` on Windows, picking the one that matches the reader's system when it is known. Clicks and messages stay in the line itself.
2. **Why, in plain terms.** One paragraph opening with `Why:` (or `Por qué:` in Spanish) for a reader with no technical background: what the step changes for them, what happens if they skip it, how they will know it worked. A technical word that cannot be avoided gets a short gloss in the same sentence.
3. **How it works.** One paragraph opening with `How it works:` (or `Cómo funciona:` in Spanish) of two to five sentences: the mechanism, the files, services or accounts involved, and why this route beats the alternative. Precise names belong here, not in the two levels above.

**Closing line.** One line opening with `Already handled:` (or `Ya hecho:` in Spanish) listing automated or finished work, so the blocks hold only actions the reader must take themselves.

## Rules

- No preamble beyond the index and no summary after the closing line.
- Fewer than six blocks. With more, put a `Later` (`Después`) line between the urgent blocks and the rest and keep the numbering continuous.
- Write in the language of the reader's last message. No em dashes.
- Every block keeps its three levels even when a level is short.
- Never put a password, token or key in a command. If the step needs one, the line says where to get it and the command leaves a clearly marked placeholder.

## Example

Trigger: "¿y ahora qué?" after creating a web that still has to be published.

Pasos: 1 cuenta en GitHub · 2 subir el proyecto · 3 comprobar

**1. En el navegador, crea una cuenta gratuita en GitHub y anota tu nombre de usuario.**
```bash
open https://github.com/signup
```
Por qué: GitHub es donde va a vivir la copia en la nube de tu proyecto. Sin cuenta no hay dónde subirlo, y si tu ordenador falla lo pierdes todo. Sabrás que funcionó cuando veas tu nombre arriba a la derecha de la página.
Cómo funciona: GitHub guarda repositorios, que son carpetas con historial de versiones. La cuenta identifica quién es el dueño de cada uno y quién puede escribir en él. Es gratis para proyectos personales, públicos o privados.

**2. En la terminal, dentro de la carpeta del proyecto, pide a Claude que lo suba a GitHub.**
```bash
claude "Convierte esta carpeta en un repositorio git, crea un repositorio privado en GitHub llamado mi-web y sube todo"
```
Por qué: hasta ahora el proyecto solo existe en tu disco. Después de este paso existe también en la nube, con historial. Sabrás que funcionó cuando Claude te dé una dirección que empieza por https://github.com/ y al abrirla veas tus archivos.
Cómo funciona: Claude ejecuta `git init`, `git commit` y `gh repo create` por ti, y te pedirá permiso para cada uno. La primera vez GitHub te hará identificarte en el navegador; eso guarda un token en tu ordenador para que no vuelva a preguntar.

**3. En el navegador, abre la dirección que te dio Claude y comprueba que están tus archivos.**
```bash
open https://github.com/TU-USUARIO/mi-web
```
Por qué: es la única forma de estar seguro de que la copia existe fuera de tu ordenador. Si la página está vacía, algo falló en el paso 2 y hay que repetirlo.
Cómo funciona: la página muestra la última versión subida y, en "commits", cada versión anterior con su mensaje. Ese historial es tu red de seguridad a partir de ahora.

Ya hecho: la web se construyó y se probó en local en la sesión anterior.
