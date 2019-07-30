import { StyleSheet, Text, View } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import { COLOR_BG_DARK, COLOR_BG_LIGHT, styles } from '../../styles';

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 24,
  },
  titleContainer: {
    flex: 0,
    marginBottom: 12,
    borderBottomColor: COLOR_BG_DARK,
    borderBottomWidth: '0.5',
  },
  titleContainerInverted: {
    flex: 0,
    marginBottom: 12,
    borderBottomColor: COLOR_BG_LIGHT,
    borderBottomWidth: '0.5',
  },
  titleText: {
    marginBottom: 4,
  },
  bodyContainer: {
    flex: 1,
  },
});

const Section = ({ title, children, inverted }) => {
  return (
    <View style={[localStyles.container]}>
      <View style={inverted ? localStyles.titleContainerInverted : localStyles.titleContainer}>
        <Text
          style={[inverted ? styles.textMediumLight : styles.textMediumDark, localStyles.titleText]}
        >
          {title}
        </Text>
      </View>
      <View style={[localStyles.bodyContainer]}>{children}</View>
    </View>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  inverted: PropTypes.bool,
};

export default Section;
