import React from 'react'
import {View, Image} from 'react-native'
import {
  CurrentWeatherInfo,
  WeatherEventListElement
} from '../../components'
import styles from './HomeScreen.styles'

const {
  containerStyle,
  currentWeatherContainerStyle
} = styles

const HomeScreen = () => {

  const events = [
    {
      day: 'Monday',
      imageUrl: 'https://www.freeiconspng.com/uploads/weather-icon-png-16.png',
      temperature: '25 *C',
    },
    {
      day: 'Tuesday',
      imageUrl: 'https://www.weatherbit.io/static/img/icons/r01d.png',
      temperature: '25 *C',
    },
  ]

  return (
    <View
      style={containerStyle}
    >
      <View
        style={currentWeatherContainerStyle}
      >
        <CurrentWeatherInfo
          headerInfo='Monday'
          imageUrl='https://www.weatherbit.io/static/img/icons/r01d.png'
          footerInfo='25 *C'
        />
      </View>
      <View
        style={containerStyle}
      >
        {
          events.map((event) => <WeatherEventListElement imageUrl={event.imageURL} headerInfo={event.day} footerInfo={event.temperature}/>)
        }

      </View>
    </View>
  )
}

export default HomeScreen
