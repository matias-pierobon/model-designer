import { combineReducers } from "redux"
import * as schema from './schema'

export default combineReducers({
  [schema.NAME]: schema.reducer
})
