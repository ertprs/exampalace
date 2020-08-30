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
  root: {
    marginTop: '8px'
  },
  cardcontent: {
    padding: 8,
    '&:last-child': {
      paddingBottom: 8
    }
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardcontent}>
        <Typography variant="h2" color="textPrimary">
            Que verga es un phrasal verb?
        </Typography>
      </CardContent>
    </Card>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
