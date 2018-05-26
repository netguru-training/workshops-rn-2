import axios from 'axios'
import API_KEY from '../../../api_config.json'

export function getTemperature() {
  const url = `https://api.weatherbit.io/v2.0/current?city=Poznan&country=PLd&key=${API_KEY}`

  axios.get(url)
    .then((response) => {
      console.log(response)
      const iconCode = response.data[0].weather.icon
      const iconUrl = `https://www.weatherbit.io/static/img/icons/${iconCode}.png`
      const currentTemp = response.data[0].temp

      console.log(iconCode, currentTemp)
    }).catch((error) => {
      console.log(error)
    })
}
