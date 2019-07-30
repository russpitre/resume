import PropTypes from 'prop-types';
import React from 'react';
import LabelValue from '../shared/label-value';
import Section from '../shared/section';

const PersonalInfo = ({ person }) => {
  const address = `${person.address.line1}
  ${person.address.city}, ${person.address.state} ${person.address.zip}`;

  return (
    <Section title="Personal Info" inverted>
      <LabelValue label="Address" value={address} inverted />
      <LabelValue label="Phone" value={person.phone} src={`tel:${person.phone}`} inverted />
      <LabelValue label="Email" value={person.email} src={`mailto:${person.email}`} inverted />
      <LabelValue label="LinkedIn" value={person.linkedIn} src={person.linkedIn} isLink inverted />
    </Section>
  );
};

PersonalInfo.propTypes = {
  person: PropTypes.shape({
    address: PropTypes.shape({
      line1: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
    }),
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkedIn: PropTypes.string.isRequired,
  }),
};

export default PersonalInfo;
