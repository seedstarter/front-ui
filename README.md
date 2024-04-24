# front-ui
## Description:
front-ui is a template project for building user interfaces using modern web development technologies. It includes configuration files and dependencies to help you quickly set up and develop web applications with ease.

## Features:

-  Webpack Configuration: The project is pre-configured with webpack 5.1 to bundle and optimize your JavaScript and TypeScript files for deployment.
-  HTML Templating: HTML files are generated using HtmlWebpackPlugin, allowing you to create dynamic HTML templates with ease.
-  Development Server: Utilize webpack-dev-server to quickly preview and develop your application in a local development environment. The server supports hot module replacement, providing a seamless development experience.
-  SCSS Support: Easily style your application using SCSS syntax, which is processed and compiled into CSS during the build process. PostCSS and Autoprefixer are included to ensure cross-browser compatibility.
-  Bootstrap Integration: Bootstrap 5.3 is included as a dependency, providing a comprehensive set of UI components and utilities to streamline your UI development process.
-  Testing with Jest: Jest is configured for testing your JavaScript and TypeScript code, enabling you to write and run tests with ease.
-  TypeScript Support: TypeScript 5.4 is integrated into the build process using ts-loader, allowing you to write type-safe code and catch errors early in development.

## Usage:

- Clone the repository: git clone <repository-url>
- Install dependencies: npm install

- On two separated terminals navigate to projects root directory:
1. on first terminal run npm command: npm run build:dev 
2. on second terminal run npm command: npm run serve 

**It's essential to utilize this specific sequence of commands when working with webpack-dev-server alongside your existing configurations. This ensures smooth serving of an HTML file while webpack continuously monitors static files within the dist directory.


