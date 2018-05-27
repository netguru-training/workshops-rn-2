import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import styles from './DayInfoScreen.styles'
import TasksList from './TasksList'
import { DayInfo } from '../currentWeatherHeaderScreen/currentWeatherHeaderScreen'

const { containerStyle } = styles

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
