import * as _ from 'lodash'
import { EVENT_ADDED, GET_7_DAYS_TEMPERATURE_DATA, TASK_COMPLETION_TOGGLED } from '../types'
import initialDaysDataState from './initialDaysDataState'

let nextTaskId = 100

const replaceReplaceTasksForDay = (state, dateString, tasksForDay) => {
  return {
    ...state,
    tasksForDays: {
      ...state.tasksForDays,
      [dateString]: tasksForDay
    }
  }
}

function daysData(state = initialDaysDataState, action) {
  switch (action.type) {
    case EVENT_ADDED:
      const { payload } = action
      nextTaskId += 1
      const newTask = {
        id: nextTaskId,
        title: payload.title,
        description: payload.description,
        done: false
      }

      const tasksForDay = state.tasksForDays[payload.date] || []
      tasksForDay.push(newTask)

      return replaceReplaceTasksForDay(state, payload.date, tasksForDay)

    case GET_7_DAYS_TEMPERATURE_DATA:
      const newDays = [...state.days]
      const indexToBeChanged = _.findIndex(state.days, ['id', action.payload.id])
      newDays[indexToBeChanged] = action.payload

      return {
        ...state,
        days: newDays
      }

    case TASK_COMPLETION_TOGGLED:
      let tasksForDay2 = state.tasksForDays[action.dateString] || []
      tasksForDay2 = tasksForDay2.map((task) => {
        if (task.id === action.taskId) {
          return {
            ...task,
            done: !task.done
          }
        }

        return task
      })

      return replaceReplaceTasksForDay(state, action.dateString, tasksForDay2)

    default:
      return state
  }
}

export { daysData }
