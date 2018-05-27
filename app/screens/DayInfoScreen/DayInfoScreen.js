import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text} from 'react-native'
import styles from './DayInfoScreen.styles'
import { get7DaysTemperature } from '../../redux/apiData/actions'
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

const DayInfoComponent = ({ dateString }) => {
  // FIXME
  // const temperatureMessage = `${dateString}.\nTemperature is ${temperatureCelcius}.
  // ${messageFromCelcius(temperatureCelcius)}`
  return <Text style={weatherInfoStyle}>{dateString}</Text>
}

DayInfoComponent.propTypes = {
  dateString: PropTypes.string.isRequired
}

const mapStateToPropsDayInfo = (state) => {
  return {
    daysData: state.daysData
  }
}

const DayInfo = connect(mapStateToPropsDayInfo)(DayInfoComponent)

class DayInfoScreen extends Component {
  state = {}

  render() {
    // FIXME take from REDUX
    const tasks = [
      {
        id: 1,
        title: 'Wyjdź z domu',
        description: 'Lorem ipsum',
        done: true
      },
      {
        id: 2,
        title: 'Kup kwiaty',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        done: false
      },
      {
        id: 3,
        title: 'Idź do mamy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        done: true
      },
      {
        id: 4,
        title: 'Złóz zyczenia',
        description: 'Lorem ipsum',
        done: false
      }
    ]
    const { navigation } = this.props
    const dateString = navigation.getParam('dateString')

    return (
      <View style={containerStyle}>
        <DayInfo dateString={dateString} />
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
  navigation: PropTypes.object.isRequired
}

// REDUX STUFF

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
