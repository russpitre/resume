import { Text } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../styles';

const Program = ({ program }) => {
  return <Text style={[styles.textSmallLightThin]}>{program}</Text>;
};

Program.propTypes = {
  program: PropTypes.string.isRequired,
};

export default Program;
