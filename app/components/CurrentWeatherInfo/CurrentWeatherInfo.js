import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './CurrentWeatherInfo.styles'
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage'

const {
  container,
  containerRow,
  headerInfoStyle,
  footerInfoStyle,
  textSmall,
  image
} = styles

const CurrentWeatherInfo = ({
  imageUrl, headerInfo, footerInfo, rowDirection, scale
}) => {
  return (
    <View
      style={[container, rowDirection && containerRow]}
    >
      <Text
        style={[headerInfoStyle, rowDirection && textSmall]}
      >
        {headerInfo}
      </Text>
      <View style={image}>
        <ResponsiveImage imageUrl={imageUrl} scale={scale} />
      </View>
      <Text
        style={[footerInfoStyle, rowDirection && textSmall]}
      >
        {footerInfo}
      </Text>
    </View>
  )
}

CurrentWeatherInfo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  rowDirection: PropTypes.bool,
  headerInfo: PropTypes.string,
  footerInfo: PropTypes.number,
  scale: PropTypes.number
}

CurrentWeatherInfo.defaultProps = {
  rowDirection: false,
  headerInfo: '',
  footerInfo: '',
  scale: 1.00
}

export default CurrentWeatherInfo
