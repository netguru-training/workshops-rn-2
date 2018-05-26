import React from 'react'
import { View } from 'react-native'
import styles from './EventInfoScreen.styles'

const {
  containerStyle
} = styles

class EventInfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Event Info'
  };

  render() {
    return (
      <View
        style={containerStyle}
      />
    )
  }
}

export default EventInfoScreen
