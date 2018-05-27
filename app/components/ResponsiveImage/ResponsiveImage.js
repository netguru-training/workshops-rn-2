import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

const ResponsiveImage = ({ imageUrl, scale, style }) => {
  const width = 50 * scale
  const height = 50 * scale

  return (
    <Image
      style={[{ width, height }, style]}
      source={{ uri: imageUrl }}
    />
  )
}

ResponsiveImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  scale: PropTypes.number,
  style: PropTypes.object
}

ResponsiveImage.defaultProps = {
  scale: 1.00,
  style: {}
}

export default ResponsiveImage
