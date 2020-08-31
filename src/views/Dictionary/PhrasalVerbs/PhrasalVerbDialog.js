import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Typography } from '@material-ui/core';

export default function ScrollDialog({ verb }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <IconButton aria-label="more" onClick={handleClickOpen('paper')}>
        <HelpOutlineIcon />
      </IconButton>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{verb.verb}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          {verb.definitions.map((definition, i) => (
            <Box key={'definition-' + i}>
              <Typography variant="h4" color="textPrimary">
                {i + 1}. {definition.text}
              </Typography>
              <Box width="250px" ml={2}>
                <img
                  src={definition.image}
                  alt={definition.text}
                  style={{ width: '100%', borderRadius: '10px' }}
                />
              </Box>
              {definition.sentences.map((sentence, i) => (
                <Box key={'sentence-' + i} ml={2}>
                  <Box>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{ fontStyle: 'italic', fontSize: '14px' }}
                    >
                      {sentence.en}
                    </Typography>
                  </Box>
                  <Box key={'sentence-' + i}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{ fontStyle: 'italic', fontSize: '12px' }}
                    >
                      ({sentence.es})
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
