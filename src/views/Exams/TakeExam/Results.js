import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, makeStyles } from '@material-ui/core';
import Instructions from './Instructions';
import ExamTemplate from './ExamTemplate';
const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  },
  sortButton: {
    textTransform: 'none',
    letterSpacing: 0,
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, exam, ...rest }) => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [countDown, setCountDown] = useState(3);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={1}>
        {!startQuiz && <Instructions startQuiz={handleStartQuiz} exam={exam} />}
        <Grid item xs={12} md={12} lg={12}>
          {startQuiz && <ExamTemplate questions={exam.questions} />}
        </Grid>
      </Grid>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  exam: PropTypes.object.isRequired
};

export default Results;
