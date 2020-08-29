/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import Logo from 'src/components/Logo';
import useAuth from 'src/hooks/useAuth';
import NavItem from './NavItem';
import SchoolIcon from '@material-ui/icons/School';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import SkillMeter from 'src/components/SkillMeter';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {
  firebaseGetUserSkills,
  firebaseGetUserExams
} from 'src/hooks/firestoreRead';

const skills = [
  'Reading',
  'Writing',
  'Spelling',
  'Grammar',
  'Vocabulary',
  'Conversational'
];

function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const { user } = useAuth();
  const [collapseIn, setCollapseIn] = useState(false);
  const [lifeTimeExams, setLifeTimeExams] = useState(0);
  const [skillLevels, setSkillLevels] = useState({
    reading: 0,
    writing: 0,
    grammar: 0,
    spelling: 0,
    vocabulary: 0,
    conversational: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      setSkillLevels(await firebaseGetUserSkills(user.email));
      setLifeTimeExams(await firebaseGetUserExams(user.email));
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleOnClick = () => {
    setCollapseIn(!collapseIn);
  };

  const renderScores = () => {
    let content = [];
    for (const [key, value] of Object.entries(skillLevels)) {
      content.push(
        <div key={key}>
          <Box p={1} display="flex" flexWrap="no-wrap" my={-1}>
            <Typography variant="overline" color="textSecondary">
              {key}
            </Typography>
            <Box flexGrow={1} />
            <Typography variant="overline" color="textSecondary">
              {value}%
            </Typography>
          </Box>
          <Divider />
        </div>
      );
    }
    return content;
  };

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <RouterLink to="/">
              <Logo />
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <RouterLink to="/app/account">
              <Avatar alt="User" className={classes.avatar} src={user.avatar} />
            </RouterLink>
          </Box>
          <Box mt={2} textAlign="center">
            <Link
              component={RouterLink}
              to="/app/account"
              variant="h5"
              color="textPrimary"
              underline="none"
            >
              {user.name}
            </Link>
            <Typography variant="body2" color="textSecondary">
              <Link component={RouterLink} to="/pricing">
                {user.tier}
              </Link>
            </Typography>
          </Box>
        </Box>
        <Divider />

        <Box display="flex" flexDirection="column">
          <Box p={1} flexGrow={1}>
            <Button onClick={() => handleOnClick()} style={{ width: '100%' }}>
              <Box display="flex" flexGrow={1} alignItems="center">
                <AssessmentIcon />
                <Typography
                  variant="overline"
                  color="textSecondary"
                  style={{ marginLeft: '8px' }}
                >
                  Assessment
                </Typography>
                <Box flexGrow={1} />
                {collapseIn === true ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Box>
            </Button>
          </Box>
          <Divider />
          <Collapse in={collapseIn}>
            {/* {renderScores()} */}

            <Box p={1} display="flex" flexWrap="no-wrap" my={-1}>
              <Typography variant="overline" color="textSecondary">
                Reading
              </Typography>
              <Box flexGrow={1} />
              <Typography variant="overline" color="textSecondary">
                {skillLevels.reading}%
              </Typography>
            </Box>
            <Divider />
            <Box p={1} display="flex" flexWrap="no-wrap" my={-1}>
              <Typography variant="overline" color="textSecondary">
                Writing
              </Typography>
              <Box flexGrow={1} />
              <Typography variant="overline" color="textSecondary">
                {skillLevels.writing}%
              </Typography>
            </Box>
            <Divider />

            <Box p={1} display="flex" flexWrap="no-wrap" my={-1}>
              <Typography variant="overline" color="textSecondary">
                Grammar
              </Typography>
              <Box flexGrow={1} />
              <Typography variant="overline" color="textSecondary">
                {skillLevels.grammar}%
              </Typography>
            </Box>
            <Divider />
            <Box p={1} display="flex" flexWrap="no-wrap" my={-1}>
              <Typography variant="overline" color="textSecondary">
                Spelling
              </Typography>
              <Box flexGrow={1} />
              <Typography variant="overline" color="textSecondary">
                {skillLevels.spelling}%
              </Typography>
            </Box>
            <Divider />
            <Box p={1} display="flex" flexWrap="no-wrap" my={-1}>
              <Typography variant="overline" color="textSecondary">
                Vocabulary
              </Typography>
              <Box flexGrow={1} />
              <Typography variant="overline" color="textSecondary">
                {skillLevels.vocabulary}%
              </Typography>
            </Box>
            <Divider />
            <Box p={1} display="flex" flexWrap="no-wrap" my={-1}>
              <Typography variant="overline" color="textSecondary">
                Conversational
              </Typography>
              <Box flexGrow={1} />
              <Typography variant="overline" color="textSecondary">
                {skillLevels.conversational}%
              </Typography>
            </Box>
            <Divider />
            <Box
              p={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={3}
            >
              <Typography variant="overline" color="textSecondary">
                Lifetime
              </Typography>
            </Box>
            <Box p={1} display="flex" flexWrap="no-wrap" my={-2} mx={2}>
              <Typography variant="overline" color="textSecondary">
                Exams:
              </Typography>
              <Box flexGrow={1} />
              <Typography variant="overline" color="textSecondary">
                {lifeTimeExams}
              </Typography>
            </Box>
            <Box p={1} display="flex" flexWrap="no-wrap" my={-2} mx={2}>
              <Typography variant="overline" color="textSecondary">
                Correct:
              </Typography>
              <Box flexGrow={1} />
              <Typography variant="overline" color="textSecondary">
                45, 122
              </Typography>
            </Box>
            <Box p={1} display="flex" flexWrap="no-wrap" my={-2} mx={2}>
              <Typography variant="overline" color="textSecondary">
                Questions:
              </Typography>
              <Box flexGrow={1} />
              <Typography variant="overline" color="textSecondary">
                54, 111
              </Typography>
            </Box>
            <Box
              p={1}
              display="flex"
              flexWrap="no-wrap"
              justifyContent="center"
              mt={2}
              my={-1}
            >
              <Typography variant="overline" color="textSecondary">
                Grade:
              </Typography>
              <Typography
                variant="h3"
                color="textSecondary"
                style={{ marginLeft: '8px' }}
              >
                B
              </Typography>
            </Box>
            <Divider />
          </Collapse>
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
