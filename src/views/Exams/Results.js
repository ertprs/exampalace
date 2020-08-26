import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Grid,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  makeStyles
} from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton, Pagination } from '@material-ui/lab';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ProjectCard from 'src/components/ProjectCard';
import ExamCard from './ExamCard';
import exams from 'src/_data/Exams';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  },
  sortButton: {
    textTransform: 'none',
    letterSpacing: 0,
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, projects, filters, ...rest }) => {
  const classes = useStyles();
  const sortRef = useRef(null);
  const [openSort, setOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Most popular');
  const [mode, setMode] = useState('grid');
  const [sortedExams, setSortedExams] = useState(exams);

  const handleSortOpen = () => {
    setOpenSort(true);
  };

  const handleSortClose = () => {
    setOpenSort(false);
  };

  const handleSortSelect = value => {
    setSelectedSort(value);
    setOpenSort(false);
  };

  const handleModeChange = (event, value) => {
    setMode(value);
  };

  useEffect(() => {
    if (filters.length === 0) {
      setSortedExams(exams);
    } else {
      let newExamList = [];
      filters.forEach(filter => {
        exams.filter(exam => {
          if (exam.type === filter) {
            newExamList.push(exam);
          }
        });
      });
      setSortedExams(newExamList);
    }
    console.log('filtersChanged');
  }, [filters]);

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        mb={2}
      >
        <Typography className={classes.title} variant="h5" color="textPrimary">
          {sortedExams.length} Results
        </Typography>
        <Box display="flex" alignItems="center">
          <Button
            className={classes.sortButton}
            onClick={handleSortOpen}
            ref={sortRef}
          >
            {selectedSort}
            <ArrowDropDownIcon />
          </Button>
        </Box>
      </Box>
      <Grid container spacing={1}>
        {sortedExams.map(project => (
          <Grid
            item
            key={project.title}
            md={mode === 'grid' ? 4 : 12}
            sm={mode === 'grid' ? 6 : 12}
            xs={12}
          >
            <ExamCard project={project} />
          </Grid>
        ))}
      </Grid>
      <Box mt={2} display="flex" justifyContent="center">
        <Pagination count={3} />
      </Box>
      <Menu
        anchorEl={sortRef.current}
        onClose={handleSortClose}
        open={openSort}
        elevation={1}
      >
        {[
          'Most recent',
          'Popular',
          'Highest Level',
          'Lowest Level',
          'Incomplete'
        ].map(option => (
          <MenuItem key={option} onClick={() => handleSortSelect(option)}>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.array.isRequired
};

export default Results;
