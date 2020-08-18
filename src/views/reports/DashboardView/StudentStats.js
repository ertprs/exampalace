import React from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  LinearProgress,
  Typography,
  makeStyles,
  Link
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  progress: {
    margin: theme.spacing(1, 3),
    flexGrow: 1
  },
  title: {
    cursor: 'pointer'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary
  }
}));

const CurrentLesson = ({ className, ...rest }) => {
  const classes = useStyles();
  const data = {
    value: (1220 / 12000) * 100,
    lesson: 'English Level'
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
          <MenuIcon />
        </Box>
      </Link>
      <Box display="flex" alignItems="center">
        <Avatar className={classes.avatar} alt="Reviewer">
          12
        </Avatar>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          textAlign="center"
        >
          <LinearProgress
            className={classes.progress}
            value={data.value}
            color="secondary"
            variant="determinate"
          />

          <Typography variant="caption" color="textSecondary">
            1, 220 / 12, 000
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

CurrentLesson.propTypes = {
  className: PropTypes.string
};

export default CurrentLesson;
