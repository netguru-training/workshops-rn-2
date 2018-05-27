import * as _ from 'lodash'
import {EVENT_ADDED, GET_7_DAYS_TEMPERATURE_DATA} from '../types'
import initialDaysDataState from './initialDaysDataState'

const initialState = { data: [] }

function apiData(state = initialState /* , action */) {
  return state
}

function daysData(state = initialDaysDataState, action) {
  switch (action.type) {
    case EVENT_ADDED:
      return !state.tasksForDays[action.payload.date]
        ? {
          ...state,
          tasksForDays: {
            ...state.tasksForDays,
            [action.payload.date]: [
              { name: action.payload.date, description: action.payload.desc }
            ]
          }
        }
        : {
          ...state,
          tasksForDays: {
            ...state.tasksForDays,
            [action.payload.date]: [
              ...state.tasksForDays[action.payload.date],
              { name: action.payload.date, description: action.payload.desc }
            ]
          }
        }
    case GET_7_DAYS_TEMPERATURE_DATA:
      const newDays = [...state.days]
      const indexToBeChanged = _.findIndex(state.days, ['id', action.payload.id])
      newDays[indexToBeChanged] = action.payload

      return {
        ...state,
        days: newDays
      }
    default:
      return state
  }
}

export { apiData, daysData }
