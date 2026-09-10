# Decisiones

Una línea por decisión: fecha, qué, por qué. Se añade al final, nunca se borra.
Si una decisión se revierte, se añade una nueva línea que lo diga.

| Fecha | Decisión | Por qué |
|---|---|---|
| 2026-09-10 | La web de Nuria se aloja en Cloudflare Workers, no en Railway | No hay servidor que mantener ni SSH. El dominio ya está en Cloudflare. Railway solo tendría sentido con procesos largos o lógica que Cloudflare no cubra. |
| 2026-09-10 | Framework: Astro en modo servidor | Rápido para la parte pública, admite páginas privadas con sesión, y el adaptador de Cloudflare está mantenido por el propio equipo de Astro. |
| 2026-09-10 | Usuarios y datos: Supabase | Login, base de datos y permisos por fila sin montar servidor propio. |
| 2026-09-10 | Login por enlace mágico, sin contraseñas | Menos fricción para el usuario y nada que filtrar. Google se añade después si hace falta. |
| 2026-09-10 | Despliegue automático con GitHub Actions en cada push a `main` | El entorno de Claude en la nube no llega a Cloudflare ni a Supabase. GitHub sí. Y el despliegue queda documentado en un archivo del repo. |
| 2026-09-10 | Nunca se usan contraseñas personales; solo tokens de API con permisos mínimos guardados como secretos | Un token se revoca sin tocar la cuenta. Una contraseña en un chat queda en el historial. |
| 2026-09-10 | El curso y el método viven en `operations`; el código de la web en `web_nuria` | El curso es reutilizable; la web es un ejemplo. Mezclarlos haría que cada proyecto nuevo arrastrara el curso entero. |
| 2026-09-10 | Cada lección tiene el mismo esquema (`docs/plantillas/leccion.md`) | La persona aprende el ritmo una vez y luego solo atiende al contenido. |
| 2026-09-10 | Las skills van en un repo propio (`skills`) como marketplace de plugins de Claude Code, no dentro de `operations` | Una skill dentro de un repo solo se activa en ese repo; el aprendiz trabaja en su carpeta. El marketplace se instala una vez con `/plugin marketplace add` y actualiza con `/plugin update`. Es el mecanismo oficial y el que el aprendiz usará con skills de terceros. |
| 2026-09-10 | Sin organización de GitHub por ahora; repos en la cuenta personal | Una persona mantiene y un aprendiz lee. Transferir a una organización es un clic y GitHub redirige las direcciones antiguas. Se crea cuando haya una segunda persona manteniendo o una marca propia. |
