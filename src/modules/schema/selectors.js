import { createSelector } from "reselect"
import { NAME } from "./constants"

export const getEntities = createSelector(
  state => state[NAME],
  state => state.entities
)
