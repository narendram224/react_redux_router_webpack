# react_redux_router_webpack
This repo is configuration of react redux ,redux-thunk and react-router configuration with webpack 5.49 
# Redux Thunk

Thunk [middleware](https://redux.js.org/advanced/middleware) for Redux.

[![build status](https://img.shields.io/travis/reduxjs/redux-thunk/master.svg?style=flat-square)](https://travis-ci.org/reduxjs/redux-thunk)
[![npm version](https://img.shields.io/npm/v/redux-thunk.svg?style=flat-square)](https://www.npmjs.com/package/redux-thunk)
[![npm downloads](https://img.shields.io/npm/dm/redux-thunk.svg?style=flat-square)](https://www.npmjs.com/package/redux-thunk)

```sh
npm install redux-thunk

yarn add redux-thunk
```

## Note on 2.x Update

Most tutorials today assume that you're using Redux Thunk 1.x. You may run into
issues when you run their code with 2.x. **If you use Redux Thunk 2.x in
CommonJS environment,
[don’t forget to add `.default` to your import](https://github.com/reduxjs/redux-thunk/releases/tag/v2.0.0):**

```diff
- const ReduxThunk = require('redux-thunk')
+ const ReduxThunk = require('redux-thunk').default
```

If you used ES modules, you’re already all good:

```js
import ReduxThunk from 'redux-thunk'; // no changes here 😀
```

Additionally, since 2.x, we also support a
[UMD build](https://unpkg.com/redux-thunk/dist/redux-thunk.min.js):

```js
const ReduxThunk = window.ReduxThunk.default;
```

As you can see, it also requires `.default` at the end.

## Why Do I Need This?

With a plain basic Redux store, you can only do simple synchronous updates by
dispatching an action. Middleware extends the store's abilities, and lets you
write async logic that interacts with the store.

Thunks are the recommended middleware for basic Redux side effects logic,
including complex synchronous logic that needs access to the store, and simple
async logic like AJAX requests.

For more details on why thunks are useful, see:

- **Stack Overflow: Dispatching Redux Actions with a Timeout**  
  http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559  
  Dan Abramov explains the basics of managing async behavior in Redux, walking
  through a progressive series of approaches (inline async calls, async action
  creators, thunk middleware).

- **Stack Overflow: Why do we need middleware for async flow in Redux?**  
  http://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux/34599594#34599594  
  Dan Abramov gives reasons for using thunks and async middleware, and some
  useful patterns for using thunks.

- **What the heck is a "thunk"?**  
  https://daveceddia.com/what-is-a-thunk/  
  A quick explanation for what the word "thunk" means in general, and for Redux
  specifically.

- **Thunks in Redux: The Basics**  
  https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60  
  A detailed look at what thunks are, what they solve, and how to use them.

You may also want to read the
**[Redux FAQ entry on choosing which async middleware to use](https://redux.js.org/faq/actions#what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else)**.

While the thunk middleware is not directly included with the Redux core library,
it is used by default in our
**[`@reduxjs/toolkit` package](https://github.com/reduxjs/redux-toolkit)**.

## Motivation

Redux Thunk [middleware](https://redux.js.org/advanced/middleware)
allows you to write action creators that return a function instead of an action.
The thunk can be used to delay the dispatch of an action, or to dispatch only if
a certain condition is met. The inner function receives the store methods
`dispatch` and `getState` as parameters.

An action creator that returns a function to perform asynchronous dispatch:

```js
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}
```

An action creator that returns a function to perform conditional dispatch:

```js
function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}
```


## License

MIT
