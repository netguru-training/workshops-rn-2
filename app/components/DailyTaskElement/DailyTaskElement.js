import React from 'react'
import PropTypes from 'prop-types'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import styles from './DailyTaskElement.styles'
import tickFalse from './tick_false.png'
import tickTrue from './tick_true.png'

const {
  verticalContainer, horizontalContainer, titleStyle, descriptionStyle, buttonStyle
} = styles

const DailyTaskElement = ({
  title, description, done, onComplete
}) => {
  return (
    <View style={verticalContainer}>
      <View style={horizontalContainer}>
        <Text style={titleStyle}>{title}</Text>
        <TouchableOpacity onPress={onComplete} style={buttonStyle}>
          <Image style={styles.tickButton} source={done ? tickTrue : tickFalse}  />
        </TouchableOpacity>
      </View>
      <Text style={descriptionStyle}>{description}</Text>
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
