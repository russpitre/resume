import { View, StyleSheet } from '../pdf.js';
import PropTypes from 'prop-types';
import React from 'react';
import Section from '../shared/Section.jsx';
import FromTo from './education/FromTo.jsx';
import Program from './education/Program.jsx';
import School from './education/School.jsx';

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
