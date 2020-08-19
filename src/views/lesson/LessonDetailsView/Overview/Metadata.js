import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Link,
  List,
  ListItem,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    paddingTop: 0
  },
  listItem: {
    padding: theme.spacing(2, 0),
    justifyContent: 'space-between'
  }
}));

const Metadata = ({ className, project, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        title={
          <Typography display="block" variant="overline" color="textSecondary">
            Report card
          </Typography>
        }
      />
      <CardContent className={classes.content}>
        <List>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2" color="textPrimary">
              Grade
            </Typography>
            <Typography variant="h6" color="textSecondary">
              A+ (100%)
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2" color="textPrimary">
              Lessons completed
            </Typography>
            <Typography variant="h6" color="textSecondary">
              8 / 12
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem} disableGutters divider>
            <Typography variant="subtitle2" color="textPrimary">
              Exams taken
            </Typography>
            <Typography variant="h6" color="textSecondary">
              8 / 12
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

Metadata.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default Metadata;
