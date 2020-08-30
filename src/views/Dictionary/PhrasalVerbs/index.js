import React, { useCallback, useState, useEffect } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Feed from './Feed';
import Description from './Description';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1)
  }
}));

const SchoolView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Phrasal Verbs">
      <Container maxWidth="lg">
        <Header />
        <Feed />
        <Description />

      </Container>
    </Page>
  );
};

export default SchoolView;
