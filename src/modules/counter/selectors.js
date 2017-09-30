// import { createSelector } from 'reselect'

import { NAME } from './constants'


export const getCount = (state) => state[NAME].count

export const getIsIncrementing = (state) => state[NAME].isIncrementing

export const getIsDecrementing = (state) => state[NAME].isDecrementing

