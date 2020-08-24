import React, { useCallback, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';
import { VocabularyFeed } from './VocabularyFeed';
import lessons from './LessonsDb';
import exams from 'src/_data/Exams';

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
  let location = useLocation();
  const classes = useStyles();

  const [exam, setExam] = useState(
    exams.find(
      e =>
        e.title ===
        location.pathname
          .split('/')
          .pop()
          .replace(/-/g, ' ')
    )
  );

  //REDIRECT THE USER IF THE URL DOES NOT CONTAIN AN EXAM
  if (exam === undefined) {
    return <Redirect to="/app/exams" />;
  }

  return (
    <Page className={classes.root} title="Exams">
      <Container maxWidth="lg" className={classes.container}>
        <Box mt={6}>
          <Results exam={exam} />
        </Box>
      </Container>
    </Page>
  );
};

export default ExamsView;
