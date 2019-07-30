import { StyleSheet, View } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import Section from '../shared/section';
import FromTo from './from-to';
import Program from './program';
import School from './school';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 8,
  },
});

const Education = ({ education }) => {
  return (
    <Section title="Education" inverted>
      {education.map(ed => (
        <View key={ed.school} style={styles.container}>
          <School school={ed.school} />
          <Program program={ed.program} />
          <FromTo from={ed.from} to={ed.to} />
        </View>
      ))}
    </Section>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default Education;
