import axios from 'axios'
import { API_KEY } from '../../../api_config'
import { GET_TEMPERATURE_DATA } from '../types'

export function getTemperature() {
  return (dispatch) => {

    const url = `https://api.weatherbit.io/v2.0/current?city=Poznan&country=PL&key=${API_KEY}`

    axios.get(url)
    // console.log("API URL", url)
    // fetch(url)
      .then((response) => {
        console.log(response)
        const iconCode = response.data.data[0].weather.icon
        const iconUrl = `https://www.weatherbit.io/static/img/icons/${iconCode}.png`
        const currentTemp = response.data.data[0].temp

        console.log(iconCode, currentTemp)

        dispatch({
          type: GET_TEMPERATURE_DATA,
          payload: {
            id: '2018-05-26',
            weather: {
              temperatureCelcius: currentTemp,
              iconUrl
            }
          }
        })
      }).catch((error) => {
        console.log(error)
      })
  }
}
