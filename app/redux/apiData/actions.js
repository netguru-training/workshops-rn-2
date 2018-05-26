import axios from 'axios'
import { API_KEY } from '../../../api_config'
import { GET_7_DAYS_TEMPERATURE_DATA } from '../types'

export function get7DaysTemperature() {
  return (dispatch) => {

    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=Poznan&country=PL&key=${API_KEY}`

    axios.get(url)
      .then((response) => {
        for (let i = 0; i < 7; i++) {
          const responseData = response.data.data[i]
          const icon = `https://www.weatherbit.io/static/img/icons/${responseData.weather.icon}.png`
          const currentTemp = responseData.temp
          const date = responseData.datetime

          dispatch({
            type: GET_7_DAYS_TEMPERATURE_DATA,
            payload: {
              id: date,
              weather: {
                temperatureCelcius: currentTemp,
                icon
              }
            }
          })
        }
      }).catch((error) => {
        console.log(error)
      })
  }
}
