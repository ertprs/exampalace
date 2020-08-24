import React, { useCallback, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
import Account from './Account';

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
    // backgroundColor: 'red',
    backgroundColor: theme.palette.background.paper,
    minHeight: '100%'
  },
  topBar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  tab: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      borderRadius: '10px 10px 1px 1px'
    }
  },
  indicator: {
    height: '5px',
    borderRadius: '10px 10px 10px 10px'
  }
}));

const MenuTabs = () => {
  let location = useLocation();
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [currentTab, setCurrentTab] = useState(`/app/${location.pathname.split("/")[2]}`);
  const [profile, setProfile] = useState(null);
  const { user } = useAuth();

  const tabs = [
    {
      label: <VideogameAssetIcon />,
      href: '/app/exams'
    },
    {
      label: <SchoolIcon />,
      href: '/app/school'
    },
    {
      label: <EmojiPeopleIcon />,
      href: '/app/friends'
    },
    {
      label: <MenuBookIcon />,
      href: '/app/dictionary'
    }
  ];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Box className={classes.topBar}>
        <Tabs
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={currentTab}
          textColor="secondary"
          classes={{
            indicator: classes.indicator
          }}
          className={classes.tabs}
        >
          {tabs.map(tab => (
            <Tab
              component={RouterLink}
              to={tab.href}
              className={classes.tab}
              key={tab.href}
              label={tab.label}
              value={tab.href}
            />
          ))}
        </Tabs>
      </Box>
      <Account />
    </>
  );
};

export default MenuTabs;
