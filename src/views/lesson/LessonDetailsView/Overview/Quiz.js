import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Markdown from 'react-markdown/with-html';
import {
  Box,
  Chip,
  Card,
  CardContent,
  Grid,
  Button,
  makeStyles,
  CardHeader,
  Divider
} from '@material-ui/core';

import CenteredText from './CenteredText';
import AnswerOption from './AnswerOption';
import CenteredButton from './CenteredButton';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const lesson = {
  title: 'Lesson 1 - Greetings and Goodbyes'
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0
  },
  markdown: {
    fontFamily: theme.typography.fontFamily,
    '& p': {
      marginBottom: theme.spacing(2)
    }
  },
  marginLeft: {
    marginLeft: '5px'
  },
  lessonHeader: {
    padding: 8
  },
  image: {
    width: '100%',
    margin: '-16px',
    borderRadius: '3px'
  },
  CardContent: {
    height: '192px'
  },
  answerOptions: {
    marginTop: 8,
    height: 144,
    [theme.breakpoints.down('xs')]: {
      height: 240
    }
  }
}));

const Quiz = ({ className, quizData, ...rest }) => {
  const { questions } = quizData;
  const [finished, setFinished] = useState(false);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [correctAnswer, setCorrectAnswer] = useState(
    questions[currQuestion].correct
  );
  const classes = useStyles();
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    setAnswers(
      shuffleArray(
        questions[currQuestion].incorrect.concat(
          questions[currQuestion].correct
        )
      )
    );
  }, []);

  const handleSelectedAnswer = answer => {
    setSelectedAnswer(answer);
  };

  return (
    <>
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardHeader title={quizData.title} className={classes.lessonHeader} />
        <Divider />
        <CardContent className={classes.CardContent}>
          <CenteredText
            variant="h3"
            text={quizData.questions[currQuestion].text}
          />
        </CardContent>
      </Card>
      <Grid container spacing={1} className={classes.answerOptions}>
        {answers.map((answer, i) => (
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
            key={i}
            onClick={() => handleSelectedAnswer(answer)}
          >
            <AnswerOption
              answer={answer}
              isSelected={selectedAnswer === answer}
            />
          </Grid>
        ))}
        <Grid item lg={12} md={12} xs={12}>
          <CenteredButton
            disabled={!selectedAnswer}
            text="Check"
            width={50}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

Quiz.propTypes = {
  className: PropTypes.string,
  quizData: PropTypes.object.isRequired
};

export default Quiz;
