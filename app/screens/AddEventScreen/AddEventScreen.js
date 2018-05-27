import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CardSection, CreateEventForm, Button } from '../../components'
import styles from './AddEventScreen.styles'
import { EVENT_ADDED } from '../../redux/types'

const {
  containerStyle, formStyle, header, headerText, button
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
    const dateString = this.props.navigation.getParam('dateString')

    return (
      <View style={containerStyle}>
        <CardSection style={header}>
          <Text style={headerText}>Based on api data</Text>
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
  saveNewEvent: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveNewEvent: (date, name, desc) => {
      dispatch({
        type: EVENT_ADDED,
        payload: { date, name, desc }
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(AddEventScreen)
