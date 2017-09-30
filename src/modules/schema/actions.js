import { createAction } from 'redux-actions'
import * as types from './constants'

export const createEntity = createAction(types.CREATE_ENTITY)