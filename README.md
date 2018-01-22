# Building an App with Angular and Material

This is the example project for the DPS Belfast Angular workshop. The project structure is as shown below

```
├── api - the 'backend', which is a RESTful story API
│   ├── stories.js - an array of story objects
│   ├── server.js - the actual API code
|   └── package.json - dependencies
├── scrum-board-app
│   ├── e2e - End to end tests(Protractor/WebDriver)
│   ├── src
|   |   ├── app - main application code
|   |   |   ├── app.module - top-level Angular module
|   |   |   ├── app.component.ts - The component that is first loaded when the app starts up
|   |   |   ├── app.component.html - the template for this component
|   |   |   ├── app.component.scss -styles for this component
|   |   |   ├── app.component.spec.ts - unit tests
|   |   ├── assets - static files - fonts, images etc
|   |   ├── environments - env-specific config values(if necessary)
|   |   ├── index.html - main page where the SPA is loaded
|   |   ├── main.ts - bootstrapping point for the app
|   |   ├── test.ts - bootstrapping point for the test module
|   |   ├── polyfills.ts - includes all polyfills needed for cross-browser compatibility
|   |   ├── styles.scss - global application styles
│   ├── .angular-cli.json - configuration for the Angular CLI project, includes (some) webpack config
│   ├── karma.conf.js - Karma test runner configuration
│   ├── protractor.conf.js - configuration for running E2E tests
│   ├── tsconfig.json - TypeScript configuration
│   ├── tslint.json - linting rules
│   └── README.md
└── README.md - this file
```

Follow the below instructions to get started.

1. Clone this repository.
2. Install the dependencies in both the `api` and the `scrum-board-app` projects by running `npm install` from the command line.
3. To get the API running, `cd` into the folder from the command line, and run the command `node server.js`. The API will now be available at http://localhost:666/api. You can use the `/stories` endpoint to perform CRUD on stories.
4. To start the web app, run the command `ng serve` from the `scrum-board-app` folder. The web app will now be accessible in the browser at http://localhost:4200. For the purposes of this workshop, it'd be ideal if we all use Chrome.
