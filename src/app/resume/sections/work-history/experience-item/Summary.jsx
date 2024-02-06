import { Text, View } from '../../../pdf.js';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../../styles.js';

const Summary = ({ summary }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.textSmallDark}>{summary}</Text>
    </View>
  );
};

Summary.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default Summary;
