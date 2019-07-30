import { Text } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../styles';

const School = ({ school }) => {
  return <Text style={[styles.textSmallLight]}>{school}</Text>;
};

School.propTypes = {
  school: PropTypes.string.isRequired,
};

export default School;
