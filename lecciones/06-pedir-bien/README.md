# 06 · Pedir bien

> Al terminar sabrás partir un encargo grande en fases, comprobar lo que el agente entrega antes de aceptarlo, y decir "así no" sin perder el trabajo hecho.

**Tiempo estimado:** 45 minutos
**Necesitas antes:** lecciones 00 a 02. Da igual si no has hecho el Bloque 1.

## Qué vas a conseguir

Vas a aprender la parte que no es técnica y que más diferencia marca: cómo hablar con un agente para que haga lo que quieres a la primera, y qué hacer cuando no. No hay nada que instalar. Solo vas a practicar tres hábitos.

## Antes de empezar: un concepto

En el chat, si la respuesta no te gusta, la ignoras y preguntas otra cosa. Con un agente no: lo que hace queda hecho. Archivos creados, cambios aplicados. Eso cambia cómo pides.

La regla es **fases pequeñas y comprobables**. En vez de "hazme una web con login, blog y tienda", pides "hazme la portada", la miras, y si vale, sigues. Cada fase termina con algo que puedes ver funcionando. Si una fase sale mal, solo pierdes esa fase, y git te devuelve a la anterior.

## Pasos

### 1. Parte el encargo antes de pedirlo

Piensa en algo que quieras construir. Escríbelo primero en una sola frase, como lo dirías en el chat:

```
Quiero una página con mis recetas favoritas, que se puedan buscar y que cada una tenga foto.
```

Ahora, en vez de pedir eso, pídele a Claude que lo parta:

```
Quiero una página con mis recetas favoritas, que se puedan buscar y que cada una tenga foto. No lo hagas todavía. Divídelo en fases, cada una con algo que yo pueda ver funcionando al terminar, y dime cuál harías primero.
```

Léete las fases. Lo normal es que salgan tres o cuatro: primero la lista sin fotos ni buscador, luego las fotos, luego la búsqueda. Fíjate en que Claude no ha tocado nada. Has pedido un plan, no un resultado.

### 2. Pide una sola fase y compruébala

```
Haz solo la fase 1. Cuando termines, dime exactamente cómo lo compruebo yo.
```

Cuando acabe, haz lo que te diga para comprobarlo. Abre el archivo, mira la página, lo que sea. Y aquí el hábito importante: **mira antes de decir "vale"**. Si algo no es como querías, es el momento de decirlo, no tres fases después.

### 3. Corrige sin volver a empezar

Elige algo que no te guste del resultado, aunque sea pequeño, y dilo así:

```
Está bien, pero el título es demasiado grande. Cámbialo solo eso, no toques el resto.
```

"Solo eso, no toques el resto" es la frase clave. Sin ella, a veces el agente aprovecha para "mejorar" cosas que no le has pedido, y acabas revisando todo otra vez.

### 4. Di "así no" y vuelve atrás

Ahora pide algo a propósito que salga mal, para practicar el retroceso:

```
Cambia todos los colores de la página a rojo.
```

Míralo. Horrible, seguramente. Ahora:

```
No, así no. Descarta todo lo que has cambiado desde el último commit.
```

Vuelves al estado de antes. Esto solo funciona si haces commit al terminar cada fase que te gusta. Por eso la lección 02 va antes que esta.

### 5. Guarda la fase buena

```
Haz commit con el mensaje "Recetas: fase 1, lista básica" y súbelo.
```

Y repites desde el paso 2 con la fase 2, cuando quieras.

## Comprueba que funcionó

- [ ] Tienes un plan por fases escrito por Claude antes de que tocara nada.
- [ ] La fase 1 está hecha y la has comprobado tú con tus ojos.
- [ ] Has corregido algo con "solo eso, no toques el resto" y el resto no cambió.
- [ ] Has descartado un cambio malo y la página volvió al estado anterior.

## Qué has aprendido

Tres hábitos. Primero: pide el plan antes que el resultado, y parte en fases que se puedan ver. Segundo: comprueba cada fase antes de aceptarla, y acota las correcciones para que el agente no toque lo que ya vale. Tercero: haz commit de lo bueno, y cuando algo sale mal, vuelve atrás sin miedo. Con estos tres hábitos, el agente deja de ser una máquina de sorpresas y pasa a ser alguien con quien trabajas por turnos cortos.

## Errores típicos

**Claude hace la fase 1 y también parte de la 2.** Pídele siempre "solo la fase 1" y "no avances a la siguiente sin que yo te lo diga". Puedes ponerlo en el `CLAUDE.md` para no repetirlo.

**"Descarta los cambios" y no vuelve exactamente a lo de antes.** Es que no había commit de "lo de antes". A partir de ahora, commit al final de cada fase que te guste, aunque sea pequeña.

**Me pide permiso para todo y es lento.** Es normal al principio. Cuando confíes, puedes decirle "en esta sesión no me pidas permiso para editar archivos de esta carpeta". Nunca le des permiso general para borrar o para subir cosas sin mirar.

## Guarda tu progreso

```
Haz commit con el mensaje "Lección 06: pedir por fases" y súbelo.
```
