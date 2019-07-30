import { Text } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from '../../../styles';

const Client = ({ client }) => {
  return <Text style={styles.textSmallDarkItalic}>{client}</Text>;
};

Client.propTypes = {
  client: PropTypes.string,
};

export default Client;
