import React from 'react'
import { View } from 'react-native'
import styles from './AddEventScreen.styles'

const {
  containerStyle
} = styles

const AddEventScreen = () => {
  return (
    <View
      style={containerStyle}
    />
  )
}

AddEventScreen.navigationOptions = () => {
  return {
    headerTitle: 'Add Event'
  }
}

export default AddEventScreen
