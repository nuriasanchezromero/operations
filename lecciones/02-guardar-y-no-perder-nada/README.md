# 02 · Guardar y no perder nada

> Al terminar, tu carpeta tendrá historial de versiones y una copia en la nube en GitHub. Nada de lo que hagas a partir de ahora se puede perder.

**Tiempo estimado:** 45 minutos
**Necesitas antes:** lección 01 hecha. Una cuenta en [github.com](https://github.com) (gratis; créala antes de empezar si no la tienes).

## Qué vas a conseguir

Vas a poder volver a cualquier versión anterior de tu trabajo, ver qué cambió y cuándo, y tenerlo todo guardado fuera de tu ordenador. Y lo vas a hacer sin aprender comandos de memoria: se lo vas a pedir al agente, que para eso está.

## Antes de empezar: un concepto

Piensa en "Guardar como..." con un nombre distinto cada vez: `web-v1`, `web-v2`, `web-final`, `web-final-bueno`. Todos lo hemos hecho. Es un historial de versiones, pero manual y caótico.

**Git** es eso mismo, hecho bien. Cada vez que decides "este estado merece guardarse", haces un **commit**: una foto de todos los archivos de la carpeta en ese momento, con una frase que dice qué cambió. Los commits se encadenan y puedes volver a cualquiera.

**GitHub** es un sitio web donde subes esa cadena de commits. Es la copia en la nube. Si tu ordenador se rompe, lo tienes. Si quieres que otra persona (o un agente en otro ordenador) trabaje sobre lo mismo, lo tiene. Subir se llama **push**.

Tres palabras y ya está: commit (guardar versión), push (subir a GitHub), repositorio o "repo" (la carpeta con historial).

## Pasos

### 1. Convierte la carpeta en un repositorio

Abre la terminal, entra en la carpeta y arranca Claude:

```bash
cd practica-ia
claude
```

Pídele:

```
Convierte esta carpeta en un repositorio git y haz un primer commit con todo lo que hay. Explícame qué has hecho en dos frases.
```

Te pedirá permiso para ejecutar un par de comandos. Di que sí. Cuando termine, léete la explicación. Acabas de hacer tu primer commit.

### 2. Cambia algo y guarda otra versión

Pide un cambio cualquiera:

```
Añade al final de lista-compra.md una sección "Para el fin de semana" con tres cosas.
```

Y ahora guarda:

```
Haz commit de este cambio con un mensaje que describa qué ha cambiado.
```

Ya tienes dos versiones. Pide que te lo enseñe:

```
Muéstrame el historial de commits.
```

Verás dos líneas, cada una con su mensaje. Ese es tu historial.

### 3. Crea el repositorio en GitHub

Esto se hace en el navegador, una vez por proyecto:

1. Entra en [github.com](https://github.com) con tu cuenta.
2. Arriba a la derecha, el botón `+`, luego **New repository**.
3. Nombre: `practica-ia`. Déjalo en **Private**. No marques ninguna casilla más.
4. **Create repository**.

GitHub te mostrará una página con instrucciones. No hace falta que las sigas: cópiate solo la dirección que aparece, algo como `https://github.com/tu-usuario/practica-ia.git`.

### 4. Conecta y sube

Vuelve a Claude y pega la dirección:

```
Conecta este repositorio con https://github.com/tu-usuario/practica-ia.git y sube todos los commits.
```

La primera vez, GitHub te pedirá identificarte. Claude te guiará; suele ser aceptar en el navegador o pegar un código. Si te pide una contraseña de GitHub en la terminal, para: hoy se usa un "token", y Claude te explicará cómo crearlo. Nunca pegues tu contraseña real en una terminal.

### 5. Míralo en la nube

Recarga la página de tu repositorio en GitHub. Ahí están tus archivos, y arriba pone "2 commits". Haz clic ahí y verás las dos versiones, con sus mensajes. Eso vive fuera de tu ordenador.

### 6. El ciclo que vas a repetir siempre

A partir de ahora, cada vez que termines algo que merece la pena:

```
Haz commit con un mensaje descriptivo y súbelo a GitHub.
```

Una frase. Claude hace el resto. No necesitas saber los comandos, pero por si tienes curiosidad, son estos tres:

```bash
git add -A                       # prepara todos los cambios
git commit -m "qué ha cambiado"  # guarda la versión
git push                         # la sube a GitHub
```

## Comprueba que funcionó

- [ ] `Muéstrame el historial de commits` en Claude enseña al menos dos.
- [ ] Tu repositorio en github.com muestra los archivos y el mismo número de commits.
- [ ] Sabes qué frase decirle a Claude para guardar y subir.

## Qué has aprendido

Git guarda versiones; GitHub las copia fuera. Con las dos cosas, trabajar con un agente deja de dar miedo: si hace algo mal, vuelves a la versión anterior. Si tu ordenador muere, no pierdes nada. Y, esto es lo importante para lo que viene, cualquier otro ordenador o servicio que pueda leer tu repositorio de GitHub puede trabajar con tu proyecto: un agente en la nube, un servicio que publique tu web, tú desde otro sitio. El repositorio es la fuente de verdad. La carpeta de tu ordenador es solo una copia.

Y una regla que vale para siempre: **nada importante se queda solo en local.** Si no está subido, no existe.

## Errores típicos

**"Permission denied" o "Authentication failed" al subir.** GitHub no te reconoce. Dile a Claude "ayúdame a autenticarme con GitHub" y sigue sus pasos. Suele resolverse con `gh auth login` o con un token.

**Subí y en GitHub no veo nada.** Recarga la página. Si sigue vacío, la dirección del repositorio estaba mal; pídele a Claude "comprueba a qué repositorio remoto estamos conectados".

**Hice un cambio y no quiero guardarlo.** Dile a Claude "descarta los cambios que no están en el último commit". Volverás a la última versión guardada.

## Guarda tu progreso

Ya lo has hecho: es la lección. Pero por completar el ritual:

```
Haz commit con el mensaje "Lección 02: primer repositorio en GitHub" y súbelo.
```
