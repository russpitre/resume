import { Document, Page, View, StyleSheet } from './pdf.js';
import React from 'react';
import resume from '../../data/resume';
import Education from './sections/Education.jsx';
import Header from './sections/Header.jsx';
import PersonalInfo from './sections/PersonalInfo.jsx';
import Skills from './sections/Skills.jsx';
import { COLOR_BG_PAGE, SPACING_LARGE } from './styles';
import Summary from './sections/Summary.jsx';
import WorkHistory from './sections/WorkHistory.jsx';

export const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '35vw',
    padding: SPACING_LARGE,
    backgroundColor: COLOR_BG_PAGE,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '65vw',
    padding: SPACING_LARGE,
  },
});

const ResumeDocument = () => (
  <Document title="Russell Pitre - Resume" author="Russell Pitre" subject="Resume">
    <Page size="letter" style={styles.page}>
      <View style={styles.leftContainer}>
        <Header person={resume.person} />
        <PersonalInfo person={resume.person} />
        <Education education={resume.education} />
        <Skills skills={resume.skills} />
      </View>
      <View style={styles.rightContainer}>
        <Summary person={resume.person} />
        <WorkHistory employers={resume.employers} />
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;
