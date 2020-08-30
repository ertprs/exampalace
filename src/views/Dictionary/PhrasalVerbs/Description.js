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
const useStyles = makeStyles(() => ({
  root: {
    marginTop: '8px'
  },
  cardcontent: {
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    '&:last-child': {
      paddingBottom: 8
    }
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardcontent}>
        <InfoIcon
          style={{
            marginRight: '8px'
          }}
        />
        <Typography variant="body1" color="textPrimary">
          Los verbos compuestos en inglés, también conocidos como phrasal verbs,
          son verbos formados por dos palabras, un adverbio y una preposición
          que cuando se usan juntos adquieren diferentes significados.
        </Typography>
      </CardContent>
    </Card>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
