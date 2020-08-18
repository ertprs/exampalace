import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const Testimonials = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          className={classes.title}
        >
          &quot;I picked up English really quick with this immersive method.
          <br />
          It's also tons of fun.&quot;
        </Typography>
        <Box mt={6} display="flex" justifyContent="center" alignItems="center">
          <Avatar src="/static/home/olivier.png" />
          <Box ml={2}>
            <Typography variant="body1" color="textPrimary">
              Carlos Zuñiga
              <Typography
                color="textSecondary"
                display="inline"
                component="span"
              >
                , co-creator of @ExamPalace
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string
};

export default Testimonials;
