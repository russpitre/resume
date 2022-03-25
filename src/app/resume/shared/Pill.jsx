import { Text, View, StyleSheet } from '../pdf.js';
import PropTypes from 'prop-types';
import React from 'react';
import { COLOR_BG_DARK, COLOR_BG_LIGHT_BLUE, styles } from '../styles.js';

export const localStyles = StyleSheet.create({
  container: {
    padding: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
    margin: 1,
  },
  bg: {
    backgroundColor: COLOR_BG_DARK,
  },
  bgInverted: {
    backgroundColor: COLOR_BG_LIGHT_BLUE,
  },
});

const Pill = ({ children, inverted }) => {
  return (
    <View style={[localStyles.container, inverted ? localStyles.bgInverted : localStyles.bg]}>
      <Text style={[inverted ? styles.textSmallDark : styles.textSmallLight]}>{children}</Text>
    </View>
  );
};

Pill.propTypes = {
  children: PropTypes.node,
  inverted: PropTypes.bool,
};

export default Pill;
