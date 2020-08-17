import React from 'react';
import {
  Box,
  LinearProgress,
  makeStyles
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    padding: theme.spacing(3),
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2000
  }
}));
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}))(LinearProgress);


const SlashScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box width={400}>
        <BorderLinearProgress />
      </Box>
    </div>
  );
}

export default SlashScreen;
