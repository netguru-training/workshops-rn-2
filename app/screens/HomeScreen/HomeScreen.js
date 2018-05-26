import React from 'react'
import { Button, View } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment/moment'

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

  const formattedDays = props.stuff.daysData.days || {}

  console.log(formattedDays)

  return (
    <View
      style={containerStyle}
    >
      <View
        style={currentWeatherContainerStyle}
      >
        <CurrentWeatherInfo
          headerInfo={formattedDays[0].date}
          imageUrl={{formattedDays[0].weather.icon}}
          footerInfo={formattedDays[0].weather.temperatureCelcius}
          scale={1.66}
        />
      </View>
      <View
        style={containerStyle}
      >
        { formattedDays &&
          formattedDays
            .filter((day) => { return day.id !== 0 })
            .map((day) => {
            return <WeatherEventListElement
              key={day.id}
              imageUrl={day.weather.icon}
              headerInfo={moment(new Date(day.date)).format('dddd')}
              footerInfo={day.weather.temperatureCelcius}
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
