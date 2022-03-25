import { View, StyleSheet } from '../pdf.js';
import PropTypes from 'prop-types';
import React from 'react';
import Section from '../shared/Section.jsx';
import { SPACING_LARGER, SPACING_MEDIUM } from '../styles.js';
import Date from './work-history/Date.jsx';
import EmployerName from './work-history/EmployerName.jsx';
import ExperienceItem from './work-history/ExperienceItem.jsx';

const localStyles = StyleSheet.create({
  employmentWrapper: {
    marginBottom: 32,
  },
  container: {
    flexDirection: 'row',
  },
  leftColumn: {
    width: '25%',
  },
  rightColumn: {
    width: '75%',
  },
  employerNameWrapper: {
    paddingVertical: 2,
  },
});

const WorkHistory = ({ employers }) => {
  return (
    <Section title="Work History">
      {employers.map(employer => (
        <View key={employer.id} style={localStyles.employmentWrapper}>
          <View style={[localStyles.container, localStyles.employerNameWrapper]}>
            <EmployerName
              name={employer.name}
              location={employer.location}
              from={employer.from}
              to={employer.to}
            />
          </View>

          {employer.experience.map((exp, index) => {
            const marginTop = index === 5 ? SPACING_LARGER : SPACING_MEDIUM;

            return (
              <View style={[localStyles.container, { marginTop }]} key={exp.project} wrap={false}>
                <View style={localStyles.leftColumn}>
                  <Date from={exp.from} to={exp.to} />
                </View>
                <View style={localStyles.rightColumn}>
                  <ExperienceItem
                    skills={exp.skills}
                    client={exp.client}
                    project={exp.project}
                    summary={exp.summary}
                  />
                </View>
              </View>
            );
          })}
        </View>
      ))}
    </Section>
  );
};

WorkHistory.propTypes = {
  employers: PropTypes.arrayOf(
    PropTypes.shape({
      experience: PropTypes.arrayOf(
        PropTypes.shape({
          project: PropTypes.string,
          client: PropTypes.string,
          summary: PropTypes.string.isRequired,
          skills: PropTypes.array.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default WorkHistory;
