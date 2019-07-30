import { Text } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../styles';

const Date = ({ from, to }) => {
  return <Text style={styles.textSmallDark}>{`${from}-${to}`}</Text>;
};

Date.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Date;
