import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Breadcrumbs,
  Button,
  Grid,
  Box,
  SvgIcon,
  Typography,
  makeStyles,
  Card,
  CardContent
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { PlusCircle as PlusIcon } from 'react-feather';
import './card.scss';

const verbs = [
  'Get through',
  'Get through',
  'Get through',
  'Get through',
  'Get through',
  'Get through',
  'Get through',
  'Get through',
  'Get through',
  'Get through',
  'Get through',
  'Get through',
  'Get through',
  'Get through',
  'Get through'
];

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '-8px',
    marginRight: '-8px',
    display: 'flex',
    marginTop: '8px',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  cardcontent: {
    padding: 8,
    '&:last-child': {
      paddingBottom: 8
    }
  },
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {verbs.map((verb, i) => (
        <Box
        style= {{
          marginLeft: i === 0 ? '0' : '8px'
        }}
        key={verb}
        >
          <div className="flipcard">
            <div className="flipcard__side flipcard__side--front">
              <Card className={classes.card}>
                <Typography variant="h2" color="textPrimary">
                  Get through
                </Typography>
              </Card>
            </div>
            <div className="flipcard__side flipcard__side--back">
              <Card className={classes.card}>
                <Typography variant="h2" color="textPrimary">
                  Hacer entender
                </Typography>
              </Card>
            </div>
          </div>
        </Box>
      ))}
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
