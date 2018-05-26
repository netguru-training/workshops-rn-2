import moment from 'moment/moment'
import * as _ from 'lodash'
import { GET_TEMPERATURE_DATA } from '../types'

const initialState = { data: [] }

function apiData(state = initialState /* , action */) {
  return state
}

// FIXME remove this data
/**
 * @param {moment} aDate
 * @param {number} temperature
 * @param {string} icon
 * @returns {{id: string, date: Date, tasks: Array, weather: {temperatureCelcius: *, icon: *}}}
 */
function buildDay(aDate, temperature, icon) {
  const id = aDate.format('YYYY-MM-DD')

  return {
    id,
    weather: {
      temperatureCelcius: temperature,
      icon
    }
  }
}

function buildInitialState() {
  const startDate = moment(new Date())

  return {
    cityName: 'Poznań',
    countryCode: 'PL',
    days: [
      buildDay(
        startDate.clone().add(1, 'day'),
        25,
        'https://www.weatherbit.io/static/img/icons/r01d.png'
      ),
      buildDay(
        startDate.clone().add(2, 'day'),
        26,
        'https://www.weatherbit.io/static/img/icons/r02d.png'
      ),
      buildDay(
        startDate.clone().add(3, 'day'),
        28,
        'https://www.weatherbit.io/static/img/icons/r03d.png'
      ),
      buildDay(
        startDate.clone().add(4, 'day'),
        30,
        'https://www.weatherbit.io/static/img/icons/r04d.png'
      ),
      buildDay(
        startDate.clone().add(5, 'day'),
        31,
        'https://www.weatherbit.io/static/img/icons/r05d.png'
      ),
      buildDay(
        startDate.clone().add(6, 'day'),
        31,
        'https://www.weatherbit.io/static/img/icons/r06d.png'
      ),
      buildDay(
        startDate.clone().add(7, 'day'),
        30,
        'https://www.weatherbit.io/static/img/icons/r07d.png'
      )
    ],
    tasksForDays: {
      '2018-05-25': [{ id: 1, name: 'Foo', description: 'Lorem ipsum' },
        { id: 2, name: 'Foo', description: 'Lorem ipsum' }],
      '2018-05-26': [{ id: 1, name: 'Foo', description: 'Lorem ipsum' },
        { id: 2, name: 'Foo', description: 'Lorem ipsum' }]
    }
  }
}

const initialTempDataState = buildInitialState()

function daysData(state = initialTempDataState, action) {
  switch (action.type) {
    case 'saveEvent':
      return (!state.tasksForDays[action.payload.date]) ? {
        ...state,
        tasksForDays: {
          ...state.tasksForDays,
          [action.payload.date]: [
            { name: action.payload.date, description: action.payload.desc }
          ]
        }
      } : {
        ...state,
        tasksForDays: {
          ...state.tasksForDays,
          [action.payload.date]: [
            ...state.tasksForDays[action.payload.date],
            { name: action.payload.date, description: action.payload.desc }
          ]
        }
      }
    case GET_TEMPERATURE_DATA:
      const indexToBeChanged = _.findIndex(state.days, ['id', action.payload.id])
      state.days[indexToBeChanged] = action.payload

      return {
        ...state
      }
    default:
      return state
  }
}

export { apiData, daysData }
