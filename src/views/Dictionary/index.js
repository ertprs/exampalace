import React, { useCallback, useState, useEffect } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const SchoolView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dictionary">
      <Container maxWidth="lg">
        <Header />
      </Container>
    </Page>
  );
};

export default SchoolView;
