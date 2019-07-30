import { StyleSheet, Text } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import Section from '../shared/section';
import { styles } from '../styles';

const localStyles = StyleSheet.create({
  text: {
    lineHeight: 1.35,
  },
});

const Summary = ({ person }) => {
  return (
    <Section title="Summary">
      <Text style={[styles.textSmallDark, localStyles.text]}>{person.summary}</Text>
    </Section>
  );
};

Summary.propTypes = {
  person: PropTypes.shape({
    summary: PropTypes.string.isRequired,
  }),
};

export default Summary;
