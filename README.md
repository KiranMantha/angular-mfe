# AngularMfe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

# Steps to create monorepo using angular cli

- create a blank workspace using `ng new <your-workspace-name> --create-application false`
- navigate to new workspace and generate application using `ng generate application <your-mfe-name>`
- you can also create shared libraries by running `ng generate library <your-lib-name>`
- the default port on which angular runs is 4200. now inorder to run every mfe under a seperate port, install module federation dependency by running `ng add @angular-architects/module-federation --project products --port 420X`(where _X_ is a number like 4201, 4202.. etc). run this command for every application under the workspace.
- the above command will generate `webpack.config.js` for every application. provide a unique name for a given application in `ModuleFederationPlugin` section of its `webpack.config.js`.

# Useful links

1. multiple angular projects under one workspace: [multiple projects in angular](https://angular.io/guide/file-structure#multiple-projects)
2. webpack module federation: [module federation](https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/)
3. MFE from okta: [okta mfe](https://developer.okta.com/blog/2022/05/17/angular-microfrontend-auth)
