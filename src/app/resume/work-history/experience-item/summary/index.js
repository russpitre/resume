import { Text, View } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../../styles';

const Summary = ({ summary }) => {
  return (
    <View style={{ marginTop: 4 }}>
      <Text style={styles.textSmallDark}>{summary}</Text>
    </View>
  );
};

Summary.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default Summary;
