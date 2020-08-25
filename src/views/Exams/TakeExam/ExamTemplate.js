import React, { useState, useEffect } from 'react';
import {
  Card,
  Typography,
  Box,
  makeStyles,
  Button,
  Divider,
  withStyles
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Rating } from '@material-ui/lab';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import DoneIcon from '@material-ui/icons/Done';
import CompleteDialog from './CompletedDialog';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
const StyledRating = withStyles(theme => ({
  iconFilled: {
    color: theme.palette.primary.main
  }
}))(Rating);
const useStyles = makeStyles(theme => ({
  button: {
    '& .checkIcon': {
      display: 'none'
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    },
    '&:hover .checkIcon': {
      display: 'flex'
    }
  },
  checkIconSelected: {
    display: 'flex'
  },
  checkIcon: {
    position: 'absolute',
    right: 36,
    [theme.breakpoints.down('sm')]: {
      right: 16
    },
    [theme.breakpoints.down('md')]: {
      right: 36
    }
  },
  questionCount: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '8px',
    paddingRight: '8px'
  },
  scoreCount: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    paddingLeft: '8px',
    paddingRight: '8px'
  }
}));

function ExamTemplate({ questions, title }) {
  const [examFinished, setExamFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(
    questions[currentQuestion].answers[0]
  );

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [score, setScore] = useState(0);

  const classes = useStyles();

  const handleSelectedAnswer = answer => {
    setSelectedAnswer(answer);
  };

  useEffect(() => {
    setCorrectAnswer(questions[currentQuestion].answers[0]);
    setAnswers(shuffleArray(questions[currentQuestion].answers));
  }, [currentQuestion]);

  const handleHasSubmitted = () => {
    setHasSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 === questions.length) {
      setExamFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setHasSubmitted(false);
    }
  };

  if (examFinished) {
    return <CompleteDialog score={score} />;
  }

  return (
    <>
      <Box mb={3}>
        <div className={classes.scoreCount}>
          <StyledRating
            readOnly
            value={score}
            max={questions.length}
            icon={<DoneIcon />}
            // emptyIcon={<SentimentDissatisfiedIcon />}
          />
        </div>
        <Card>
          <div className={classes.questionCount}>
            <Typography variant="overline" color="textSecondary">
              {title}
            </Typography>
            <Typography variant="overline" color="textSecondary">
              {currentQuestion + 1} / {questions.length}
            </Typography>
          </div>
          <Divider />
          <Box
            p={2}
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="190px"
          >
            <Typography variant="h2">
              {questions[currentQuestion].text}
            </Typography>
          </Box>
        </Card>
      </Box>
      {answers.map((answer, i) => {
        return (
          <Box mb={1} key={answer}>
            <Card onClick={() => handleSelectedAnswer(answer)}>
              <Box
                p={2}
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="50px"
                className={classes.button}
              >
                <Typography variant="body1">{answer}</Typography>
                <CheckCircleOutlineIcon
                  className={`${classes.checkIcon} ${
                    selectedAnswer === answer
                      ? 'checkIconSelected'
                      : 'checkIcon'
                  }`}
                />
              </Box>
            </Card>
          </Box>
        );
      })}

      <Box
        p={2}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50px"
      >
        <Button
          variant="outlined"
          disabled={selectedAnswer === null}
          onClick={() => {
            if (!hasSubmitted) {
              handleHasSubmitted();
            } else {
              handleNextQuestion();
            }
          }}
        >
          {hasSubmitted ? 'Next' : 'Check'}
        </Button>
      </Box>
    </>
  );
}

export default ExamTemplate;
