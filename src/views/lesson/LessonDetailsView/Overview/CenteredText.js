import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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

const CenteredText = ({ variant, text }) => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography variant={variant} color="textPrimary">
        {text}
      </Typography>
    </Box>
  );
};

export default CenteredText;
