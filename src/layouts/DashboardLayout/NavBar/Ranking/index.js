import React, { useState, useEffect } from 'react';
import { Box, Collapse, Divider, Button, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';
const Ranking = () => {
  const [collapseIn, setCollapseIn] = useState(false);

  const handleOnClick = () => {
    setCollapseIn(!collapseIn);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box p={1} flexGrow={1}>
        <Button onClick={() => handleOnClick()} style={{ width: '100%' }}>
          <Box display="flex" flexGrow={1} alignItems="center">
            <FormatListNumberedOutlinedIcon />
            <Typography
              variant="overline"
              color="textSecondary"
              style={{ marginLeft: '8px' }}
            >
              Rankings
            </Typography>
            <Box flexGrow={1} />
            {collapseIn === true ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Button>
      </Box>
      <Divider />
      <Collapse in={collapseIn}>
        <Box display="flex" justifyContent="space-between" mx={3} my={1}>
          <Typography variant="overline" color="textSecondary">
            1. TEACHER CARLOS
          </Typography>
          <Typography variant="overline" color="textSecondary">
            1,900,000
          </Typography>
        </Box>
        <Divider />
      </Collapse>
    </Box>
  );
};

export default Ranking;
