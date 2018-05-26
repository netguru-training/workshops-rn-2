import React from 'react'
import { View } from 'react-native'
import styles from './AddEventScreen.styles'

const {
  containerStyle
} = styles

class AddEventScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Event'
  };

  render() {
    return (
      <View
        style={containerStyle}
      />
    )
  }
}

export default AddEventScreen
