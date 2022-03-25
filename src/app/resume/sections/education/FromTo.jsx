import { Text } from '../../pdf.js';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../styles.js';

const FromTo = ({ from, to }) => {
  return (
    <Text style={[styles.textSmallLightThin]}>
      {from}-{to}
    </Text>
  );
};

FromTo.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default FromTo;
