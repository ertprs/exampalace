import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
  SvgIcon,
  Typography,
  makeStyles,
  Card,
  CardContent
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { PlusCircle as PlusIcon } from 'react-feather';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '8px'
  },
  icon: {
    color: theme.palette.primary.main
  },
  cardcontent: {
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    '&:last-child': {
      paddingBottom: 8
    }
  },
  coloredText: {
    color: theme.palette.primary.main,
    fontStyle: 'italic'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardcontent}>
        <InfoIcon
          className={classes.icon}
          style={{
            marginRight: '8px'
          }}
        />
        <Typography variant="body1" color="textSecondary">
          Los <span className={classes.coloredText}>verbos compuestos</span> ó{' '}
          <span className={classes.coloredText}>phrasal verbs</span> son verbos
          formados por dos palabras, un adverbio y una preposición que cuando se
          usan juntos adquieren diferentes significados.
        </Typography>
      </CardContent>
    </Card>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
