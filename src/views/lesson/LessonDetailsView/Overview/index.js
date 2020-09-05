import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box, Grid, makeStyles } from '@material-ui/core';
import Metadata from './Metadata';
import Quiz from './Quiz';
import Members from './Members';
import TopReferrals from './TopReferrals';

const quizData = {
  title: 'Welcome to ExamPalace',
  questions: [
    {
      text: "Hi, it's nice to meet you!",
      correct: 'Thanks! Nice to meet you too!',
      incorrect: ['Ok!', "What's your favorite food?", "I'm good, thanks!"],
      translations: {
        es: 'Hola, es agradable conocerte.'
      }
    }
  ]
};

const useStyles = makeStyles(() => ({
  root: {}
}));

const Overview = ({ className, project, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={1}
      {...rest}
    >
      <Grid item lg={12} xl={12} xs={12}>
        <Quiz quizData={quizData} />
      </Grid>
    </Grid>
  );
};

Overview.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default Overview;
