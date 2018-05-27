import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import CurrentWeatherInfo from '../CurrentWeatherInfo/CurrentWeatherInfo'
import styles from './WeatherEventListElement.styles'

const {
  containerStyle,
  currentWeatherEventContainerStyle,
  currentEventsNumberStyle,
  addEventContainerStyle,
  plusStyle
} = styles

const WeatherEventListElement = ({
  headerInfo,
  imageUrl,
  footerInfo,
  eventsNumber,
  scale,
  navigation,
  date
}) => {
  const eventsNumberInfo = eventsNumber > 0 ?
    `You Have ${eventsNumber} events today` : 'You have no events today'

  const { navigate } = navigation

  return (
    <View
      style={containerStyle}
    >
      <TouchableOpacity
        style={currentWeatherEventContainerStyle}
        onPress={() => {
          return navigation.navigate('DayInfo')
        }}
      >

        <CurrentWeatherInfo
          headerInfo={headerInfo}
          imageUrl={imageUrl}
          footerInfo={footerInfo}
          rowDirection
          scale={scale}
        />
        <Text
          style={currentEventsNumberStyle}
        >
          {eventsNumberInfo}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={addEventContainerStyle}
        onPress={() => {
          // console.log('weszlo')
          return navigate('AddEvent', { day: date })
        }}
      >
        <Text
          style={plusStyle}
        >
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}

WeatherEventListElement.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  eventsNumber: PropTypes.number.isRequired,
  headerInfo: PropTypes.string.isRequired,
  footerInfo: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  onPress: PropTypes.func
}

export default WeatherEventListElement
