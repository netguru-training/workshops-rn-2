import React from 'react'
import { View, Text } from 'react-native'
import { Input } from '../'
import styles from './CreateEventForm.styles'

const { container } = styles

const CreateEventForm = () => {
  let inputState = ''

  return (
    <View style={container}>
      <Text>Sample Text</Text>
      <Input
        label='Label'
        placeholder='Text'
        value={inputState}
        onChangeText={(value) => {
          inputState = value
        }}
      />
    </View>
  )
}

export default CreateEventForm
