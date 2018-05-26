import React from 'react'
import { View } from 'react-native'
import styles from './EventInfoScreen.styles'

const {
  containerStyle
} = styles

const EventInfoScreen = () => {
  return (
    <View
      style={containerStyle}
    />
  )
}

EventInfoScreen.navigationOptions = () => {
  return {
    headerTitle: 'Event Info'
  }
}

export default EventInfoScreen
