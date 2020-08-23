import React, { useCallback, useState, useEffect } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Filter from './Filter';
import Results from './Results';
import {VocabularyFeed} from './VocabularyFeed';
import lessons from './LessonsDb';

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
        <Box mt={1}>
          <VocabularyFeed />
        </Box>
        <Box mt={1}>
          <Filter />
        </Box>
        <Box mt={1}>
          <Results projects={lessons} />
        </Box>
      </Container>
    </Page>
  );
};

export default SchoolView;
