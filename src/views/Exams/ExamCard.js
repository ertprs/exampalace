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
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ExamAcceptDialog from './ExamAcceptDialog';

const useStyles = makeStyles(theme => ({
  root: {},
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
  },
  image: {
    width: '100%',
    borderRadius: '5px',
    height: '190px'
  }
}));

const ProjectCard = ({ className, project: exam, ...rest }) => {
  const classes = useStyles();
  const [isLiked, setLiked] = useState(exam.isLiked);
  const [likesCount, setLikesCount] = useState(exam.likesCount);

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
      <Box p={1}>
        {/* <CardMedia className={classes.image} image={project.image} /> */}
        <Box mt={1}>
          <Typography color="textPrimary" variant="h4">
            {exam.title}
          </Typography>
          <Typography color="textSecondary" variant="overline">
            {exam.type}
          </Typography>
        </Box>
      </Box>
      <Box pb={1} px={2}>
        <Typography color="textSecondary" variant="body2">
          {exam.caption}
        </Typography>
      </Box>
      <Box pb={1} px={2}>
        <img src={exam.image} alt={exam.title} className={classes.image} />
      </Box>
      <Box pb={1} px={2}>
        <Typography color="textSecondary" variant="body2">
          {exam.description}
        </Typography>
      </Box>
      <Divider />
      <Box py={1} pl={1} pr={2} display="flex" alignItems="center">
        <Rating
          icon={<FitnessCenterIcon />}
          value={exam.difficulty}
          size="small"
          max={3}
          readOnly
        />
        <Box flexGrow={1} />
        <ExamAcceptDialog exam={exam} />
      </Box>
    </Card>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default ProjectCard;
