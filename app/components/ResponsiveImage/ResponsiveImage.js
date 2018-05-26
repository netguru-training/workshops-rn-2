import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, Image} from 'react-native'


const ResponsiveImage = ({imageUrl, scale}) => {

  console.log('weszlo')
  console.log(imageUrl)


  const width = 50 * scale;
  const height = 50 * scale;

  return (
    <Image
      style={{width: width, height: height}}
      source={{uri: imageUrl}}
    />
  )
}

ResponsiveImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

ResponsiveImage.defaultProps = {
  scale: 1.00
}

export default ResponsiveImage
