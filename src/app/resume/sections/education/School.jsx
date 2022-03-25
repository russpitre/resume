import { Text } from '../../pdf.js';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../styles.js';

const School = ({ school }) => {
  return <Text style={[styles.textSmallLight]}>{school}</Text>;
};

School.propTypes = {
  school: PropTypes.string.isRequired,
};

export default School;
