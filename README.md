react-redux-app

- nodejs version: 8.11.1
- setup dev environment:
    babel
    webpack
    eslint
    mocha
    express
    npm scripts

- four ways to create react components:
    ES5 create class component
    ES6 class component
    ES5 stateless component
    ES6 stateless component (best way)
    => container & presentation components

- explore Redux: when we need Redux ?
  complex data flow
  inter component communication
  non-hierarchical data
  many actions

- explore Redux: 3 principals
  one immutable store
  action trigger changes
  reducers update state

  Action => Store ( Store <=> Reducers ) => React => back to Action
  Redux: store & change logic are seperated, one store & hierarchical reducers, no dispatcher

- Action + Store + Reducer
  Actions      : represent user intent, must have type
  Store        : dispatch, subscribe, getState
  Immutability : just return a new copy & 3rd Immutable.js
  Reducers     : must be pure, multiple per app, slice of state

- Connecting React to redux
  Action, Store, Immutability, Reducers
  React-Redux:
    Provider:
    Connect:
      mapStateToProps
      mapDispatchToProps

- Redux Flow:
  Action
  Store
  Reducer
  Container Component

- Async in Redux:
  redux-thunk   : return functions from actin creators
  redux-promise : flux standard actions and promises
  redux-saga    : use ES6 generators and rich domain-specific language

- Async Writes in Redux:
  create Manage Course Page
  create reusable Form Input by Bootstrap
  populate Form via:
      mapStateToProps
      componentWillReceiveProps

- Handling Async Status and Errors
these issues:
  No initial loading indicator
  No feedback upon clicking save
  API fails silently
    displaying & tracking async status
    handling errors

- Testing React & Redux

- Build Production:
  /dist:
    index.html
    bundle.html
    styles.css
  
  /src:
    alots of files ...

- Production build process:
  Lint and runs tests
  Bundle and minify JS and CSS
  Generate JS and CSS sourcemaps
  Exclude dev-specific concerns
  Build React in production-mode
  Open prod build in browser

- Tasks:
  - Setup Webpack
  - Setup HTML Build
  - Setup Dist Server
  - Setup npm scripts
  - Verify results  
