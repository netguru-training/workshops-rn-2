import axios from 'axios'
import { API_KEY } from '../../../api_config'
import { GET_7_DAYS_TEMPERATURE_DATA } from '../types'

export function get7DaysTemperature() {
  return (dispatch) => {
    // eslint-disable-next-line max-len

    navigator.geolocation.getCurrentPosition((location) => {
      const { latitude, longitude } = location.coords
      const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${API_KEY}`

      axios
        .get(url)
        .then((response) => {
          for (let i = 0; i < 7; i += 1) {
            const { temp, datetime } = response.data.data[i]
            let { icon } = response.data.data[i].weather
            icon = `https://www.weatherbit.io/static/img/icons/${icon}.png`

            dispatch({
              type: GET_7_DAYS_TEMPERATURE_DATA,
              payload: {
                id: datetime,
                weather: {
                  temperatureCelcius: temp,
                  icon
                }
              }
            })
          }
        })
        .catch((error) => {
        // eslint-disable-next-line no-console
          console.log(error)
        })
    })
  }
}