# Aprende IA paso a paso

Un curso práctico para pasar de usar la IA en modo chat a construir y publicar cosas
reales con un agente. Sin conocimientos previos de programación.

A lo largo del curso se construye una web real: [nuriasanchezromero.com](https://github.com/nuriasanchezromero/web_nuria).
Cada lección deja el proyecto un paso más cerca de estar publicado.

## Cómo seguirlo

Las lecciones están en `lecciones/`, numeradas. Se hacen en orden. Cada una tiene el
mismo esquema: qué vas a conseguir, qué necesitas, pasos, cómo comprobar que funcionó,
qué has aprendido y errores típicos. Al final de cada lección haces un commit: así tu
historial de git es tu progreso.

## Índice

### Bloque 0 · Del chat al agente (sin código)

| Lección | Qué consigues |
|---|---|
| [00 · De chat a agente](lecciones/00-de-chat-a-agente/README.md) | Entender qué cambia cuando la IA puede tocar archivos. Instalar Claude Code. Primera conversación. |
| [01 · Darle contexto](lecciones/01-darle-contexto/README.md) | Escribir tu primer `CLAUDE.md` y ver cómo cambia lo que hace el agente. |
| [02 · Guardar y no perder nada](lecciones/02-guardar-y-no-perder-nada/README.md) | Git como "guardar versión", GitHub como copia en la nube. Primer commit y push. |

### Bloque 1 · Tu primera web

| Lección | Qué consigues |
|---|---|
| 03 · Una web en una hora | Pedir una web estática, verla en local, entender qué archivos creó. |
| 04 · Publicarla | Dominio, Cloudflare, desplegar desde GitHub. Qué es un secreto. |
| 05 · Login sin contraseñas | Supabase, enlace mágico, zona privada. |

### Bloque 2 · Trabajar bien con agentes

| Lección | Qué consigues |
|---|---|
| [06 · Pedir bien](lecciones/06-pedir-bien/README.md) | Tareas en fases, verificar antes de aceptar, cuándo decir "así no". |
| 07 · Cambiar de cuenta o de herramienta | El documento de traspaso. Caso real. |
| [08 · Tu propio proceso](lecciones/08-tu-propio-proceso/README.md) | Extraer la plantilla del proyecto y reutilizarla. |

### Bloque 3 · Tu primer programa con IA dentro

| Lección | Qué consigues |
|---|---|
| [09 · Llamar a Claude desde código](lecciones/09-llamar-a-claude-desde-codigo/README.md) | Un script que envía un mensaje a la API y muestra la respuesta. |
| [10 · Un asistente propio](lecciones/10-un-asistente-propio/README.md) | Instrucciones fijas y memoria, publicado en la web. |

Las lecciones sin enlace están pendientes de escribir.

## Método

- [`CLAUDE.md`](CLAUDE.md) reglas del repo. Lo lee el agente al arrancar.
- [`docs/decisiones.md`](docs/decisiones.md) por qué se decidió cada cosa.
- [`docs/handoffs/`](docs/handoffs/) traspasos entre sesiones, por fecha.
- [`docs/plantillas/`](docs/plantillas/) plantillas para copiar a otros proyectos.
- [skills](https://github.com/nuriasanchezromero/skills) repo aparte con las skills de Claude Code, empaquetadas como marketplace. Se instalan una vez y valen en cualquier carpeta.

## Skills

Las skills viven en su propio repo, [nuriasanchezromero/skills](https://github.com/nuriasanchezromero/skills). Instalación, dentro de Claude Code:

```
/plugin marketplace add nuriasanchezromero/skills
/plugin install lm@nuria
```

La primera es `lm`: convierte cualquier situación técnica en pasos concretos para alguien no técnico. Se invoca con `/lm` o preguntando "¿y ahora qué?".
