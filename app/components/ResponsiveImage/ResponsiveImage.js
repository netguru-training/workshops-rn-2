import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

const ResponsiveImage = ({ imageUrl, scale }) => {
  const width = 50 * scale
  const height = 50 * scale

  return (
    <Image
      style={{ width, height }}
      source={{ uri: imageUrl }}
    />
  )
}

ResponsiveImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  scale: PropTypes.number
}

ResponsiveImage.defaultProps = {
  scale: 1.00
}

export default ResponsiveImage
