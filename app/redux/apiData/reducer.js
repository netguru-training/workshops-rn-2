import moment from 'moment/moment'

const initialState = { data: [] }

function apiData(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
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
    date: id,
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
      buildDay(startDate.add(1, 'day'), 25, 'sun.png'),
      buildDay(startDate.add(2, 'day'), 26, 'rain.png'),
      buildDay(startDate.add(3, 'day'), 28, 'rain.png'),
      buildDay(startDate.add(4, 'day'), 30, 'partly-sun.png'),
      buildDay(startDate.add(5, 'day'), 31, 'sun.png'),
      buildDay(startDate.add(6, 'day'), 31, 'rain.png'),
      buildDay(startDate.add(7, 'day'), 30, 'rain.png')
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
    default:
      return state
  }
}

export { apiData, daysData }
