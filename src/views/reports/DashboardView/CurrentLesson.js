import React from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  LinearProgress,
  Typography,
  makeStyles,
  Link,
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  },
  title: {
    cursor: 'pointer'
  }
}));

const CurrentLesson = ({ className, ...rest }) => {
  const classes = useStyles();
  const data = {
    value: 33,
    lesson: 'Lesson 1 - Greetings and Goodbyes'
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
        <Link
          style={{ textDecoration: 'none' }}
          component={RouterLink}
          to="/app/lessons/1"
        >
              <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            className={classes.title}
            component="h3"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            {data.lesson}
          </Typography>
          <PlayArrowIcon />
      </Box>
        </Link>
      <Box display="flex" alignItems="center" flexWrap="wrap">
        <Typography variant="h3" color="textPrimary">
          {data.value}%
        </Typography>
        <LinearProgress
          className={classes.progress}
          value={data.value}
          color="secondary"
          variant="determinate"
        />
      </Box>
    </Card>
  );
};

CurrentLesson.propTypes = {
  className: PropTypes.string
};

export default CurrentLesson;
