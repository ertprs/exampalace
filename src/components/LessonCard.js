import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import numeral from 'numeral';
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  Link,
  Button,
  LinearProgress,
  Tooltip,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Users as UsersIcon } from 'react-feather';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    height: 200,
    backgroundColor: theme.palette.background.dark
  },
  likedButton: {
    color: colors.red[600]
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  },
  membersIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
  }
}));

const ProjectCard = ({ className, project, ...rest }) => {
  const classes = useStyles();
  const [isLiked, setLiked] = useState(project.isLiked);
  const [likesCount, setLikesCount] = useState(project.likesCount);

  const handleLike = () => {
    setLiked(true);
    setLikesCount(prevLikes => prevLikes + 1);
  };

  const handleUnlike = () => {
    setLiked(false);
    setLikesCount(prevLikes => prevLikes - 1);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box p={3}>
        <CardMedia className={classes.image} image={project.image} />
        <Box mt={1}>
          <Typography color="textPrimary" variant="h4">
            {project.title}
          </Typography>
        </Box>
      </Box>
      <Box pb={2} px={3}>
        <Typography color="textSecondary" variant="body2">
          {project.caption}
        </Typography>
      </Box>
      <Box py={2} px={3}>
        <Grid alignItems="center" container justify="space-between" spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            {/* <Typography variant="h5" color="textPrimary">
              Progress
            </Typography> */}
            <Box display="flex" alignItems="center" flexWrap="wrap" mt={1}>
              <Typography variant="h5" color="textSecondary">
                50%
              </Typography>
              <LinearProgress
                className={classes.progress}
                value={50}
                color="secondary"
                variant="determinate"
              />
            </Box>
          </Grid>
          {/* <Grid item>
            <Typography variant="h5" color="textPrimary">
              {project.location}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Location
            </Typography>
          </Grid> */}
          {/* <Grid item>
            <Typography variant="h5" color="textPrimary">
              {project.type}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Type
            </Typography>
          </Grid> */}
        </Grid>
      </Box>
      <Divider />
      <Box py={2} pl={2} pr={3} display="flex" alignItems="center">
        {/* {isLiked ? (
          <Tooltip title="Unlike">
            <IconButton className={classes.likedButton} onClick={handleUnlike}>
              <FavoriteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Like">
            <IconButton onClick={handleLike}>
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )} */}

        {/* <Rating value={project.rating} size="small" readOnly /> */}
        <Box flexGrow={1} />
        <Link
          style={{ textDecoration: 'none' }}
          component={RouterLink}
          to="/app/lessons/1"
        >
        <Button color="secondary" variant="outlined" size="small">
          Start
        </Button>
        </Link>

      </Box>
    </Card>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default ProjectCard;
