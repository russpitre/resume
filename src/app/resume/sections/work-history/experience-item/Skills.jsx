import { Text, View } from '../../../pdf.js';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../../styles.js';

const Skills = ({ skills }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 6 }}>
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

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
