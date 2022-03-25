import { Text, Link } from '../pdf.js';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../styles.js';

const Value = ({ children, inverted, src }) => {
  if (src) {
    return (
      <Link style={[inverted ? styles.textSmallLightThin : styles.textSmallDarkThin]} src={src}>
        {children}
      </Link>
    );
  }

  return (
    <Text style={[inverted ? styles.textSmallLightThin : styles.textSmallDarkThin]}>
      {children}
    </Text>
  );
};

Value.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  inverted: PropTypes.bool,
};

export default Value;
