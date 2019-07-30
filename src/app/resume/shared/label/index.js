import { Text } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../styles';

const Label = ({ children, inverted }) => {
  return (
    <Text style={[inverted ? styles.textSmallLight : styles.textSmallDarkBold]}>{children}</Text>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  inverted: PropTypes.bool,
};

export default Label;
