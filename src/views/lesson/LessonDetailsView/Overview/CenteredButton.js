import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
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

const CenteredButton = ({ text, width, variant, disabled }) => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Button
        style={{
          width: `${width}%`
        }}
        variant={variant}
        disabled={disabled}
      >
        {text}
      </Button>
    </Box>
  );
};

export default CenteredButton;
