import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import styles from './currentWeatherHeaderScreen.styles'

const { weatherInfoStyle } = styles

function messageFromWeather(weather) {
  let message

  if (weather.temperatureCelcius < 0) {
    message = 'Dress warmly!'
  } else if (weather.temperatureCelcius < 10) {
    message = 'Remember about the jacket!'
  } else if (weather.temperatureCelcius < 20) {
    message = 'It\'s warm outside :)'
  } else if (weather.temperatureCelcius < 25) {
    message = 'What a nice day!'
  } else {
    message = 'Take a bootle of water!!!'
  }

  if (weather.possibilityOfPrecipitation >= 25) {
    message += '\nIt might rain - pack an umbrella'
  }

  if (weather.windSpeed >= 25) {
    message += '\n It\'s very windy'
  }

  return message
}

export const DayInfoComponent = ({ day }) => {
  const temperatureMessage = `Current temp: ${day.weather.temperatureCelcius}°C
    ${messageFromWeather(day.weather)}`

  return <Text style={weatherInfoStyle}>{temperatureMessage}</Text>
}

DayInfoComponent.propTypes = {
  day: PropTypes.object.isRequired // FIXME .shape( { ... } )
}

const mapStateToPropsDayInfo = (state) => {
  return {
    daysData: state.daysData
  }
}

const mergePropsDayInfo = (stateProps, dispatchProps, ownProps) => {
  // we need to merge for example `navigation` property
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps
  }
}

export const DayInfo = connect(mapStateToPropsDayInfo, null, mergePropsDayInfo)(DayInfoComponent)
