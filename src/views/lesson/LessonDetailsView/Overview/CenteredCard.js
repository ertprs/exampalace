import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  box: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  }
}));

const CenteredBox = ({ children }) => {
  const classes = useStyles();
  return <Card className={classes.box}>{children}</Card>;
};

export default CenteredBox;
