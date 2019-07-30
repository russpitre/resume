import { Text, View } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';
import { SPACING_LARGER, styles } from '../styles';

const Header = ({ person }) => {
  return (
    <View style={{ marginBottom: SPACING_LARGER }}>
      <Text style={styles.textLargeLight}>{`${person.name.first} ${person.name.last}`}</Text>
      <Text style={styles.textMediumLight}>{person.title}</Text>
    </View>
  );
};

Header.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
  }),
};

export default Header;
