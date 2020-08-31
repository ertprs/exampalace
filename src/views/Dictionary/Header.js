import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Typography, makeStyles, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '48px'
  },
  cardcontent: {
    padding: 8,
    '&:last-child': {
      paddingBottom: 12
    }
  }
}));

const Header = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardcontent}>
        <Typography variant="h2" color="textPrimary">
          Dictionary
        </Typography>
      </CardContent>
    </Card>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
