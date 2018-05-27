// FIXME remove this data
import moment from 'moment/moment'

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

function buildTasks(dayNumber) {
  return [
    {
      id: 1,
      title: `Wyjdź z domu ${dayNumber}`,
      description: 'Lorem ipsum',
      done: true
    },
    {
      id: 2,
      title: `Kup kwiaty ${dayNumber}`,
      description: 'Lorem ipsum dolor sit amet, consectetur',
      done: false
    },
    {
      id: 3,
      title: `Idź do mamy ${dayNumber}`,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      done: true
    },
    {
      id: 4,
      title: `Złóz zyczenia ${dayNumber}`,
      description: 'Lorem ipsum',
      done: false
    }
  ]
}

function buildInitialState() {
  const startDate = moment(new Date())

  return {
    cityName: 'Poznań',
    countryCode: 'PL',
    days: [
      buildDay(startDate.clone(), 30, 'https://www.weatherbit.io/static/img/icons/r07d.png'),
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
      )
    ],
    tasksForDays: {
      '2018-05-25': buildTasks(25),
      '2018-05-26': buildTasks(26),
      '2018-05-27': buildTasks(27),
      '2018-05-28': buildTasks(28)
    }
  }
}

const initialDaysDataState = buildInitialState()
export default initialDaysDataState
