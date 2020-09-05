import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Collapse,
  Button,
  Grid,
  Link,
  SvgIcon,
  Typography,
  makeStyles,
  Card,
  CardContent
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SearchIcon from '@material-ui/icons/Search';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { PlusCircle as PlusIcon } from 'react-feather';
import Filter from './Filter';
import { Theme } from '@fullcalendar/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '48px'
  },
  cardcontent: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 8,
    '&:last-child': {
      paddingBottom: 8
    }
  }
}));

const Header = ({ className, setExamFilters, ...rest }) => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.cardcontent}>
          <Typography variant="h2" color="textPrimary">
            Exams 
          </Typography>
          <Button onClick={() => handleOpenDrawer()}>
            {drawerOpen ? <ExpandLessIcon /> : <SearchIcon />}
          </Button>
        </CardContent>
      </Card>
      <Collapse in={drawerOpen}>
        <Filter filters={setExamFilters} />
      </Collapse>
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
