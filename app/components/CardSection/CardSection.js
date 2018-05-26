import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './CardSection.styles'

const { containerStyle } = styles

const CardSection = (props) => {
  return <View style={[containerStyle, props.style]}>{props.children}</View>
}

CardSection.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
}

export default CardSection
