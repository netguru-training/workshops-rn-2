import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Input } from '../'
import styles from './CreateEventForm.styles'

const { container, formLabel } = styles

const CreateEventForm = (props) => {
  return (
    <View style={container}>
      <Text style={formLabel}>{props.day}</Text>
      <Input
        label='Name'
        placeholder='Text'
        value={props.name}
        onChangeText={props.nameHandler}
      />
      <Input
        label='Description'
        placeholder='Text'
        value={props.description}
        onChangeText={props.descHandler}
        multiline
      />
    </View>)
}

CreateEventForm.propTypes = {
  day: PropTypes.string.isRequired,
  nameHandler: PropTypes.func,
  descHandler: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string
}

export default CreateEventForm
