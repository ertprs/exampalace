import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Breadcrumbs,
  IconButton,
  Grid,
  Box,
  SvgIcon,
  Typography,
  makeStyles,
  Card,
  CardContent
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { PlusCircle as PlusIcon } from 'react-feather';
import './card.scss';
import PhrasalVerbDialog from './PhrasalVerbDialog';
import PhrasalVerbs from './_PhrasalVerbList'


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
    padding: '80px 0px 16px 0px',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {PhrasalVerbs.map((verb, i) => (
        <Box
          style={{
            marginLeft: i === 0 ? '0' : '8px'
          }}
          key={verb.verb}
        >
          <div className="flipcard">
            <div className="flipcard__side flipcard__side--front">
              <Card className={classes.card}>
                <Typography variant="h2" color="textPrimary">
                  {verb.verb}
                </Typography>
                <PhrasalVerbDialog verb={verb} />
              </Card>
            </div>
            {/* <div className="flipcard__side flipcard__side--back">
              <Card className={classes.card}>
                <Typography variant="h2" color="textPrimary">
                  Hacer entender
                </Typography>
             
              </Card>
            </div> */}
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
