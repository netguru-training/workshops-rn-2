import React, { Component } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { View, Text, SectionList } from 'react-native'
import styles from './DayInfoScreen.styles'
import { DailyTaskElement } from '../../components'

const {
  containerStyle,
  weatherInfoStyle,
  tasksListStyle,
  taskHeaderStyle,
  taskHeaderContainerStyle
} = styles

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

class DayInfoScreen extends Component {
  state = { }
  render() {
    const { navigation } = this.props
    const day = get(navigation, 'state.params.day', {})
    const date = get(navigation, 'state.params.day.id', '')
    const temperatureCelcius = get(navigation, 'state.params.day.weather.temperatureCelcius', 0)
    const temperatureMessage = `${date}.\nTempearute is ${temperatureCelcius}. ${messageFromCelcius(temperatureCelcius)}`

    return (
      <View
        style={containerStyle}
      >
        <Text
          style={weatherInfoStyle}
        >
          {temperatureMessage}
        </Text>
        <SectionList
          style={tasksListStyle}
          sections={[
            {
              title: 'Tasks',
              data: [
                {
                  title: 'Wyjdź z domu',
                  description: 'Lorem ipsum',
                  done: true
                },
                {
                  title: 'Kup kwiaty',
                  description: 'Lorem ipsum dolor sit amet, consectetur',
                  done: false
                },
                {
                  title: 'Idź do mamy',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                  done: true
                },
                {
                  title: 'Złóz zyczenia',
                  description: 'Lorem ipsum',
                  done: false
                }
              ]
            }
          ]}
          renderItem={({ item }) => {
            return <DailyTaskElement
              title={item.title}
              description={item.description}
              done={item.done}
              onComplete={() => {
                console.log('Complete pressed')
              }}
            />
          }}
          renderSectionHeader={({ section }) => {
            return (
              <View style={taskHeaderContainerStyle}>
                <Text style={taskHeaderStyle}>{section.title}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => {
            return index
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
  navigation: PropTypes.object.isRequired
}

export default DayInfoScreen
