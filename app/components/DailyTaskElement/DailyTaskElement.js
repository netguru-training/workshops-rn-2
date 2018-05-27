import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native'
import styles from './DailyTaskElement.styles'

const {
  verticalContainer,
  horizontalContainer,
  titleStyle,
  descriptionStyle,
  buttonStyle
} = styles

const DailyTaskElement = ({
  title, description, done, onComplete
}) => {
  const message = done ? 'Completed' : 'Complete'

  return (
    <View
      style={verticalContainer}
    >
      <View style={horizontalContainer}>
        <Text
          style={titleStyle}
        >
          {title}
        </Text>
        <Button
          style={buttonStyle}
          title={message}
          onPress={onComplete}
          disabled={done}
        />
      </View>
      <Text
        style={descriptionStyle}
      >
        {description}
      </Text>
    </View>
  )
}

DailyTaskElement.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired
}

export default DailyTaskElement
