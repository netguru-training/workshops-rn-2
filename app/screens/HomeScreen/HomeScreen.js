import React from 'react'
import { Button, View } from 'react-native'
import PropTypes from 'prop-types'

import { CurrentWeatherInfo, WeatherEventListElement } from '../../components'
import styles from './HomeScreen.styles'

const {
  containerStyle,
  currentWeatherContainerStyle,
  eventInfoButtonStyle,
  addEventButtonStyle,
  buttonsContainerStyle
} = styles

const HomeScreen = (props) => {
  const { navigate } = props.navigation

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
          events.map((event) => {
 return <WeatherEventListElement
   key={event.key}
   imageUrl={event.imageUrl}
   headerInfo={event.day}
   footerInfo={event.temperature}
   scale={0.6}
 />
})
        }

      </View>
      <View
        style={buttonsContainerStyle}
      >
        <Button
          style={eventInfoButtonStyle}
          title='Go to Day Info'
          onPress={() => {
            return navigate('DayInfo')
          }}
        />
        <Button
          style={addEventButtonStyle}
          title='Go to Add Event'
          onPress={() => {
            return navigate('AddEvent')
          }}
        />
      </View>
    </View>
  )
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

HomeScreen.navigationOptions = () => {
  return {
    headerTitle: 'Home'
  }
}

export default HomeScreen
