import axios from 'axios'
import { API_KEY } from '../../../api_config'
import { GET_TEMPERATURE_DATA } from '../types'

export function getTemperature() {
  return (dispatch) => {
    const url = `https://api.weatherbit.io/v2.0/current?city=Poznan&country=PL&key=${API_KEY}`

    axios.get(url)
      .then((response) => {
        const iconCode = response.data.data[0].weather.icon
        const icon = `https://www.weatherbit.io/static/img/icons/${iconCode}.png`
        const currentTemp = response.data.data[0].temp

        dispatch({
          type: GET_TEMPERATURE_DATA,
          payload: {
            id: '2018-05-28',
            weather: {
              temperatureCelcius: currentTemp,
              icon
            }
          }
        })
      }).catch((error) => {
        console.log(error)
      })
  }
}
