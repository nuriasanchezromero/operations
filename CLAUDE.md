# operations

Repositorio del curso **Aprende IA paso a paso** y del método de trabajo con agentes.
Lo lee automáticamente cualquier sesión de Claude Code que abra este repo. Si eres un
asistente leyendo esto: sigue estas reglas antes de tocar nada.

## Qué es este repo

- `lecciones/` el curso. Una carpeta por lección, numerada. Cada lección sigue
  `docs/plantillas/leccion.md` sin excepciones.
- `docs/decisiones.md` una línea por decisión importante y su motivo. Se añade, no se borra.
- `docs/handoffs/` documentos de traspaso, uno por fecha. Foto de "dónde estábamos".
  Nunca se editan después de escribirse.
- `docs/plantillas/` plantillas reutilizables para otros proyectos.
- `grokbot/` bot hecho con el BDK de Cursor que consulta agentes de Grok Bot. Proyecto
 autocontenido con su propio `README.md` y `AGENTS.md`.
- Las skills NO van aquí: viven en https://github.com/nuriasanchezromero/skills (marketplace de plugins).

## Para quién es el curso

Alguien que solo ha usado IA en modo chat. Nunca ha programado, nunca ha usado terminal,
git ni agentes. Cada lección parte de lo que ya conoce ("esto es como el chat, pero...").

## Reglas de redacción

- Español, tono directo, sin jerga sin explicar. La primera vez que aparece un término
  técnico se explica en una frase.
- Cada paso es copiable y verificable. Si no se puede comprobar, no es un paso.
- Siempre el porqué, no solo el qué. "Elegimos X porque Y" enseña más que el comando.
- Nada de contraseñas, tokens ni claves en ningún archivo. Se usan secretos y se explica
  por qué.
- Cada lección termina con un commit. El historial de git es parte del curso.

## Proyecto de ejemplo

El curso construye la web de Nuria como caso real:
https://github.com/nuriasanchezromero/web_nuria (Astro + Cloudflare Workers + Supabase).
Las lecciones enlazan al estado de ese repo en cada punto.

## Antes de terminar una sesión

1. Actualizar `docs/decisiones.md` si se decidió algo.
2. Escribir `docs/handoffs/AAAA-MM-DD-tema.md` con: estado, qué se hizo, qué queda,
   qué necesita la persona hacer.
3. Commit y push. Nada se queda solo en local.
