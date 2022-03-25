import { View, StyleSheet } from '../pdf.js';
import PropTypes from 'prop-types';
import React from 'react';
import { SPACING_SMALL } from '../styles.js';
import Label from './Label.jsx';
import Value from './Value.jsx';

const localStyles = StyleSheet.create({
  container: {
    marginBottom: SPACING_SMALL,
  },
});

const LabelValue = ({ label, value, src, inverted }) => {
  return (
    <View style={localStyles.container}>
      <Label inverted={inverted}>{label}</Label>
      <Value inverted={inverted} src={src}>
        {value}
      </Value>
    </View>
  );
};

LabelValue.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  src: PropTypes.string,
  inverted: PropTypes.bool,
};

export default LabelValue;
