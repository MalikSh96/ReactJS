# ReactJS for Beginners

# What is ReactJS
ReactJS is an open source javascript library, and is often used as the **V** in the **MVC (Model-View-Controller)**, as is a library for
creating ***user interfaces***.

In short, ReactJS is an open source library for building user interfaces.

ReactJS is **NOT** a framework, and it focusses on **UI** only, and not other aspects of an application like for example routing or HTTP requests., it is responsible for only building rich user interfaces.

ReactJS has a rich ecosystem, which can help you handle routing and HTTP requests and other functionalities, because ReactJS plays really well with other libraries and is more than capable of building full-fledged web applications.

# Why learn React, theoretically
It is not going to die down anytime soon, because it is created and maintained by Facebook.

It also has a huge community behind it, which will help you search for solutions for eventual problems because of its wide use, and other developers may already have solved an issue that you have.

React is also in demand skillset.

# Why learn React, technically
React has a ***Component Based Architecture***, and this lets you break down your application into small encapsulated parts, which can then be composed to make more complex UIs. 

For example: 

A webpage is splitted into components, such as a main content area, navigation area, a sidebar, a footer and so on. 
Each section represents a **component** which when composed in the right way make up the entire website.

ReactJS takes allows you to build such components with javascript, reusable components which can then be used throughout your webpage, and components can hold both **html** code but also **javascript** logic, which then allows you to listen to ***user actions***, to display content dynamically, to update the **UI** whenever a change happens, without having to reach out to a server and ***fetch*** a new view.

Components also make it possible to write reusable code.

Another key point is that React is declarative, and this means that we just have to tell React what we want, and React will build the actual UI with its React-DOM library, this is the ***declarative*** paradigm, to give a relatable example:

***You go an artist, you ask the artist to draw a landscape, you don't tell them how to draw the landscape, it is up to the artist*** - This is declarative, you tell what has to be done and the artist will get it done for you.

The same goes goes for React, we have to tell React what the UI should look like, and React will create the actual UI, React will make it painless for you to create complex UIs by abstracting away the dificult parts.

React will handle efficiently updating and rendering of just the right components in your application when your data changes.

DOM updates are handled gracefully in React.

You can seamlessly integrate React into any of your applications, be it a portion of your page or a complete page or even an entire application itself, React will fit right in.

Once you have a good grasp on React, you can start building mobile applications with React Native.

# Prerequisites to get started with React
HTML, CSS and JavaScript fundamentals are absolutely necessary.

For this course we will also make use of ES6.

For JavaScript (in this project) be aware of `this` keyword, `filter`, `map` and `reduce` functions.

For ES6 be aware of `let`, `const`, arrow functions, template literals, default parameters, object literals, rest and spread operators and destructuring assignment.

# The steps to be done
We will be working in the following order:

1. React **fundamentals**.
2. React and **HTTP**.
3. **Routing** with React.
4. State management with **Redux**.
5. Taking a look at useful **utilities/libraries** that will work well with React. 

# Setting up development environment
For ReactJS, we need 2 things installed:

1. [Node](https://nodejs.org/en/)
2. Text editor

# Creating a new React application using the **Create-react-app** package.
We will be making use of [this](https://github.com/facebook/create-react-app). **Create React App** is a command line interface tool that allows you to quickly create and run React applications with no configurations.

This means that you simply run a command and an entire React project is created for you.

To start creating our React application we do the following: 

```
npx create-react-app my-app
cd my-app
npm start
```
***npx*** is a npm package runner which gets installed when you install Node, and that is why we are directly able to run `npx create-react-app <project_name>` without having to install it, npx takes care of that for us. 

# Alternate approach for creating a new React application
In this approach we install the **Create-react-app** package globally and then use the package to generate the projects.

```
npm install create-react-app -g
create-react-app <project_name>
```
# ReactJS_Tutorial

# ------------------------------------------------------------------------------------------------------------------
# ------------------------------------------------------------------------------------------------------------------
# ------------------------------------------------------------------------------------------------------------------
# Initialized readme content from Create-React-App

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
