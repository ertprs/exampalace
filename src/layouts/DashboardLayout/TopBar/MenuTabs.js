import React, { useCallback, useState, useEffect } from 'react';
import {
  Box,
  Container,
  Avatar,
  Tab,
  Tabs,
  makeStyles
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'src/utils/axios';
import useAuth from 'src/hooks/useAuth';

import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';
import SchoolIcon from '@material-ui/icons/School';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
// import Timeline from './Timeline';
// import Connections from './Connections';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%'
  },
  tabs: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      borderRadius: '10px 10px 0px 0px'
    }
  },
  topBar: {
    backgroundColor: theme.palette.background.paper
  },
  indicator: {
    height: '5px'
  }
}));

const ProfileView = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [currentTab, setCurrentTab] = useState('timeline');
  const [profile, setProfile] = useState(null);
  const { user } = useAuth();

  const tabs = [
    {
      value: 'timeline',
      label: <SchoolIcon />,
      href: '/app/reports/dashboard'
    },
    {
      value: 'connections',
      label: <VideogameAssetIcon />,
      href: '/app/exams/browse'
    },
    {
      value: 'friends',
      label: <EmojiPeopleIcon />,
      href: '/app/reports/dashboard'
    },
    {
      value: 'dictionary',
      label: <MenuBookIcon />,
      href: '/app/reports/dashboard'
    },
    {
      value: 'user',
      label: <Avatar alt="Author" src={user.avatar} />,
      href: '/app/reports/dashboard'
    }
  ];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  const getPosts = useCallback(async () => {
    try {
      const response = await axios.get('/api/social/profile');

      if (isMountedRef.current) {
        setProfile(response.data.profile);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (!profile) {
    return null;
  }

  return (
    <Page className={classes.root} title="Exam Palace">
      <Box className={classes.topBar}>
        <Tabs
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={currentTab}
          textColor="secondary"
          classes={{
            indicator: classes.indicator
          }}
        >
          {tabs.map(tab => (
            <Tab
              component={RouterLink}
              to={tab.href}
              className={classes.tabs}
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>
      </Box>
    </Page>
  );
};

export default ProfileView;
