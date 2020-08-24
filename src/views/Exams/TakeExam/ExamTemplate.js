import React, { useState, useEffect } from 'react';
import { Card, Typography, Box, makeStyles, Button } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const useStyles = makeStyles(theme => ({
  button: {
    '& .checkIcon': {
      display: 'none'
    },
    '&:hover .checkIcon': {
      display: 'flex'
    }
  },
  checkIcon: {
    position: 'absolute',
    right: 36,
    [theme.breakpoints.down('sm')]: {
      right: 16
    }
  },
  questionCount: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    paddingRight: '8px'
  }
}));

function ExamTemplate({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

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
            <Typography variant="h6">
              {currentQuestion + 1} / {questions.length}
            </Typography>
          </div>
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
      {questions[currentQuestion].answers.map((answer, i) => {
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
                    selectedAnswer === i ? 'checkIconSelected' : 'checkIcon'
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
