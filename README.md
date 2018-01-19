# The TSI Angular Example App – Local Version!

See demo at go/ng-scaffolding-demo

NOTE: There are two versions of this project:

1.  G3 ready for production: setup with relevant BUILD files found at
    go/ng-scaffolding
1.  Local for prototyping (this one): generated with [Angular
    CLI](https://github.com/angular/angular-cli) and found at found at
    go/ng-scaffolding-local

### What is it?

A scaffolding Angular Material Design app which includes a **header** (logo,
page titles, and sub-page navigation buttons), a **sidebar** (logo, top-level
navigation), and components with **child components** which are loaded and
navigated to via configured **routes**.

The app uses **SASS**, **Material Design components**, and the **fxLayout**
module for flex-box layouts.

Navigation is provided through top-level and child routes. These routes are
configured with custom data which updates components with page details and route
info upon navigation changes, accessed via a 'routes' service.

### Features included:

*   SASS
*   Material design components
*   Flex-layout to provide flex-box view layout features
*   Accessig shared data through a singleton service
*   Top-level and child routes with examples of imperative and decarative route
    navigation.
*   Custom data defined in the route configurations to update components on
    completion of route navigation

### Instructions for developing locally

Begin by loading the relevant modules by running `npm install`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Instructions for compiling

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
