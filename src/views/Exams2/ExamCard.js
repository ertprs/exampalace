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
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
const useStyles = makeStyles(theme => ({
  root: {},
  likedButton: {
    color: colors.red[600]
  },
  imageContainer: {
    overflow: 'hidden',
    height: '210px',
    position: 'relative'
  },
  imageTitleBg: {
    zIndex: 99,
    background: 'rgb(0,0,0)',
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(255,255,255,0) 100%)',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '30px'
  },
  imageTypeBg: {
    zIndex: 99,
    background: 'rgb(0,0,0)',
    background:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.9) 100%)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '30px'
  },
  imageTitle: {
    zIndex: 99,
    position: 'absolute',
    top: 3,
    left: 3
  },
  imageTrophy: {
    zIndex: 99,
    position: 'absolute',
    top: 3,
    right: 3
  },
  inactiveTrophy: {},
  imageType: {
    zIndex: 99,
    position: 'absolute',
    bottom: 1,
    right: 3
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
    '&:hover': {
      transform: 'scale(1.2)'
    },
    transition: 'all 0.3s ease-in-out'
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
      <Box className={classes.imageContainer} mb={1}>
        <div className={classes.imageTitleBg}> </div>
        <Typography
          color="textPrimary"
          variant="h4"
          className={classes.imageTitle}
        >
          {exam.title}
        </Typography>
        <EmojiEventsIcon
          className={classes.imageTrophy}
          // style={{ color: 'rgba(100,100,100,0.5)', fontSize: 40 }}
          style={{ color: "#ffb400", fontSize: 32 }}
        />
        <img src={exam.image} alt={exam.title} className={classes.image} />
        <div className={classes.imageTypeBg}> </div>
        <Typography
          color="textSecondary"
          variant="overline"
          className={classes.imageType}
        >
          {exam.type}
        </Typography>
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
