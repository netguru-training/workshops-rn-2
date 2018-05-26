import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import styles from './CurrentWeatherInfo.styles'
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const {
  container,
  containerRow,
  headerInfoStyle,
  footerInfoStyle,
  imageStyle,
  textSmall,
  imageStyleSmall
} = styles

const CurrentWeatherInfo = ({
  imageUrl, headerInfo, footerInfo, rowDirection, scale
}) => {

  console.log(imageUrl)

  return (
    <View
      style={[container, rowDirection && containerRow]}
    >
      <Text
        style={[headerInfoStyle, rowDirection && textSmall]}
      >
        {headerInfo}
      </Text>
      <ResponsiveImage imageUrl={imageUrl} scale={scale} />
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
  footerInfo: PropTypes.string,
  scale: PropTypes.number
}

CurrentWeatherInfo.defaultProps = {
  rowDirection: false,
  headerInfo: '',
  footerInfo: '',
  scale: 1.00
}

export default CurrentWeatherInfo
