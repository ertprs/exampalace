import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Tyopgraphy from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import CenteredText from './CenteredText';
import useSound from 'use-sound';

import popSfx from 'src/sounds/smrpg_correct.wav';

const useStyles = makeStyles(theme => ({
  card: {
    position: 'relative',
    width: '100%',
    height: '100%',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: theme.palette.action.hover,
      '&>.finger': {
        visibility: 'visible'
      }
    },
    display: 'flex',
    alignItems: 'center'
  },
  finger: {
    visibility: 'hidden',
    marginLeft: '16px',
    position: 'absolute',
    top: 0,
    left: 0
  },
  selected: {
    backgroundColor: theme.palette.action.selected,
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: theme.palette.action.selected
    }
  }
}));

const AnswerOption = ({ answer, isSelected }) => {
  const classes = useStyles();
  const [play] = useSound(popSfx);

  const handleDrag = ev => {
    console.log(ev.target);
  };
  return (
    <Card
      className={`
    ${classes.card}
    ${isSelected ? classes.selected : ''}
    `}
      draggable="true"
      value="hello"
      onDragStart={handleDrag}
      onClick={play}
    >
      <div className={`${classes.finger} finger`}>{'👉🏻'}</div>
      <CenteredText variant="h6" text={answer} />
    </Card>
  );
};

export default AnswerOption;
