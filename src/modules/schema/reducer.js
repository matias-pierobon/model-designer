import * as types from "./constants"
import Immutable from "seamless-immutable"

const initialState = Immutable({
  entities: [ 
    { name: "Persons", attributes: [
      { name: "id", type: "int" },
      { name: "firstname", type: "string" },
      { name: "lastname", type: "string" },
      { name: "birthdate", type: "date" }
    ]}
  ]
})

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ENTITY:
      let entity = {
        name: action.payload.name
      } 
      return state.set("entities", state.entities.concat(entity))

    default:
      return state
  }
}
