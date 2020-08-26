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
import SuperPowerDialog from './SuperPowerDialog';

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
  lockedOption: {
    '& .checkIcon': {
      display: 'none'
    }
  },
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
  wrongAnswer: {
    opacity: 0.5
  },
  correctAnswer: {
    backgroundColor: theme.palette.secondary.main
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
    questions[currentQuestion].correctAnswer
  );

  const [powers, setPowers] = useState([
    {
      power: '50/50',
      active: true
    },
    {
      power: 'Audience',
      active: false
    },
    {
      power: 'LifeLine',
      active: false
    }
  ]);

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [score, setScore] = useState(0);

  const classes = useStyles();

  const handleSelectedAnswer = answer => {
    setSelectedAnswer(answer);
  };

  useEffect(() => {
    setCorrectAnswer(questions[currentQuestion].correctAnswer);
    const combinedAnswers = questions[currentQuestion].answers.concat(
      questions[currentQuestion].correctAnswer
    );
    setShuffledAnswers(shuffleArray(combinedAnswers));
  }, [currentQuestion]);

  const handleHasSubmitted = () => {
    setHasSubmitted(true);
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
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

  const activateSuperPower = ({ power }) => {
    if (power === '50/50') {
      setShuffledAnswers(
        shuffleArray([correctAnswer, questions[currentQuestion].answers[0]])
      );
      var data = [...powers];
      var index = data.findIndex(obj => obj.power === '50/50');
      data[index].active = false;
      setPowers(data);
    }
  };

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
            p={1}
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="190px"
          >
            {questions[currentQuestion].image === undefined ? (
              <Typography variant="h2">
                {questions[currentQuestion].text}
              </Typography>
            ) : (
              <img
                src={questions[currentQuestion].image}
                style={{ height: '100%', borderRadius: '5px' }}
              />
            )}
          </Box>
        </Card>
      </Box>
      <Box
        mt={-2}
        display="flex"
        flexDirection="row-reverse"
        alignItems="center"
      >
        {powers.map((power, i) => (
          <SuperPowerDialog
            key={'power-' + i}
            power={power}
            activate={superpower => activateSuperPower(superpower)}
          />
        ))}
      </Box>
      {shuffledAnswers.map((answer, i) => {
        return (
          <Box mb={1} key={answer}>
            <Card onClick={() => handleSelectedAnswer(answer)}>
              <Box
                p={1}
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="50px"
                className={`${
                  hasSubmitted ? classes.lockedOption : classes.button
                } ${
                  hasSubmitted
                    ? correctAnswer === answer
                      ? classes.correctAnswer
                      : classes.wrongAnswer
                    : ''
                }`}
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
        p={1}
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
