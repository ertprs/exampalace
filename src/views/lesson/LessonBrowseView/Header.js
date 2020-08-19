import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
  SvgIcon,
  Typography,
  makeStyles,
  Card,
  CardContent
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { PlusCircle as PlusIcon } from 'react-feather';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      alignItems="center"
      container
      justify="space-between"
      spacing={3}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/app"
            component={RouterLink}
          >
            Dashboard
          </Link>
          <Link
            variant="body1"
            color="inherit"
            to="/app/lessons/browse"
            component={RouterLink}
          >
            Lessons
          </Link>
          <Typography variant="body1" color="textPrimary">
            Browse
          </Typography>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          {'Choose a lesson 👩🏾‍🏫'}
        </Typography>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Typography variant="h6" color="textPrimary">
              Lessons Completed: 23/42
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
