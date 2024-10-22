# B2bTakeHomeApp

Este proyecto está pensado para aplicar la prueba técnica del equipo de B2B de Aplazo.

## Contexto

Estamos en un proceso de migración de nuestro proyecto legacy, el cual necesita desacoplar la UI de `Angular Material` por lo que estamos construyendo nuestra propia libreria de componentes.

Además de lo anterior, queremos que la mayor parte de la lógica de negocio se encuentre completamente desacoplada de la UI, esto nos ayudara a agilizar las pruebas unitarias y a tener un código más limpio y mantenible.

## Descripción general

Dentro del proyecto se encontrará una carpeta `projects` en la cual se encuentra la librería de componentes que estamos construyendo, dicha librería es `shared-ui` y al final del proceso de migración, está librería será utilizada por todos los proyectos de nuestro equipo. Así mismo la librería de componentes hace uso de `secondary entry points` para poder consumir solo los componentes que realmente se necesitan y así optimizar el tree shaking y por supuesto el bundle final de cada aplicación.

Por otro lado, la aplicación la encontrara en la carpeta `src` y la organización de los archivos es la siguiente:

**`features`**: En está carpeta se encuentran los módulos de la aplicación, cada módulo tiene su propia carpeta y dentro de esta se encuentran los componentes, servicios, pipes, etc.

**`core`**: En está carpeta se encuentran los servicios que son compartidos por toda la aplicación, como por ejemplo los interceptores, los guards, los servicios de autenticación, etc.

La arquitectura de la aplicación se espera que este fuertemente enfocada en clean architecture con una mezcla de hexagonal. Por ejemplo:

**`features/login`**

- La capa de dominio contiene entidades, clases abstractas de repositorios, factories y demás clases que no dependen de la UI.

- La capa de aplicación contiene los casos de uso, los cuales serán el punto de contacto con nuestra UI. Es decir, el componente inyectará el caso de uso y se ejecutará el método correspondiente.

- La capa de infraestructura contiene las implementaciones de los repositorios, los servicios, los providers, etc.

## Para empezar

Para poder ejecutar el proyecto, es necesario tener instalado `Node.js` versión 18+ y `npm` versión 10+ en su computadora.

```bash

# Instalar las dependencias

npm install

```

```bash

# Construir la librería de componentes

npm run build:ui

```

```bash

# Iniciar la aplicación en modo de desarrollo

npm run dev:app

```

```bash

# Construir la aplicación para producción

npm run build:app

```

## Tareas

### [Login](src/app/features/login/infra/components/login/login.component.ts)

El feature de login está incompleto, se espera lo siguiente:

- [ ] Completar el layout como en la imagen mostrada ![alt text](image.png)

- [ ] Agregar el botón del input de password para mostrar y ocultar la contraseña

- [ ] Actualmente tenemos un servicio de autenticación mockeado, sin embargo, no se está validando el usuario y la contraseña. Implementar la validación del usuario y la contraseña en la capa de aplicación.

- [ ] Mostrar mensajes de error en caso de que el campo correo electrónico o contraseña estén vacíos o no sean válidos. (Considera mostrar un mensaje debajo de cada campo, así como mostrar mensajes de error que sean regresados por el backend, para esto último se puede utilizar alguna librería de toastr si se considera necesario).

- [ ] Hacer uso de RegExp para validar el correo electrónico.

- [ ] Completar la implementación de la directiva [`noWhiteSpacesDirective`](projects/shared-ui/src/lib/directives/no-white-space.directive.ts) para que el input de correo electrónico no permita escribir espacios en blanco y usarla en el input correspondiente.

- [ ] Completar la implementación de la directiva [`lowerCaseDirective`](projects/shared-ui/src/lib/directives/lower-case-text.directive.ts) para que el input de correo electrónico solo permita letras minúsculas y usarla en el input correspondiente.

- [ ] Agregar pruebas unitarias a los componentes, directivas, casos de uso y demás clases que consideres necesario.

### [App layout](src/app/features/layout/layout.component.ts)

- [ ] Generar un título dinámico dependiendo de la ruta donde el usuario se encuentre ![alt text](image-1.png)

- [ ] Agregar funcionalidad para cerrar sesión

- [ ] Al hacer clic en el logo debemos redirigir al usuario a la ruta `/apz/home`

- [ ] Agregar un guard para proteger la ruta `/apz/home` y `/apz/dashboard` de usuarios no autenticados

- [ ] Agregar un guard para proteger la ruta `/auth` de usuarios autenticados

- [ ] Agregar pruebas unitarias a los componentes, servicios, guards y demás clases que consideres necesario.

#### Nice to have

- [ ] Icono dinámico en el [`sidenavLink`](projects/shared-ui/sidenav/src/sidenav-link/aplazo-sidenav-link.component.ts) (es decir, que el icono sea diferente para cada link, y que dicho icono se pueda inyectar desde el componente padre)

### [Home](src/app/features/home/infra/home.component.ts)

- [ ] Queremos implementar en la vista inicial un resumen con la información contenida en nuestra [base de datos de operaciones](src/app/features/shared/infra/db.json) tal como se muestra en la figura ![alt text](image-2.png)

#### Nice to have

- [ ] Agregar un componente de selección múltiple para filtrar las operaciones por `branchId`

- [ ] Agregar un componente de fecha para filtrar las operaciones por `date`

### [Historial]()

- [ ] Implementar un módulo de historial de operaciones, donde se muestre la información de las operaciones realizadas por el usuario, tal como se muestra en la figura. ![alt text](image-3.png) El número de pedido es el denominado `loanId` y la fecha de la operación es la marcada como `updatedAt`. Utiliza la información contenida en nuestra [base de datos de operaciones](src/app/features/shared/infra/db.json)

#### Nice to have

- [ ] Implementar un contador de operaciones y un filtro de fecha. ![alt text](image-4.png)
- [ ] Implementar funcionalidad de sort en los headers de la tabla.

### Extras

- [ ] Dockerizar la aplicación. Incluir un archivo `Dockerfile` para montar la SPA en un servidor `nginx`.

- [ ] Implementar los servicios backend en el lenguaje de su preferencia y compartir el link al repositorio.

## Notas

> El desarrollo de la prueba debe ser realizado en una branch con el nombre `feature/[primer nombre del candidato]_[primer apellido del candidato]` (si existen conflictos agregar el segundo apellido), por ejemplo: `feature/juan_perez` y hacer un `pull request` a la rama `master` del repositorio.
