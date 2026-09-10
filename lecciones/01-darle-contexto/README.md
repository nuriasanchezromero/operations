# 01 · Darle contexto

> Al terminar sabrás escribir un archivo `CLAUDE.md` y habrás visto con tus ojos cómo cambia el comportamiento del agente según lo que pone.

**Tiempo estimado:** 30 minutos
**Necesitas antes:** lección 00 hecha (Claude Code instalado y la carpeta `practica-ia`).

## Qué vas a conseguir

Vas a dejar de repetirle a la IA quién eres y qué quieres en cada conversación. Vas a escribirlo una vez en un archivo, y el agente lo leerá solo cada vez que arranque. Al final de la lección tendrás una carpeta que "sabe" cómo quieres trabajar.

## Antes de empezar: un concepto

En el chat habrás notado que cada conversación empieza de cero. Si quieres que te responda en español, en tono informal, y sin emojis, lo tienes que decir cada vez. Y aun así, a veces se le olvida a mitad.

Un agente resuelve esto con un archivo llamado **`CLAUDE.md`** en la carpeta del proyecto. Es un texto normal, escrito por ti, en tu idioma. Cada vez que arranca Claude Code en esa carpeta, lo lee antes de hacer nada. Es como dejarle una nota en la mesa a alguien que viene a trabajar contigo: "esto es lo que hacemos aquí, así trabajamos, esto no lo toques".

Esa nota es el contexto. Y el contexto es la diferencia entre un asistente que acierta a la primera y uno al que tienes que corregir tres veces.

## Pasos

### 1. Primero, sin contexto

Abre la terminal, entra en la carpeta y arranca Claude:

```bash
cd practica-ia
claude
```

Pídele esto:

```
Escribe un archivo bienvenida.md con un texto de bienvenida para una web.
```

Léelo. Estará en algún idioma, con algún tono, para alguna web imaginaria. Ha tenido que inventarse todo lo que no le has dicho.

### 2. Escribe la nota

Sal de Claude (escribe `/exit` o pulsa `Ctrl + C` dos veces). Ahora pídele que cree la nota, o créala tú. Vamos a hacerlo con Claude, que para eso está:

```bash
claude
```

```
Crea un archivo CLAUDE.md en esta carpeta con exactamente este contenido:

# Práctica IA

Este es un proyecto de práctica de Nuria, ilustradora.

## Reglas
- Todo el texto en español de España, tono cercano, sin emojis.
- Los textos hablan en primera persona ("soy Nuria", no "Nuria es").
- Antes de crear un archivo nuevo, dime en una línea qué vas a poner.
```

Cambia "Nuria, ilustradora" por quien seas tú y a qué te dedicas. Es tu nota.

### 3. Ahora, con contexto

Sal de Claude y vuelve a entrar. Este paso importa: el archivo se lee al arrancar.

```bash
claude
```

Pide exactamente lo mismo que en el paso 1:

```
Escribe un archivo bienvenida.md con un texto de bienvenida para una web.
```

Compara con lo de antes. Estará en español, en primera persona, hablando de ilustración (o de lo tuyo), y te habrá avisado antes de escribir. Nada de eso lo has pedido en el mensaje. Estaba en la nota.

### 4. Cambia una regla y míralo otra vez

Edita `CLAUDE.md` (pídeselo a Claude o ábrelo con cualquier editor de texto). Añade una regla:

```
- Los textos son cortos: nunca más de tres frases seguidas.
```

Sal, vuelve a entrar y pide que reescriba `bienvenida.md`. Verás que ahora es más corto. Has cambiado cómo trabaja el agente sin tocar tu forma de pedirle cosas.

### 5. Instala tu primera skill

Una **skill** es como un `CLAUDE.md` pero para una tarea concreta, y vale en todos tus proyectos a la vez. La primera que vas a instalar se llama `lm`: convierte cualquier lío técnico en pasos que puedes seguir. Dentro de Claude, escribe estas dos líneas, una y luego otra:

```
/plugin marketplace add nuriasanchezromero/skills
/plugin install lm@nuria
```

Ahora pruébala. Escribe `/lm` seguido de algo que no entiendas, por ejemplo:

```
/lm me dicen que tengo que "hacer un commit y un push" y no sé qué es
```

Te responderá con bloques numerados: qué hacer, por qué, y cómo funciona por debajo. Ese formato lo vas a ver mucho en este curso. Cada vez que te pierdas, `/lm`.

## Comprueba que funcionó

- [ ] Existe `CLAUDE.md` en la carpeta `practica-ia`.
- [ ] Al pedir el mismo texto, con y sin `CLAUDE.md`, el resultado es claramente distinto.
- [ ] Añadir una regla al archivo cambió el siguiente resultado sin que la repitieras en el mensaje.
- [ ] `/lm` responde con bloques numerados.

## Qué has aprendido

El agente no tiene memoria entre conversaciones, pero sí lee lo que hay en la carpeta. `CLAUDE.md` es la forma de darle memoria: quién eres, qué es el proyecto, cómo quieres las cosas, qué no debe hacer. Todo lo que te encuentres repitiendo en los mensajes es candidato a ir ahí. Y una cosa más: el archivo lo puedes leer tú, cambiarlo, y compartirlo. Cuando otra persona (u otra IA) abra la carpeta, verá la misma nota. Ese es el principio de todo lo que viene después: el contexto vive en archivos, no en tu cabeza ni en un chat.

## Errores típicos

**No noto diferencia entre el paso 1 y el 3.** Casi siempre es porque no saliste y volviste a entrar en Claude después de crear el archivo. Sal con `/exit`, arranca de nuevo.

**Claude ignora una regla.** Reglas vagas ("que quede bien") no funcionan. Reglas concretas ("nunca más de tres frases seguidas") sí. Reescríbela como algo que se pueda comprobar.

**El archivo se llama `claude.md` en minúsculas.** Suele funcionar igual, pero por costumbre se escribe `CLAUDE.md`. Así lo reconocerás en cualquier proyecto.

## Guarda tu progreso

Todavía no. Es la siguiente lección, y ya tienes algo que merece la pena guardar.
