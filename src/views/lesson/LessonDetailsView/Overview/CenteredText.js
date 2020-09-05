import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  box: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  },
  marquee: {
    width: '100%'
  }
}));

const CenteredText = ({ variant, text, marquee, list }) => {
  const classes = useStyles();
  if (marquee === undefined || marquee === false) {
    return (
      <Box className={classes.box}>
        <Typography variant={variant} color="textPrimary">
          {text}
        </Typography>
      </Box>
    );
  } else {
    return (
      <Box className={classes.box}>
        <marquee behavior="scroll" direction="left" scrollamount={8}>
          <Typography variant={variant} color="textPrimary">
            <ul className={classes.marquee}>
              {list.map((text, i) =>
                i === 0 ? (
                  <li
                    key={'text' + i}
                    style={{ display: 'inline-block', marginLeft: '0px' }}
                  >
                    {text}
                  </li>
                ) : (
                  <li
                    key={'text' + i}
                    style={{ display: 'inline-block', marginLeft: '320px' }}
                  >
                    {text}
                  </li>
                )
              )}
            </ul>
          </Typography>
        </marquee>
      </Box>
    );
  }
};

export default CenteredText;
