import React, { useCallback, useState, useEffect } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Page from 'src/components/Page';
import CenteredText from '../lesson/LessonDetailsView/Overview/CenteredText';
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(3)
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      padding: '4px 0'
    },
    padding: '4px',
    overflow: 'hidden'
  },
  lessonHeader: {
    padding: 8,
    '&>.MuiCardHeader-action': {
      marginTop: 0,
      marginRight: 0
    },
    backgroundColor: theme.palette.action.hover
  }
}));

const ExamsView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Exams">
      <Container maxWidth="lg" className={classes.container}>
        <Card>
          <CardHeader
            className={classes.lessonHeader}
            title="Exams"
            action={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  height: '100%',
                  width: '80px'
                }}
              >
                <div
                  style={{
                    borderRadius: '100%',
                    backgroundColor: 'red',
                    fontSize: '8px',
                    fontWeight: '900',
                    padding: '2px',
                    width: '12px',
                    height: '12px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                ></div>
                <div
                  style={{
                    borderRadius: '100%',
                    backgroundColor: 'yellow',
                    fontSize: '8px',
                    fontWeight: '900',
                    padding: '2px',
                    width: '12px',
                    height: '12px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                ></div>
                <div
                  style={{
                    borderRadius: '100%',
                    backgroundColor: 'green',
                    fontSize: '8px',
                    fontWeight: '900',
                    padding: '2px',
                    width: '12px',
                    height: '12px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                ></div>
              </div>
            }
          />
          <CardContent>
            <CenteredText
              list={shuffleArray([
                'Welcome! Choose an exam to begin!',
                'Ranking resets every 2 weeks.',
                'The more exams you take, the higher your chance of winning the Grand Prize!'
              ])}
              variant="h3"
              marquee={true}
            />
          </CardContent>
        </Card>
      </Container>
      {/* <Container maxWidth="lg" className={classes.container}>
        <Header setExamFilters={setExamFilters} />

        <Box mt={1}>
          <Results projects={lessons} filters={filters} />
        </Box>
      </Container> */}
    </Page>
  );
};

export default ExamsView;
