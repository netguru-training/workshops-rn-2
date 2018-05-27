import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import styles from './DayInfoScreen.styles'
import TasksList from './TasksList'

const { containerStyle, weatherInfoStyle } = styles

function messageFromCelcius(temperatureCelcius) {
  if (temperatureCelcius < 0) {
    return 'Dress warmly!'
  } else if (temperatureCelcius < 20) {
    return 'Remember about the jacket!'
  } else if (temperatureCelcius < 30) {
    return 'What a nice day!'
  }

  return 'Take a bootle of water!'
}

const DayInfoComponent = ({ dateString, day }) => {
  // FIXME more data for the message
  console.log(day);
  const temperatureMessage = `${dateString}.\nTemperature is ${999999}.
  ${messageFromCelcius(999999)}`

  return <Text style={weatherInfoStyle}>{temperatureMessage}</Text>
}

DayInfoComponent.propTypes = {
  dateString: PropTypes.string.isRequired,
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

const DayInfo = connect(mapStateToPropsDayInfo, null, mergePropsDayInfo)(DayInfoComponent)

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
