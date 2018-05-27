import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import CurrentWeatherInfo from '../CurrentWeatherInfo/CurrentWeatherInfo'
import styles from './WeatherEventListElement.styles'

import addButton from './add_button.png'

const {
  containerStyle,
  currentWeatherEventContainerStyle,
  currentEventsNumberStyle,
  addEventContainerStyle,
} = styles

const AddEventButton = ({ navigation, dateString }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        return navigation.navigate('AddEvent', { dateString })
      }}
      style={addEventContainerStyle}
    >
      <Image style={styles.addButton} source={addButton} />
    </TouchableOpacity>
  )
}

AddEventButton.propTypes = {
  dateString: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const WeatherEventListElement = ({
  headerInfo,
  imageUrl,
  footerInfo,
  eventsNumber,
  scale,
  navigation,
  date
}) => {
  const numberOfEvents = `${eventsNumber || 'no'} event${eventsNumber === 1 ? '' : 's'}`

  const eventsNumberInfo = `You have ${numberOfEvents} today`

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={currentWeatherEventContainerStyle}
        onPress={() => {
          return navigation.navigate('DayInfo', { dateString: date })
        }}
      >
        <CurrentWeatherInfo
          headerInfo={headerInfo}
          imageUrl={imageUrl}
          footerInfo={footerInfo}
          rowDirection
          scale={scale}
        />
        <Text style={currentEventsNumberStyle}>{eventsNumberInfo}</Text>
      </TouchableOpacity>

      <AddEventButton navigation={navigation} dateString={date} />
    </View>
  )
}

WeatherEventListElement.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  eventsNumber: PropTypes.number.isRequired,
  headerInfo: PropTypes.string.isRequired,
  footerInfo: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default WeatherEventListElement
