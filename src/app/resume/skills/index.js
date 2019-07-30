import { View } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import Pill from '../shared/pill';
import Section from '../shared/section';

const Skills = ({ skills }) => {
  return (
    <Section title="Skills" inverted>
      <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
        {skills.map(skill => (
          <Pill inverted key={skill}>
            {skill}
          </Pill>
        ))}
      </View>
    </Section>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
