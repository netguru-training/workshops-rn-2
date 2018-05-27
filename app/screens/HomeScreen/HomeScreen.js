import React from 'react'
import { ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment/moment'

import { CurrentWeatherInfo, WeatherEventListElement } from '../../components'
import styles from './HomeScreen.styles'

const {
  containerStyle,
  currentWeatherContainerStyle,
  listContainer
} = styles

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.load7DaysWeatherData()
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { navigate } = this.props.navigation

    const formattedDays = this.props.daysData.days || {}

    return (
      <View style={containerStyle}>
        <View style={currentWeatherContainerStyle}>
          <CurrentWeatherInfo
            headerInfo={moment(new Date(formattedDays[0].id)).format('dddd')}
            imageUrl={formattedDays[0].weather.icon}
            footerInfo={formattedDays[0].weather.temperatureCelcius}
            scale={1.66}
          />
        </View>
        <ScrollView style={listContainer}>
          {formattedDays &&
            formattedDays
              .filter((day) => {
                return day.id !== 0
              })
              .map((day) => {
                return (
                  <WeatherEventListElement
                    key={day.id}
                    date={day.id}
                    imageUrl={day.weather.icon}
                    headerInfo={moment(new Date(day.id)).format('dddd')}
                    footerInfo={day.weather.temperatureCelcius}
                    scale={0.6}
                    navigation={this.props.navigation}
                    eventsNumber={0}
                  />
                )
              })}
        </ScrollView>
      </View>
    )
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  daysData: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    days: PropTypes.array.isRequired, // FIXME uzupełnić
    tasksForDays: PropTypes.object.isRequired
  }),
  load7DaysWeatherData: PropTypes.func.isRequired
}

HomeScreen.navigationOptions = () => {
  return {
    headerTitle: 'Home',
    headerStyle: {
      backgroundColor: '#4dd0e1'
    }
  }
}

export default HomeScreen
