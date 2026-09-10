# 08 · Tu propio proceso

> Al terminar tendrás una plantilla de proyecto que puedes copiar cada vez que empieces algo nuevo, con el contexto, las decisiones y los traspasos ya organizados.

**Tiempo estimado:** 40 minutos
**Necesitas antes:** lecciones 01, 02 y 07. Un proyecto tuyo con al menos un `CLAUDE.md`.

## Qué vas a conseguir

Hasta ahora has hecho las cosas una vez. Ahora vas a sacar de tu proyecto lo que es repetible y a guardarlo como plantilla. La próxima vez que empieces algo, en cinco minutos tendrás la misma estructura, y cualquier agente que abra la carpeta sabrá cómo trabajas.

## Antes de empezar: un concepto

Un proyecto real acumula tres tipos de información, y conviene tenerlos separados:

- **Reglas estables**: qué es el proyecto, cómo se ejecuta, qué no tocar. Cambian poco. Van en `CLAUDE.md`.
- **Decisiones**: qué se eligió y por qué. Solo se añaden, nunca se borran. Van en `docs/decisiones.md`.
- **Traspasos**: fotos de "dónde estábamos" en una fecha. Van en `docs/handoffs/`, una por día de trabajo.

Una **plantilla** es esa estructura vacía, con los archivos ya creados y un texto de ejemplo en cada uno. Copiar la plantilla es el primer paso de cualquier proyecto nuevo.

## Pasos

### 1. Mira lo que ya tienes

Abre Claude en tu proyecto (el de las recetas, el de práctica, el que sea) y pídele:

```
Lee el CLAUDE.md de este proyecto y separa su contenido en dos listas: lo que es específico de este proyecto y lo que valdría para cualquier proyecto mío.
```

La segunda lista es tu proceso. Suele incluir cosas como "textos en español", "commit al terminar cada fase", "no pedir permiso para leer, sí para borrar".

### 2. Crea la plantilla

Sal de Claude, crea una carpeta nueva al lado de tus proyectos y entra:

```bash
cd ..
mkdir plantilla-proyecto
cd plantilla-proyecto
claude
```

Pídele que la monte, pasándole la lista del paso 1:

```
Crea una plantilla de proyecto con esta estructura:
- CLAUDE.md con secciones: qué es el proyecto, cómo se ejecuta, reglas, estado actual, y "antes de terminar una sesión". Rellena "reglas" con esto: [pega aquí la lista de lo que vale para cualquier proyecto].
- docs/decisiones.md con una tabla vacía de tres columnas: fecha, decisión, por qué.
- docs/handoffs/ con un archivo PLANTILLA.md que tenga las secciones: estado en una frase, qué se hizo, qué queda, qué necesita hacer la persona.
- README.md que explique en cinco líneas cómo usar la plantilla.
Deja marcadores como [RELLENAR] donde vaya texto específico.
```

Abre los archivos y léelos. Cambia lo que no suene a ti.

### 3. Súbela a GitHub como repositorio plantilla

```
Convierte esta carpeta en repositorio, crea un repositorio en GitHub llamado plantilla-proyecto y súbelo.
```

Ahora en el navegador: entra al repositorio en github.com, pulsa **Settings**, y marca la casilla **Template repository**. A partir de ahora, GitHub te ofrece un botón **Use this template** para crear proyectos nuevos a partir de ella.

### 4. Úsala una vez

Crea un proyecto de prueba desde la plantilla: en github.com, en tu repositorio `plantilla-proyecto`, botón **Use this template**, **Create a new repository**, nombre `prueba-plantilla`. Luego en tu terminal:

```
Clona https://github.com/TU-USUARIO/prueba-plantilla en una carpeta al lado de esta, entra, y rellena los [RELLENAR] del CLAUDE.md para un proyecto que sea "una lista de libros que quiero leer".
```

Mira el resultado. Un proyecto nuevo con tu proceso dentro en dos minutos.

### 5. Cierra el ciclo

Vuelve a `plantilla-proyecto`. Si al usarla has echado algo en falta, añádelo ahora. La plantilla mejora cada vez que la usas.

```
Haz commit con el mensaje "Plantilla: primera versión" y súbelo.
```

## Comprueba que funcionó

- [ ] Existe el repositorio `plantilla-proyecto` en GitHub, marcado como plantilla.
- [ ] Has creado `prueba-plantilla` desde ella y tiene `CLAUDE.md`, `docs/decisiones.md` y `docs/handoffs/`.
- [ ] Tu `CLAUDE.md` de plantilla tiene una sección "antes de terminar una sesión" con al menos: actualizar decisiones, escribir traspaso, commit y push.

## Qué has aprendido

Tu forma de trabajar es un activo, y como todo activo, se guarda en un repositorio. La plantilla hace tres cosas: te ahorra montar la estructura cada vez, obliga a que cada proyecto tenga decisiones y traspasos desde el día uno, y le da al agente el mismo contexto en todos tus proyectos. Este curso está hecho exactamente así: el repositorio `operations` tiene `CLAUDE.md`, `docs/decisiones.md` y `docs/handoffs/`, y las plantillas en `docs/plantillas/`. Puedes copiar las suyas si prefieres empezar de ahí.

## Errores típicos

**No aparece el botón "Use this template".** Falta marcar la casilla en Settings del repositorio. Está casi arriba del todo, en la sección General.

**La plantilla tiene cosas del proyecto original.** Es lo más común. Repite el paso 1 con más cuidado: todo lo que mencione un nombre, una tecnología concreta o una URL es específico y va con [RELLENAR].

**Me da pereza actualizar decisiones y traspasos.** A todo el mundo. Por eso está en `CLAUDE.md` en "antes de terminar una sesión": se lo pides al agente y lo hace él.

## Guarda tu progreso

Ya lo has hecho en el paso 5.
