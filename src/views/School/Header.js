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

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '48px'
  },
  cardcontent: {
    padding: 12,
    '&:last-child': {
      paddingBottom: 12
    }
  }
}));

const Header = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      alignItems="center"
      container
      justify="space-between"
      spacing={1}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid xs={12} md={12} lg={12} item>
        <Card>
          <CardContent className={classes.cardcontent}>
            <Typography variant="h2" color="textPrimary">
              School
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
