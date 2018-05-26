import axios from 'axios'

export function getTemperature() {
  const apiKey = 'e73aec6edb714cfea53db470e20aa9b1'
  const url = `https://api.weatherbit.io/v2.0/current?city=Poznan&country=Poland&key=${apiKey}`

  axios.get(url)
    .then((response) => {
      console.log(response.data[0].weather.code)
      console.log(response.data[0].temp)
    }).catch((error) => {
      console.log(error)
    })
}
