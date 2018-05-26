import React from 'react'
import { View, Text, Button } from 'react-native'
import {
  CardSection,
  CreateEventForm
} from '../../components'
import styles from './AddEventScreen.styles'

const {
  containerStyle,
  formStyle
} = styles

const AddEventScreen = () => {
  return (
    <View
      style={containerStyle}
    >
      <CardSection>
        <Text>
          Based on api data
        </Text>
      </CardSection>
      <CardSection style={formStyle}>
        <CreateEventForm />
      </CardSection>
      <CardSection>
        <Button
          title='Add event'
        />
      </CardSection>
    </View>
  )
}
AddEventScreen.navigationOptions = () => {
  return {
    headerTitle: 'Add Event'
  }
}

export default AddEventScreen
