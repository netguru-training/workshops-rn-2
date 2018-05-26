import React from 'react'
import { Text, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import styles from './Input.styles'

const Input = ({
  label, value, onChangeText, placeholder, secureTextEntry, multiline
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  multiline: PropTypes.bool
}

Input.defaultProps = {
  value: '',
  placeholder: '',
  secureTextEntry: false,
  multiline: false
}

export default Input
