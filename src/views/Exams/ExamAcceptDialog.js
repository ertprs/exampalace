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

export default function ExamAcceptDialog({ className, exam, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        disabled={!(exam.questions?.length > 0)}
      >
        start
      </Button>
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
            Are you sure?
          </Typography>
        </Box>

        <Box mt={1} px={2} display="flex" justifyContent="center">
          <Typography color="textPrimary" variant="h4">
            {exam.title}
          </Typography>
        </Box>
        <Box px={2} display="flex" justifyContent="center">
          <Typography color="textSecondary" variant="overline">
            {exam.type}
          </Typography>
        </Box>
        <Box mt={1} px={4} display="flex" alignItems="center">
          <Typography color="textSecondary" variant="body2">
            {exam.description}
          </Typography>
        </Box>
        <Box pb={1} px={2} mb={2}>
          <Box
            mt={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              color="textSecondary"
              variant="overline"
              className={classes.difficulty}
            >
              Difficulty:
            </Typography>
            <Rating
              icon={<FitnessCenterIcon />}
              value={exam.difficulty}
              size="small"
              max={3}
              readOnly
            />
          </Box>
        </Box>
        <Divider />
        <Box display="flex" p={1}>
          <Button
            onClick={handleClose}
            color="primary"
            className={classes.dialogButton}
          >
            No
          </Button>
          <Button
            component={RouterLink}
            color="primary"
            to={`/app/exams/${exam.title.replace(/\s/g, '-')}`}
            className={classes.dialogButton}
          >
            Yes
          </Button>
        </Box>
      </Dialog>
    </>
  );
}
