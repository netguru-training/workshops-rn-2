import React from 'react'
import { ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment/moment'

import { CurrentWeatherInfo, WeatherEventListElement } from '../../components'
import styles from './HomeScreen.styles'

const {
  containerStyle,
  currentWeatherContainerStyle,
  // eslint-disable-next-line no-unused-vars
  eventInfoButtonStyle,
  // eslint-disable-next-line no-unused-vars
  addEventButtonStyle,
  // eslint-disable-next-line no-unused-vars
  buttonsContainerStyle,
  listContainer
} = styles

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.loadWeatherData()
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { navigate } = this.props.navigation

    const formattedDays = this.props.stuff.daysData.days || {}

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
                    imageUrl={day.weather.icon}
                    headerInfo={moment(new Date(day.id)).format('dddd')}
                    footerInfo={day.weather.temperatureCelcius}
                    scale={0.6}
                  />
                )
              })}
        </ScrollView>
        {/* <View */}
        {/* style={buttonsContainerStyle} */}
        {/* > */}
        {/* <Button */}
        {/* style={eventInfoButtonStyle} */}
        {/* title='Go to Day Info' */}
        {/* onPress={() => { */}
        {/* return navigate('DayInfo') */}
        {/* }} */}
        {/* /> */}
        {/* <Button */}
        {/* style={addEventButtonStyle} */}
        {/* title='Go to Add Event' */}
        {/* onPress={() => { */}
        {/* return navigate('AddEvent') */}
        {/* }} */}
        {/* /> */}
        {/* </View> */}
      </View>
    )
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  daysData: PropTypes.any,
  loadWeatherData: PropTypes.func.isRequired
}

HomeScreen.navigationOptions = () => {
  return {
    headerTitle: 'Home'
  }
}

export default HomeScreen
