import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core';
import GenericMoreButton from 'src/components/GenericMoreButton';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  avatar: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white
  }
}));

const TopReferrals = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [referrals, setReferrals] = useState([]);

  const getReferrals = useCallback(async () => {
    try {
      const response = await axios.get('/api/reports/greetings');

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

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <List disablePadding>
        <ListItem divider={true} key={'greeting-1'}>
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              src={'/static/images/sunrise.svg'}
              >
              GM
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={'Good Morning'}
            primaryTypographyProps={{ variant: 'h6' }}
          />
          <Typography variant="body2" color="textSecondary">
            Buenos días
          </Typography>
        </ListItem>
        <ListItem divider={true} key={'greeting-1'}>
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              src={'/static/images/sunshine.svg'}
            >
              GA
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={'Good Afternoon'}
            primaryTypographyProps={{ variant: 'h6' }}
          />
          <Typography variant="body2" color="textSecondary">
            Buenas tardes
          </Typography>
        </ListItem>
        <ListItem divider={true} key={'greeting-1'}>
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              src={'/static/images/half-moon.svg'}
            >
              GE
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={'Good Evening'}
            primaryTypographyProps={{ variant: 'h6' }}
          />
          <Typography variant="body2" color="textSecondary">
            Buenas tardes (noche)
          </Typography>
        </ListItem>
        {/* {referrals.map((referral, i) => (
          <ListItem
            divider={i < referrals.length - 1}
            key={referral.name}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                style={{ backgroundColor: referral.color }}
              >
                {referral.initials}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={referral.name}
              primaryTypographyProps={{ variant: 'h6' }}
            />
            <Typography
              variant="body2"
              color="textSecondary"
            >
              {numeral(referral.value).format('0,0')}
            </Typography>
          </ListItem>
        ))} */}
      </List>
    </Card>
  );
};

TopReferrals.propTypes = {
  className: PropTypes.string
};

export default TopReferrals;
