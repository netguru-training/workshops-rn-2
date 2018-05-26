import React, { Component } from 'react'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types'
import {
  CurrentWeatherInfo,
  WeatherEventListElement
} from '../../components'
import styles from './HomeScreen.styles'

const {
  containerStyle,
  currentWeatherContainerStyle,
  eventInfoButtonStyle,
  addEventButtonStyle,
  buttonsContainerStyle
} = styles

class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <View
        style={containerStyle}
      >
        <View
          style={currentWeatherContainerStyle}
        >
          <CurrentWeatherInfo
            headerInfo='Monday'
            imageUrl='https://www.freeiconspng.com/uploads/weather-icon-png-16.png'
            footerInfo='25 *C'
          />
        </View>
        <View
          style={containerStyle}
        >
          <WeatherEventListElement
            headerInfo='Tuesday'
            imageUrl='https://www.freeiconspng.com/uploads/weather-icon-png-16.png'
            footerInfo='25 *C'
          />
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
