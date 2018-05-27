import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Input } from '../'
import styles from './CreateEventForm.styles'

const { container, formLabel } = styles

const CreateEventForm = (props) => {
  const dayName = moment(props.dateString).format('dddd')

  return (
    <View style={container}>
      <Text style={formLabel}>Add event for {dayName}, {props.dateString}</Text>
      <Input
        label='Title'
        // placeholder='...'
        value={props.name}
        onChangeText={props.nameHandler}
      />
      <Input
        label='Description'
        // placeholder='...'
        value={props.description}
        onChangeText={props.descHandler}
        multiline
      />
    </View>)
}

CreateEventForm.propTypes = {
  dateString: PropTypes.string.isRequired,
  nameHandler: PropTypes.func.isRequired,
  descHandler: PropTypes.func.isRequired,
  name: PropTypes.string,
  description: PropTypes.string
}

export default CreateEventForm
