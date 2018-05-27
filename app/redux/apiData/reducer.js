import * as _ from 'lodash'
import { EVENT_ADDED, GET_7_DAYS_TEMPERATURE_DATA } from '../types'
import initialDaysDataState from './initialDaysDataState'

const initialState = { data: [] }

function apiData(state = initialState /* , action */) {
  return state
}

let nextTaskId = 100
function daysData(state = initialDaysDataState, action) {
  switch (action.type) {
    case EVENT_ADDED:
      const { payload } = action
      nextTaskId += 1
      const newTask = {
        id: nextTaskId,
        title: payload.name,
        description: payload.desc,
        done: false
      }

      const tasksForDay = state.tasksForDays[payload.date] || []
      tasksForDay.push(newTask)

      return {
        ...state,
        tasksForDays: {
          ...state.tasksForDays,
          [payload.date]: tasksForDay
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
