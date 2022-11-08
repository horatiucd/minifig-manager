# MinifigManagerWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Utils

### Install Bootstrap

Run `npm install bootstrap --save` in the project folder

### Add Minifig class

Run `ng g class minifig` in the project folder. 

It creates 2 files in /src/app:

- minifig.spec.ts
- minifig.ts

### Add Minifig list component

Run `ng g c minifig-list` in the project folder.

It creates 4 files in /src/app:

- minifig-list/minifig-list.component.html
- minifig-list/minifig-list.component.spec.ts
- minifig-list/minifig-list.component.ts
- minifig-list/minifig-list.component.css

It updates 1 file:

- app.module.ts

### Add Minifig service

Run `ng g s minifig` in the project folder.

It creates 2 files in /src/app:

- minifig.service.spec.ts
- minifig.service.ts

### Manually configure routing

- index.html - head shall contain - `<base href="/">`
- create `app-routing.module.ts` in /src/app (AppRoutingModule)

`import { NgModule } from '@angular/core';`

`import { Routes, RouterModule} from '@angular/router';`

`const routes: Routes = [];`

`@NgModule({`

`imports: [RouterModule.forRoot(routes)],`

`exports: [RouterModule]`

`})`

`export class AppRoutingModule { }`

- add AppRoutingModule in `app.module.ts`, under `@NgModule imports`
- configure routing in the `app-routing.module.ts` in the `Routes` array
- configure the router outlet directive in `app.component.html` - add `router-outlet` to update the templates to dinamically load components based on the URL path.

### Add Minifig Component / Form

Two way binding:

- event binding (HTML template to component) 
- data binding (component to HTML template)

Issue `ng g c add-minifig` from the project folder.
