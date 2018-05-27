import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CardSection, CreateEventForm, Button } from '../../components'
import styles from './AddEventScreen.styles'
import { DayInfo } from '../currentWeatherHeaderScreen/currentWeatherHeaderScreen'
import { EVENT_ADDED } from '../../redux/types'

const {
  containerStyle, formStyle, header, button
} = styles

class AddEventScreen extends Component {
  state = {
    title: '',
    description: ''
  }

  onChangeNameHandler = (val) => {
    this.setState({ title: val })
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
            name={this.state.title}
            dateString={dateString}
          />
        </CardSection>
        <CardSection style={button}>
          <Button
            onPress={() => {
              this.props.saveNewEvent(dateString, this.state.title, this.state.description)
              // FIXME a hack, as integration with Redux took way too much time, and was not working
              this.props.navigation.navigate('Home')
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
    saveNewEvent: (date, title, description) => {
      dispatch({
        type: EVENT_ADDED,
        payload: { date, title, description }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEventScreen)
