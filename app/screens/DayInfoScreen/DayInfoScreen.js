import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { View, Text } from 'react-native'
import { View } from 'react-native'
import styles from './DayInfoScreen.styles'
import TasksList from './TasksList'
import { DayInfo } from '../currentWeatherHeaderScreen/currentWeatherHeaderScreen'

// const { containerStyle, weatherInfoStyle } = styles
const { containerStyle } = styles

// function messageFromWeather(weather) {
//   let message

//   if (weather.temperatureCelcius < 0) {
//     message = 'Dress warmly!'
//   } else if (weather.temperatureCelcius < 10) {
//     message = 'Remember about the jacket!'
//   } else if (weather.temperatureCelcius < 20) {
//     message = 'It\'s warn outside :)'
//   } else if (weather.temperatureCelcius < 25) {
//     message = 'What a nice day!'
//   } else {
//     message = 'Take a bootle of water!!!'
//   }

//   if (weather.possibilityOfPrecipitation >= 25) {
//     message += '\nIt might rain - pack an umbrella'
//   }

//   if (weather.windSpeed >= 25) {
//     message += '\n It\'s very windy'
//   }

//   return message
// }

// const DayInfoComponent = ({ dateString, day }) => {
//   const temperatureMessage = `${dateString}
//   Current temp: ${day.weather.temperatureCelcius}
//   ${messageFromWeather(day.weather)}`

//   return <Text style={weatherInfoStyle}>{temperatureMessage}</Text>
// }

// DayInfoComponent.propTypes = {
//   dateString: PropTypes.string.isRequired,
//   day: PropTypes.object.isRequired // FIXME .shape( { ... } )
// }

// const mapStateToPropsDayInfo = (state) => {
//   return {
//     daysData: state.daysData
//   }
// }

// const mergePropsDayInfo = (stateProps, dispatchProps, ownProps) => {
//   // we need to merge for example `navigation` property
//   return {
//     ...stateProps,
//     ...dispatchProps,
//     ...ownProps
//   }
// }

// const DayInfo = connect(mapStateToPropsDayInfo, null, mergePropsDayInfo)(DayInfoComponent)

class DayInfoScreen extends Component {
  state = {}

  render() {
    const { navigation, tasksForDays, days } = this.props
    const dateString = navigation.getParam('dateString')
    const day = days.find((w) => {
      return w.id === dateString
    })
    const tasks = tasksForDays[dateString]

    return (
      <View style={containerStyle}>
        <DayInfo dateString={dateString} day={day} />
        <TasksList tasks={tasks} />
      </View>
    )
  }
}

DayInfoScreen.navigationOptions = () => {
  return {
    headerTitle: 'Day Info',
    headerStyle: {
      backgroundColor: '#4dd0e1'
    },
    headerTintColor: '#000'
  }
}

DayInfoScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  tasksForDays: PropTypes.object.isRequired,
  days: PropTypes.array.isRequired
}

// REDUX STUFF

const mapStateToProps = (state) => {
  return {
    tasksForDays: state.daysData.tasksForDays,
    days: state.daysData.days
  }
}

const mapDispatchToProps = (/* dispatch */) => {
  return {
    // FIXME #34
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  // we need to merge for example `navigation` property
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayInfoScreen)
