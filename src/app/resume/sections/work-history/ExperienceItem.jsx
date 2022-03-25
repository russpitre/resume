import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Client from './experience-item/Client.jsx';
import Project from './experience-item/Project.jsx';
import Skills from './experience-item/Skills.jsx';
import Summary from './experience-item/Summary.jsx';

const ExperienceItem = ({ project, client, summary, skills }) => {
  return (
    <Fragment>
      <Project project={project} />
      <Client client={client} />
      <Summary summary={summary} />
      <Skills skills={skills} />
    </Fragment>
  );
};

ExperienceItem.propTypes = {
  project: PropTypes.string.isRequired,
  client: PropTypes.string,
  summary: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default ExperienceItem;
