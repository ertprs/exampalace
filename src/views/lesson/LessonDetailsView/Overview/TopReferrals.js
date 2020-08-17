import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Collapse,
  Card,
  Button,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Box,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core';
import GenericMoreButton from 'src/components/GenericMoreButton';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Greetings from './Greetings';
import Thread from './Thread';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  avatar: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white
  },
  item: {
    display: 'block'
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%'
  }
}));

const TopReferrals = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [referrals, setReferrals] = useState([]);
  const [openedWord, setOpenedWord] = useState(null);

  const getReferrals = useCallback(async () => {
    try {
      const response = await axios.get('/api/reports/top-referrals');

      if (isMountedRef.current) {
        setReferrals(response.data.referrals);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getReferrals();
  }, [getReferrals]);
  useEffect(() => {
    console.log(openedWord);
  }, [openedWord]);

  const handleOpenedWord = index => {
    if (index === openedWord) {
      setOpenedWord(null);
    } else {
      setOpenedWord(index);
    }
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Vocabulary" />
      <Divider />
      <List disablePadding>
        {referrals.map((referral, i) => (
          <ListItem
            className={clsx(classes.item, className)}
            divider={i < referrals.length - 1}
            key={referral.name}
          >
            <Button
              className={classes.button}
              onClick={() => handleOpenedWord(i)}
            >
              <ListItemText
                primary={referral.name}
                primaryTypographyProps={{ variant: 'h6' }}
              />
              {openedWord === i ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>
            <Collapse in={openedWord === i}>
              <Box p={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Un 'greeting' es un saludo. 'Greet' significa 'saludar'. De
                  acuerdo a la hora actual, debes usar el saludo correcto.
                </Typography>
              </Box>
              <Greetings />
              <Box p={2}>
                <Thread />
              </Box>
            </Collapse>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

TopReferrals.propTypes = {
  className: PropTypes.string
};

export default TopReferrals;
