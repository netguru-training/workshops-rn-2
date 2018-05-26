import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, SectionList } from 'react-native'
import styles from './DayInfoScreen.styles'
import { DailyTaskElement } from '../../components'

const {
  containerStyle,
  weatherInfoStyle,
  eventTitleStyle,
  eventDescriptionStyle,
  tasksListStyle,
  taskHeaderStyle,
  taskHeaderContainerStyle
} = styles

class DayInfoScreen extends Component {
  state = { }
  render() {
    const { navigation } = this.props
    const { eventName, eventDescription, weatherInfo } = navigation.state.params

    return (
      <View
        style={containerStyle}
      >
        <Text
          style={weatherInfoStyle}
        >
          {weatherInfo}
        </Text>
        <Text
          style={eventTitleStyle}
        >
          {eventName}
        </Text>
        <Text
          style={eventDescriptionStyle}
        >
          {eventDescription}
        </Text>
        <SectionList
          style={tasksListStyle}
          sections={[
            {
              title: 'Tasks',
              data: [
                { title: 'Wyjdź z domu', done: true },
                { title: 'Kup kwiaty', done: false },
                { title: 'Idź do mamy', done: true },
                { title: 'Złóz zyczenia', done: false }
              ]
            }
          ]}
          renderItem={({ item }) => {
            return <DailyTaskElement title={item.title} done={item.done} />
          }}
          renderSectionHeader={({ section }) => {
            return (
              <View style={taskHeaderContainerStyle}>
                <Text style={taskHeaderStyle}>{section.title}</Text>
              </View>
            )
          }}
        />
      </View>
    )
  }
}

DayInfoScreen.navigationOptions = () => {
  return {
    headerTitle: 'Day Info'
  }
}

DayInfoScreen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        eventName: PropTypes.string.isRequired,
        eventDescription: PropTypes.string.isRequired,
        weatherInfo: PropTypes.string.isRequired
      })
    })
  }).isRequired
}

export default DayInfoScreen
