import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import styles from './DayInfoScreen.styles'
import TasksList from './TasksList'
import { DayInfo } from '../currentWeatherHeaderScreen/currentWeatherHeaderScreen'
import { TASK_COMPLETION_TOGGLED } from '../../redux/types'

const { containerStyle } = styles

class DayInfoScreen extends Component {
  render() {
    const { navigation, tasksForDays, days } = this.props
    const dateString = navigation.getParam('dateString')
    const day = days.find((w) => {
      return w.id === dateString
    })
    const tasks = tasksForDays[dateString]

    return (
      <View style={containerStyle}>
        <DayInfo day={day} />
        <TasksList
          tasks={tasks}
          toggleTaskCompletion={(taskId) => {
            this.props.toggleTaskCompletion(day.id, taskId)
          }}
        />
      </View>
    )
  }
}

DayInfoScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.getParam('dateString', 'Day details'),
    headerStyle: {
      backgroundColor: '#4dd0e1'
    },
    headerTintColor: '#000'
  }
}

DayInfoScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  tasksForDays: PropTypes.object.isRequired,
  days: PropTypes.array.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired
}

// REDUX STUFF

const mapStateToProps = (state) => {
  return {
    tasksForDays: state.daysData.tasksForDays,
    days: state.daysData.days
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTaskCompletion: (dateString, taskId) => {
      dispatch({
        type: TASK_COMPLETION_TOGGLED,
        dateString,
        taskId
      })
    }
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
