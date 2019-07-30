import { Text, View } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../../styles';

const ExperienceSkills = ({ skills }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 4 }}>
      <Text style={styles.textSmallDark}>Skills:{'  '}</Text>
      {skills.map((skill, index) => {
        const label = `${skill}${index < skills.length - 1 ? ', ' : ''}`;
        return (
          <Text style={styles.textSmallDarkItalic} key={skill}>
            {label}
          </Text>
        );
      })}
    </View>
  );
};

ExperienceSkills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default ExperienceSkills;
