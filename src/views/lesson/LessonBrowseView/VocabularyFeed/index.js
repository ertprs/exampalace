import React from 'react';
import {
  Card,
  Box,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core';
import { VocabularyFeedCard } from './VocabularyFeedCard';

const vocabFeedArray = [
  {
    word: 'wake up',
    image:
      'https://images.pexels.com/photos/3807632/pexels-photo-3807632.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    classification: 'phrasal verb',
    author: {
      name: 'Don Fields',
      avatar: '/static/images/avatars/avatar_6.png'
    }
  },
  {
    word: 'hang on',
    image:
      'https://images.pexels.com/photos/4067766/pexels-photo-4067766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    classification: 'phrasal verb',
    author: {
      name: 'Don Fields',
      avatar: '/static/images/avatars/avatar_6.png'
    }
  },
];

const useStyles = makeStyles(theme => ({
  vocabFeedContainer: {
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
}));

export const VocabularyFeed = () => {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.vocabFeedContainer}>
      {vocabFeedArray.map(word => (
        <VocabularyFeedCard word={word} key={word.word} />
      ))}
    </Box>
  );
};
