import React, { useCallback, useState, useEffect } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';
import { VocabularyFeed } from './VocabularyFeed';
import lessons from './LessonsDb';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    padding: '4px 12px'
  }
}));

const ExamsView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Exams">
      <Container maxWidth="lg" className={classes.container}>
        <Header />
        <Box mt={1}>
          <Results projects={lessons} />
        </Box>
      </Container>
    </Page>
  );
};

export default ExamsView;
