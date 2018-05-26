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
  navigation
}) => {
  const eventsNumberInfo = eventsNumber > 0 ?
    `You Have ${eventsNumber} events today` : 'You have no events today'

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
  eventsNumber: PropTypes.number,
  headerInfo: PropTypes.string,
  footerInfo: PropTypes.number,
  scale: PropTypes.number,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

WeatherEventListElement.defaultProps = {
  eventsNumber: 0,
  headerInfo: '',
  footerInfo: '',
  scale: 1.00
}

export default WeatherEventListElement
