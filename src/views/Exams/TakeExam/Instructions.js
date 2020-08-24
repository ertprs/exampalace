import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Rating } from '@material-ui/lab';
import DialogContentText from '@material-ui/core/DialogContentText';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    padding: 0
  },
  dialogButton: {
    padding: '8px',
    width: '100%'
  },
  root: {},
  likedButton: {
    color: colors.red[600]
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  },
  membersIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
  },
  image: {
    width: '100%',
    borderRadius: '5px'
  },
  difficulty: {
    marginRight: theme.spacing(1)
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Instructions({ className, exam, startQuiz, ...rest }) {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    startQuiz();
  };

  return (
    <>
      <Dialog
        className={classes.dialog}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Box mt={5} mb={5} display="flex" justifyContent="center">
          <Typography variant="h2" color="textPrimary">
            Instructions
          </Typography>
        </Box>

        <Box
          mt={1}
          px={2}
          display="flex"
          textAlign="center"
          justifyContent="center"
        >
          <Typography color="textPrimary" variant="h4">
            You have 50 seconds to answer 7 questions.
          </Typography>
        </Box>
        <Box px={5} mb={2} display="flex" justifyContent="center">
          <Typography color="textSecondary" variant="overline">
            good luck
          </Typography>
        </Box>
        <Divider />
        <Box display="flex" p={1}>
          <Button
            onClick={handleClose}
            color="primary"
            className={classes.dialogButton}
          >
            Start
          </Button>
        </Box>
      </Dialog>
    </>
  );
}
