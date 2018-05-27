import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Input } from '../'
import styles from './CreateEventForm.styles'

const { container, formLabel } = styles

const CreateEventForm = (props) => {
  return (
    <View style={container}>
      <Text style={formLabel}>{props.dateString}</Text>
      <Input
        label='Name'
        placeholder='Party'
        value={props.name}
        onChangeText={props.nameHandler}
      />
      <Input
        label='Description'
        placeholder='Remeber to buy drinks'
        value={props.description}
        onChangeText={props.descHandler}
        multiline
      />
    </View>)
}

CreateEventForm.propTypes = {
  dateString: PropTypes.string.isRequired,
  nameHandler: PropTypes.func,
  descHandler: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string
}

export default CreateEventForm
