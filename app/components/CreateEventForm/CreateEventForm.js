import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Input } from '../'
import styles from './CreateEventForm.styles'

const { container } = styles
class CreateEventForm extends Component {
  state = {
    input: ''
  }

  render() {
    return (
      <View style={container}>
        <Text>Sample Text</Text>
        <Input
          label='Label'
          placeholder='Text'
          value={this.state.input}
          onChangeText={(value) => { return this.setState({ input: value }) }}
        />
      </View>
    )
  }
}

export default CreateEventForm
