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
      key: 0,
      day: 'Monday',
      imageUrl: 'https://www.weatherbit.io/static/img/icons/r01d.png',
      temperature: '25 *C'
    },
    {
      key: 1,
      day: 'Tuesday',
      imageUrl: 'https://www.weatherbit.io/static/img/icons/r01d.png',
      temperature: '18 *C'
    }
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
          scale={1.66}
        />
      </View>
      <View
        style={containerStyle}
      >
        {
          events.map((event) => <WeatherEventListElement
            key={event.key}
            imageUrl={event.imageUrl}
            headerInfo={event.day}
            footerInfo={event.temperature}
            scale={0.6}
          />)
        }

      </View>
    </View>
  )
}

export default HomeScreen
