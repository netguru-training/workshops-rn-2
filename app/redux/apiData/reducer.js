import moment from 'moment/moment'
import { GET_TEMPERATURE_DATA } from '../types'
import * as _ from 'lodash'

const initialState = { data: [] }

function apiData(state = initialState, action) {
  return state;
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
  console.log(startDate)

  return {
    cityName: 'Poznań',
    countryCode: 'PL',
    days: [
      buildDay(startDate.clone().add(1, 'day'), 25, 'sun.png'),
      buildDay(startDate.clone().add(2, 'day'), 26, 'rain.png'),
      buildDay(startDate.clone().add(3, 'day'), 28, 'rain.png'),
      buildDay(startDate.clone().add(4, 'day'), 30, 'partly-sun.png'),
      buildDay(startDate.clone().add(5, 'day'), 31, 'sun.png'),
      buildDay(startDate.clone().add(6, 'day'), 31, 'rain.png'),
      buildDay(startDate.clone().add(7, 'day'), 30, 'rain.png')
    ],
    tasksForDays: [
      {
        dayId: '2018-05-25',
        tasks: [
          { id: 1, name: 'Foo', description: 'Lorem ipsum' },
          { id: 2, name: 'Foo', description: 'Lorem ipsum' }
        ]
      },
      {
        dayId: '2018-05-27',
        tasks: [
          { id: 3, name: 'Foo', description: 'Lorem ipsum' },
          { id: 4, name: 'Foo', description: 'Lorem ipsum' }
        ]
      }
    ]
  }
}

const initialTempDataState = buildInitialState()

function daysData(state = initialTempDataState, action) {

  switch (action.type) {
    case GET_TEMPERATURE_DATA:
      const indexToBeChanged = _.findIndex(state.days, ['id', action.payload.id])
      console.log('before', state.days[indexToBeChanged])
      state.days[indexToBeChanged] = action.payload
      console.log('after', state.days[indexToBeChanged])
      
      return {
        ...state
      }
    default:
      return state
  }
}

export { apiData, daysData }
