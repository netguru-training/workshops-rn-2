import React from 'react'
import { View } from 'react-native'
import styles from './DayInfoScreen.styles'

const {
  containerStyle
} = styles

const DayInfoScreen = () => {
  return (
    <View
      style={containerStyle}
    />
  )
}

DayInfoScreen.navigationOptions = () => {
  return {
    headerTitle: 'Day Info'
  }
}

export default DayInfoScreen
