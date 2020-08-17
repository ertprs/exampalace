import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { withStyles } from '@material-ui/core/styles';
import { Box, LinearProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    minHeight: '100%',
    padding: theme.spacing(3)
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

const LoadingScreen = () => {
  const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={classes.root}>
      <Box width={400}>
        <BorderLinearProgress />
      </Box>
    </div>
  );
};

export default LoadingScreen;
