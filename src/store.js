import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import Immutable from "seamless-immutable"

import rootReducer from "./modules"

const initialState = Immutable({})
const enhancers = []
const middleware = [thunk]

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(rootReducer, initialState, composedEnhancers)

// sagaMiddleware.run(rootSaga)

export default store
