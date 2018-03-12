react-redux-app

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
  redux-thunk
  redux-promise
  redux-saga


