import { Text, View } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../styles';

const EmployerName = ({ name, location }) => {
  return (
    <View style={{ marginBottom: 4 }}>
      <Text style={styles.textMediumDarkBold}>{name}</Text>
      <Text style={styles.textSmallDarkItalic}>{location}</Text>
    </View>
  );
};

EmployerName.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default EmployerName;
