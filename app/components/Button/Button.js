import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Button.styles'

const { button, textStyle } = styles

const Button = ({ onPress, children }) =>
  (
    <TouchableOpacity onPress={onPress} style={button}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string
  ]).isRequired
};

Button.defaultProps = {
  onPress: () => ''
};

export default Button;
