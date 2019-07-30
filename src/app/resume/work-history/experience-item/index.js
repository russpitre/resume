import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Client from './client';
import Project from './project';
import ExperienceSkills from './skills';
import Summary from './summary';

const ExperienceItem = ({ project, client, summary, skills }) => {
  return (
    <Fragment>
      <Project project={project} />
      <Client client={client} />
      <Summary summary={summary} />
      <ExperienceSkills skills={skills} />
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
