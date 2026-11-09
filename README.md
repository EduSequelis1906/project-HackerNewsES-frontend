# Hacker News ES

## LIVE DEMO

https://edusequelis1906.github.io/project-HackerNewsES-frontend/


## Descripción del proyecto

Hacker News ES es una aplicación web desarrollada con React para consultar
historias populares de Hacker News desde una interfaz en español. Permite
explorar las noticias principales, buscar por título o autor y guardar
historias para leerlas más tarde.

El proyecto consume la API pública de Hacker News. La interfaz está en
español, pero los títulos y el contenido de cada noticia se muestran tal como
fueron publicados originalmente.

## Objetivo

El objetivo de este proyecto es practicar el desarrollo de una aplicación
frontend moderna: dividir la interfaz en componentes reutilizables, manejar
datos y eventos con React, navegar entre páginas y obtener información desde
una API externa.

## Funcionalidades principales

- Página de inicio con una presentación del proyecto.
- Listado de hasta 30 historias principales de Hacker News.
- Búsqueda local de historias por título o nombre de autor.
- Posibilidad de guardar y quitar historias de una lista personal.
- Persistencia de historias guardadas en el navegador mediante
	`localStorage`.
- Navegación entre Inicio, Noticias y Guardadas, además de una página para
	direcciones no encontradas.
- Estados visuales para la carga y los errores al consultar la API.

## Arquitectura

La aplicación está organizada en componentes React. Cada componente tiene
una responsabilidad concreta y, cuando corresponde, sus propios estilos CSS.
Los datos y las acciones se comparten mediante props y callbacks:

```text
App
├── Header y Navigation
├── Rutas
│   ├── Main
│   ├── Stories
│   │   ├── SearchForm
│   │   └── NewsCardList
│   │       └── NewsCard
│   ├── SavedNews
│   │   ├── SavedNewsHeader
│   │   └── NewsCardList
│   └── NotFound
└── Footer
```

`App` configura las rutas, carga las noticias y mantiene los estados de carga
y error, además del estado compartido de las historias guardadas. También se
encarga de leer y actualizar `localStorage`. La página `Stories` recibe las
noticias por props y administra la búsqueda y la cantidad de resultados
visibles. `NewsCardList` y `NewsCard` presentan las historias y comunican las
acciones del usuario hacia los componentes que controlan el estado.

La comunicación sigue un flujo unidireccional: los datos bajan desde el
componente que mantiene el estado y las acciones suben mediante callbacks.
Así, ambas páginas de noticias reflejan la misma lista de guardados y cambiar
de ruta no vuelve a solicitar los datos mientras la aplicación siga montada.

## Tecnologías utilizadas

- **HTML** para la estructura semántica de las páginas.
- **CSS** para el diseño adaptable y los estilos organizados con la
	convención BEM.
- **JavaScript (ES Modules)** para la lógica de la aplicación.
- **React 19** y **React DOM** para construir y renderizar la interfaz por
	componentes.
- **React Router** para la navegación entre páginas sin recargar la
	aplicación.
- **Vite** como servidor de desarrollo y herramienta de compilación.
- **Hacker News API** para obtener las historias principales y sus detalles.
- **ESLint** para revisar el código y detectar problemas comunes.

## Estructura principal

```text
src/
	main.jsx                 # Monta React y carga los estilos globales
	App.jsx                  # Exporta el componente principal
components/
	App/                     # Rutas, carga de noticias, guardados y persistencia
	Header/                  # Cabecera y navegación
	Main/                    # Página de inicio
	Stories/                 # Búsqueda y paginación de noticias
	SearchForm/              # Formulario de búsqueda
	NewsCardList/            # Lista reusable de historias
	NewsCard/                # Tarjeta individual
	SavedNews/               # Página de historias guardadas
	NotFound/                # Página para rutas desconocidas
	Footer/                  # Pie de página
utils/
	hackerNewsApi.js         # Funciones para consultar la API
	constants.js             # Límites, clave de guardados y mensajes comunes
```

## Requisitos

- [Node.js](https://nodejs.org/) y npm.
- Conexión a Internet para cargar las historias desde Hacker News.

## Instalación y ejecución

Abre una terminal en la carpeta del proyecto e instala las dependencias:

```sh
npm install
```

Inicia el servidor de desarrollo:

```sh
npm run dev
```

Abre en el navegador la dirección que indique Vite, normalmente
`http://localhost:5173`.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run lint` | Revisa el código con ESLint. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la compilación de producción. |

## API utilizada

La aplicación consulta la API oficial de Hacker News en
`https://hacker-news.firebaseio.com/v0/`. Primero solicita los identificadores
de las historias principales y luego obtiene los detalles de hasta 30
historias. La búsqueda se realiza en el navegador sobre esas historias ya
cargadas.
