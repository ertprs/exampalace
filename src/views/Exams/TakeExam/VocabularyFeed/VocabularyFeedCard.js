import React from 'react';
import {
  Card,
  Box,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  image: {
    width: '100%',
    '&:hover': {
      transform: 'scale(1.2)'
    },
    transition: 'all 0.5s ease-in-out'
  },
  text: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    color: 'white'
  },
  cardDiv: {
    width: '120px',
    minWidth: '120px',
    height: '180px',
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    },
    overflow: 'hidden',
    borderRadius: '5px',
    position: 'relative',
    marginRight: '10px'
  }
}));

export const VocabularyFeedCard = ({ word }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardDiv}>
      <img src={word.image} alt="vocab-word" className={classes.image} />
      <Typography variant="h5" className={classes.text}>
        {word.word}
      </Typography>
    </div>
  );
};
