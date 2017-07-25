# React & Redux

## Why Redux

* Most popular & powerful React combo
* Redux is a Flux implementation
* Redux centralizes state in one store - makes things easier to understand
* Reduced boilerplate code
* Redux uses a immutable store
* Supports hot reloading

## Environment Links

* React-Slingshot on github
* pluralsight-redux-starter on github

### babel polyfill allows you to use features of ES6 that do not compile


## Webpack Setup

* debug: true
* devtool: 'cheap-module-eval-source-map'
* hot reload plugins go in front of entry file in the entry array
* target: webpack will bundle the code in a way that either the browser or node will understand
* output: doesn't generate any actual files - npm run build does the file creation
* modules: transpiles javascript, css, and if you want to use bootstrap, you can include files specific to the fonts and outputs that it uses here too.

## editorconfig

* allows you to set linting rules that will be interpretted across browsers

## babel transpiling

* .babelrc is the file babel uses to transpile
* presets:  stores the relevant presets
* env: stores environment specific babel plugins

## using Express with React

* set up express to import webpack  `import webpack from 'webpack'`
* import the webpack.config.dev file  `import config from 'webpack.config.dev'`
* after running express 
```const app = express();```, set ```const compiler = webpack(config);```
* this will configure webpack serverside
* next: 
```
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
```
* publicPath in the webpack.config.dev file was set to '/'
* use webpack-hot-middleware `app.use()

## npm scripts

*  npm scripts can remove a layer of abstraction that gulp and grunt add
*  babel-node will transpile es6 in the npm scripts that you call
* put your scripts in separate files - ultimately the server script is just an npm script that it references
* "prestart" script will run prior the the npm start script and can link to an external script file for something like a startup message
* you can set up a script to run eslint from the npm scripts - when the script is run, it will give warnings or errors on specific linting rules that can be configured with the .eslintrc file
* you can also live lint by using watch in a terminal window
* parallel scripts: npm run all will put alllllll of your scripts into a single command line output
* testing is done with mocha and is as simple as installing the mocha module, an expect module, and setting up your npm scripts to include testing.  You can even add a watch flag and add it to the single stream of watched outputs.

## React Refresher

* ES5 Class component: `React.createClass({})`
* ES6 React:
  * No autobind!  Autobind your functions to this in the constructor.
  * propTypes are declared separately below the class (this is where you declare the prop expectations)
  * state must be initialized in the constructor
  ### Stateless functional components
  * If your component doesn't need to manage state, utilize component lifecycle methods, or do 'performance optimizations', use a stateless functional component.
  * The only argument passed into a SFC is `(props)` - this is the only way they get their data and props are immutable so they cannot be changed.
  * in ES6, use const to declare stateless functional components and arrow functions instead of function declarations.
  ### Benefits of stateless functional components:
  * No class needed - shorter
  * No 'this' keyword and as such no binding
  * Enforce best practices - keep state out of presentation components.
  * Less noise since there are less requirements.
  * Prevents bloated compponents which is 'code smell'
  * Simply takes props and spits out HTML
  * Easy to understand
  * Easy to test
  * Will eventuall offer improved performance
  ### When to use Stateless Functional Components
  * Whenever possible!
  * Use Class if you need state, references to the actual DOM, or when you need to use lifecycle methods.
  * Also use class if you need to nest functions
  * Otherwise, use stateless functional components
  ### Alternative ways to create components:
  * Object.create
  * Mixins
  * Parasitic Components
  * StampIt
  * `these won't be used in this tutorial - research independently`
  ### Container vs. Presentational components
  #### Container
  * Little to no markup
  * The backend to Presentational components
  * Make use of Redux'
  * Often stateful
  * Business logic
  * Smart
  * Stateful
  * Controller view
  #### Presentational
  * Nearly ALL markup
  * Receive data and action via props
  * Typically stateless functional components
  * Dumb
  * Stateless
  * view
  * _When you notice that a component doesnt use props they receive but just forward them down, its a good idea to introduce some container components_

## Application Structure
  * Put components in its own folder
  * Inside components folder, separate the components into their views in folders
  * For separate pages, use react-router!  In this example, a link function is being imported in curly boys from react-router and then used as a JSX component
  * ``` import {Link} from 'react-router' ```
  * Your presentational components can be scaffolded into their own classes - the page views will be parents and will have all of the little snippets included
  * The parent to all of the pages will often include your navigation and header components
  * This is called App.js
  * children are passed in with react router

### typical App.js parent component:
```
ipmort React, {PropTypes} from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p>Header</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
```

  * react router will pass chilren as props to the parent component
## Routing React components

* routes.js is where the routing will happen
* this file needs react and react router imported along with all of your parent presentational routes
```
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
    //parent - always load this
    <Route path="/" component={App}>
    //children - load these when passed as children
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
```
* in the entry point, import babel-polyfill, React, {render} from react-dom, {Router, browserHistory} from react-router, routes from the routes.js, css, and bootstrap
```
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
/** browserHistory allows us to utilize the browser history */
import { Router, browserHistory } from 'react-router';
import routes from './routes';
/** vvv- webpack allows us to do this -vvv */
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
```

* common components can be separated out into a common folder inside of components
* your header component can be a SFC
```
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to "/" activeClassName="active"> Home </IndexLink>
            <Link to="/courses" activeClassName="active"> Courses </Link>
            <Link to="/about" activeClassName="active"> About </Link>
        </nav>
    );
};

export default Header;
```

## Redux

* Useful for complex data flows
* If you're utilizing the same data in multiple places, it's a good sign Redux may be helpful
* Redux uses a store which is basically a simple local client side database.
* Components emit actions to update state throughout the app

## Priciples of Redux

* Single immutable store
* components emit actions
* reducers update state
* In redux, data flows down, actions flow up.
* Redux uses a single store while Flux can use multiple stores.
* Reducers - take the current state and an action, and returns new states
* Containers seem like controllers - contain the logic for passing data and actions.  This makes react components dumb components that just receive props rather than passing everything around.
* Redux store is immutable
* Single stores make it easier to handle data as you don't have to pass any data between multiple stores.
* React-redux is a companion library that connects react components to the redux store automatically
* Reducers return an updated state in order to maintain principle of immutability with redux

## Actions, reducers, containers, store

### Actions
* actions describe the user intent.  always have a type.
* an object with properties.  the first is type and the rest can be one or more properties or objects.
```
{type: CLONE_CAT, catToClone: 'Moo' }
```
* A plain object.
* functions and promises cannot be passed in actions as they cannot be serialized as JSON
* Action creators don't have to be used but it's good form to do so.
* By using action creators, the spot that calls for the action doesn't need to know the action creators structure - it becomes an interface and the action can be changed without changing the accessor
* When actions are created, they change the state in the store.

### Store
* The redux store is created in you entry point by calling create store.
* The createStore function is passed to the reducer function.
* Simply stores data
* Single source of the store reduces complexity - simplifies the application.
* Stores have methods
  * store.dispatch(action) - dispatches an action
  * store.subscribe(listener)
  * store.getState() returns it's current state
  * replaceReducer(nextReducer) - useful to support hot reloading.
* There is no method for changing the store - you can only change it with an action
* Store is ultimately changed in the reducers



### Immutability
* The state is immutable - It cannot be changed directly.
* Instead of changing the state object, you must return a new object that represents the application's new state.
* Every time you change the value of an immutable, a new copy is created.

* changing state mutably:
```
state = {
    name: 'Ben Bizzey',
    role: 'Bizzness'
}

state.name = 'Ben Frizzy';
return state;
```

* changing state immutably:
``` state = {
    name: 'Ben Frizzy',
    role: 'Frizziness'
}

 return state = {
    name: 'Benny Boy',
    role: 'Boysness'
}
```

* Immutable state improves performance
* To change an immutable state, get used to creating copies of objects.  This way you can change parts of the state object's copy then save the altered copy as 
* Object.assign creates a new object but allows you top specify an existing object as a template.
* First param is the target, then it takes any number of source objects.
* First param is always an empty object.
* Object.assign makes a _deep copy_
* You must use babel polyfill when using Object.assign because babel cannot transpile Object.assign
### Why immutability
* Improves clarity - always changes in the reducer.
* Improves performance - the application doesn't have to check the entire object to figure out if the object changed.  If you don't change anything unless you change everything, you don't have to check everything.
* Immutability helps support an excellent debugging process - you can do time travel debugging, undo/redo, change one step several steps back and see how it affects the state, etc
### Immutability with ES6
* Object.assign and Spread operator are all you usually need
* Immutable.js
* redux-immutable-state-invariant will check to make sure state is not directly mutated.
* Immutable.js is made by facebook and enforces immutability

### Reducers
* Just a function that returns new state
* receivers the current state and an action as the argument and returns new state
* meat grinder (state, action) => new state;
* Usually contain a switch statement that checks the type of the action
* once the new state is returned from the reducer, the store is updated
* Once the store is updated, React re renders any components that were updated.
* The components are connected to the store using react redux
* example reducer:
```
function myReducer(state, action){
    switch: (action.type) {
        case 'INCREMENT_COUNTER':
            return Object.assign(
                //empty object
                {},
                //use current state as a model
                state,
                //change the copys counter property to be equal to 1 more than the value of the prevState's counter property
                {counter: state.counter + 1}
            );
    }
}
```
* reducers are meant to be pure functions.  Calling reducers with the same arguments always returns the same values.  NO SIDE EFFECTS!
* Never mutate arguments, perform side effects, or call non pure functions
* When a store is created, Redux calls the reducers and returns their balues as the stores initial state
* All reducers get called when an event action is called
* Reducers should always return the state that is passed to them if it doesnt need to do anything.
* All of the reducers together represent your state
* Reducer composition means that reducers can handle some actions, no actions, or that multiple reducers can handle one action

## Connecting Redux to React Components

### Container vs Presentation Components
* Containers contain all the logic necessary to support the dumb presentation components
* Container components are the only components that are aware of Redux at all
* Container components subscribe to Redux states while presentational components read data from props
* Copntainer components dispatch Redux actions, Presentational components invoke callback on props
* Container components are usually generated by react-redux
* Presentational components are usually stateless functional components that are hand written

### React-Redux - Provider and Connect
* Connects Store to React
* Redux can be used with Redux and Angular or even jQuery or plain Javascript
* Providers attach the app to the store.
* Connect creates container components
#### Provider
* Wraps your applications top level App component.  This passes this.props.store to all of your components.
#### Connect
* wraps components so they're connected to the Redux Store
```
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorPage);
```
* You pass connect function two functions -
  * One that specifies the state you want to expose you your component
  * And one that specifies the actions you want to expose.
* You don't have to manually subscribe and unsubscribe to the store
* There are no lifecycle methods required - this means you can use stateless functional components that do not have lifecycle methods
* No This
* You can declare what subset of state you want to provide to connect functions
### Map State To Props
* What state should I expose as props?
* Which state parts do you want to send to your  components?
* Memoization caches function calls that have already been made - If you're doing a lot of expensive operations then you should add this to imporve performance
### Map Dispatch To Props
* Which actions do you want to pass to your components?
* Three ways to handle mapDispatchToProps:
  #### Ignore it and use dispatch:
  ```this.props.dispatch(loadCourses())```
    * This puts redux in your components, bad
  #### use mapDispatchToProps
  * Manually wrap in the mapDispatchToProps(dispatch){} function - return the method you want to pass.
  ```
  function mapDispatchToProps(dispatch) {
      return{
          loadCourses: () +. {
              dispatch(loadCourses());
          },
          createCourse: (course) => {
              dispatch(updateCourse(course));
          },
          updateCourse: (course) => {
              dispatch(updateCourse(course));
          }
      };
  }

  //in component:
  this.props.loadComponent();

  ```
  * This is preferable to using plain dispatch, start with this
  * Specifies each action explicitly
  * Eventually this becomes redundant as a lot of the same code is being used - graduate to _bindActionCreators_
  #### Use bindActionCreators
  * Ships with Redux
  * returns an actions method called bindActionCreators(actions, dispatch)
  ```
  function mapDispatchToProps(dispatch){
      return {
          actions: bindActionCreators(actions, dispatch)
      };
  }
  //in component:
  this.props.actions.loadCourses
  ```
  * Both bind and wrapping make it so that your components do not deal with Redux at all

## Wrap up
  ### React:
    * Hey @CourseAction, someone clicked "save course"
  ### Action
    * Thanks @React! I'll dispatch an action so relevant reducers can update the state
  ### Reducer
    * Thank you @Action.  You passed me the current state and the action to perform.  Since I am concerned with this slice of the current state, I'll make a new copy of state and return it to the store
  ### Store
    * Thanks for updating the state @reducer! I'll make sure all connected components are aware.
  ### React-Redux
    * Thanks for the new data, @store. I'll intelligently update the necessary components so no unnecessary updates are made.
  ### React
    * I got the data, @React-Redux.  I'll update the UI.

# Project Notes

## Course Action / Reducer Notes
* `...iterableObject` : spread operator.  this is the same as listing out the iterable object element by element.  You can add additional iterable instances by using `[...data, 4, 5, 6]`
* iterable Objects will soon be available : `let objClone = { ...obj }`
* actions and reducers can be placed in `src/actions` and `src/reducers`
* place your root reducer in the `src/reducers` folder as index.js

```
import {combineReducer} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers() ({
    courses
});

export default rootReducer;
```

* the name that you use in the `rootReducer`'s properties is what you will eventually use as `this.state.courses` for example, even though your reducer may be name courseReducer.  courseReducer can be imported as course since it is the default export.
* shorthand property name : in ES6, if the property name on the left is the same as its value on the right, we can omit the name on the right.

```
courses: courses
```

can be shortened to:

```
courses
```

## Creating Store
* `src/store` - keep store files here
* `configureStore.js` - initial configuration


    











   





