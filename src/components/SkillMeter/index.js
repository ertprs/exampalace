import React from 'react';
import {
  LinearProgress,
  Typography,
  Box,
  Divider,
  makeStyles
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {},
  progress: {
    marginTop: '8px',
    marginRight: '4px',
    marginLeft: '4px',
    flexGrow: 1,
    height: '8px',
    borderRadius: '10px'
  }
}));

const SkillMeter = ({ skill }) => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box mt={-2} mb={-1}>
          <Box display="flex" mb={-2}>
            <Typography variant="overline" color="textSecondary">
              {skill}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" flexWrap="wrap" ml={-2}>
            <LinearProgress
              className={classes.progress}
              value={50}
              color="secondary"
              variant="determinate"
            />
            <Typography
              variant="h6"
              color="textSecondary"
              style={{
                marginTop: '4px'
              }}
            >
              14
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default SkillMeter;
