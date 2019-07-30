import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
import resume from "../../data/resume";
import Education from "./education";
import Header from "./header";
import PersonalInfo from "./personal-info";
import Skills from "./skills";
import { COLOR_BG_PAGE, SPACING_LARGE } from "./styles";
import Summary from "./summary";
import WorkHistory from "./work-history";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "row"
  },
  leftContainer: {
    width: "35vw",
    padding: SPACING_LARGE,
    backgroundColor: COLOR_BG_PAGE
  },
  rightContainer: {
    width: "65vw",
    padding: SPACING_LARGE
  }
});

const ResumeDocument = () => (
  <Document
    title="Russell Pitre - Resume"
    author="Russell Pitre"
    subject="Resume"
  >
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
