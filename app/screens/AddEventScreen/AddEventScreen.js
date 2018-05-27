import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CardSection, CreateEventForm, Button } from '../../components'
import styles from './AddEventScreen.styles'
import { DayInfo } from '../currentWeatherHeaderScreen/currentWeatherHeaderScreen'

const {
  containerStyle, formStyle, header, button
} = styles

class AddEventScreen extends Component {
  state = {
    name: '',
    description: ''
  }

  onChangeNameHandler = (val) => {
    this.setState({ name: val })
  }

  onChangeDescHandler = (val) => {
    this.setState({ description: val })
  }

  render() {
    const { days } = this.props
    const dateString = this.props.navigation.getParam('dateString')
    const day = days.find((w) => {
      return w.id === dateString
    })

    return (
      <View style={containerStyle}>
        <CardSection style={header}>
          <DayInfo dateString={dateString} day={day} />
        </CardSection>
        <CardSection style={formStyle}>
          <CreateEventForm
            nameHandler={this.onChangeNameHandler}
            descHandler={this.onChangeDescHandler}
            description={this.state.description}
            name={this.state.name}
            dateString={dateString}
          />
        </CardSection>
        <CardSection style={button}>
          <Button
            onPress={() => {
              this.props.saveNewEvent(dateString, this.state.name, this.state.description)
            }}
          >
            Save Event
          </Button>
        </CardSection>
      </View>
    )
  }
}

AddEventScreen.navigationOptions = () => {
  return {
    headerTitle: 'Add Event',
    headerStyle: {
      backgroundColor: '#4dd0e1'
    },
    headerTintColor: '#000'
  }
}

AddEventScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  saveNewEvent: PropTypes.func,
  days: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    days: state.daysData.days
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveNewEvent: (date, name, desc) => {
      dispatch({
        type: 'saveEvent',
        payload: { date, name, desc }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEventScreen)
