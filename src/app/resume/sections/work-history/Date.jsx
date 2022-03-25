import { Text } from '../../pdf.js';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../styles.js';

const Date = ({ from, to }) => {
  return <Text style={styles.textSmallDark}>{`${from}-${to}`}</Text>;
};

Date.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Date;
