import React, { useCallback, useState, useEffect } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Results from './Results';
import lessons from './LessonsDb';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      padding: '4px 0'
    },
    padding: '4px',
    overflow: 'hidden'
  }
}));

const ExamsView = () => {
  const classes = useStyles();

  const [filters, setFilters] = useState([]);

  const setExamFilters = chips => {
    setFilters(chips);
  };

  return (
    <Page className={classes.root} title="Exams">
      <Container maxWidth="lg" className={classes.container}>
        <Header setExamFilters={setExamFilters} />

        <Box mt={1}>
          <Results projects={lessons} filters={filters} />
        </Box>
      </Container>
    </Page>
  );
};

export default ExamsView;
