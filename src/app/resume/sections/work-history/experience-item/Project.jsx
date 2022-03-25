import { Text } from '../../../pdf.js';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../../styles.js';

const Project = ({ project }) => {
  return <Text style={styles.textSmallDarkBold}>{project}</Text>;
};

Project.propTypes = {
  project: PropTypes.string.isRequired,
};

export default Project;
