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
import DoneIcon from '@material-ui/icons/Done';
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
    paddingLeft: '8px',
    paddingRight: '8px',
    marginBottom: '-24px'
  }
}));

function ExamTemplate({ questions, title }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const correctAnswer = questions[currentQuestion].answers[0];

  const classes = useStyles();

  const handleSelectedAnswer = answer => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === correctAnswer) {
      alert('correct');
    } else {
      alert('incorrect');
    }
  };

  return (
    <>
      <Box mb={3}>
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
        <div className={classes.scoreCount}>
          <StyledRating
            readOnly
            value={score}
            max={questions.length}
            icon={<DoneIcon />}
          />
        </div>
      </Box>
      {questions[currentQuestion].answers.map((answer, i) => {
        console.log(selectedAnswer);
        console.log(i);
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
        <Button variant="outlined" onClick={() => handleNextQuestion()}>
          Ok
        </Button>
      </Box>
    </>
  );
}

export default ExamTemplate;
