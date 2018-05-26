import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CardSection, CreateEventForm } from '../../components'
import styles from './AddEventScreen.styles'

const { containerStyle, formStyle } = styles

class AddEventScreen extends Component {
  state = {
    name: '',
    description: '',
    day: this.props.navigation.getParam('day')
  }

  onChangeNameHandler = (val) => {
    this.setState({ name: val })
  }

  onChangeDescHandler = (val) => {
    this.setState({ description: val })
  }

  render() {
    return (
      <View style={containerStyle}>
        <CardSection>
          <Text>Based on api data</Text>
        </CardSection>
        <CardSection style={formStyle}>
          <CreateEventForm
            nameHandler={this.onChangeNameHandler}
            descHandler={this.onChangeDescHandler}
            description={this.state.description}
            name={this.state.name}
            day={this.state.day}
          />
        </CardSection>
        <CardSection>
          <Button
            onPress={() => {
              this.props.saveNewEvent(
                this.state.day,
                this.state.name,
                this.state.description
              )
            }}
            title='Add event'
          />
        </CardSection>
      </View>
    )
  }
}

AddEventScreen.navigationOptions = () => {
  return {
    headerTitle: 'Add Event'
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
        type: 'saveEvent',
        payload: { date, name, desc }
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(AddEventScreen)
