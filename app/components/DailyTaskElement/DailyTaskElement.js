import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native'
import styles from './DailyTaskElement.styles'

const {
  container,
  titleStyle,
  buttonStyle
} = styles

const DailyTaskElement = ({
  title, done
}) => {
  const message = done ? 'Completed' : 'Complete'

  return (
    <View
      style={container}
    >
      <Text
        style={titleStyle}
      >
        {title}
      </Text>
      <Button
        style={buttonStyle}
        title={message}
        onPress={() => {}}
        disabled={done}
      />
    </View>
  )
}

DailyTaskElement.propTypes = {
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
}

export default DailyTaskElement
