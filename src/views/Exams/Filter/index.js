import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box, Card, Input, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MultiSelect from './MultiSelect';

const selectOptions = [
  {
    label: 'Type',
    options: ['Reading', 'Writing', 'Grammar', 'Vocabulary', 'Spelling']
  },
  {
    label: 'Level',
    options: ['Novice', 'Intermediate', 'Expert']
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1)
  },
  searchInput: {
    marginLeft: theme.spacing(2)
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

const Filter = ({ className, filters, ...rest }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);

  const handleInputChange = event => {
    event.persist();
    setInputValue(event.target.value);
  };

  const handleInputKeyup = event => {
    event.persist();

    if (event.keyCode === 13 && inputValue) {
      if (!chips.includes(inputValue)) {
        setChips(prevChips => [...prevChips, inputValue]);
        setInputValue('');
      }
    }
  };

  const handleChipDelete = chip => {
    setChips(prevChips => prevChips.filter(prevChip => chip !== prevChip));
  };

  const handleMultiSelectChange = value => {
    setChips(value);
  };

  useEffect(() => {
    filters(chips);
  }, [chips]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box p={2} display="flex" alignItems="center">
        <SearchIcon />
        <Input
          disableUnderline
          fullWidth
          className={classes.searchInput}
          onChange={handleInputChange}
          onKeyUp={handleInputKeyup}
          placeholder="Search Exams"
          value={inputValue}
        />
        <Box display="flex" alignItems="center" flexWrap="no-wrap">
          {selectOptions.map(option => (
            <MultiSelect
              key={option.label}
              label={option.label}
              onChange={handleMultiSelectChange}
              options={option.options}
              value={chips}
            />
          ))}
          <Box flexGrow={1} />
          {/* <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="In network"
        /> */}
        </Box>
      </Box>
    </Card>
  );
};

Filter.propTypes = {
  className: PropTypes.string
};

export default Filter;
