import React, { useEffect } from 'react';
import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Divider, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'src/store';
import {
  getThread,
  markThreadAsSeen,
  resetActiveThread,
  getParticipants,
  addRecipient,
  removeRecipient
} from 'src/slices/chat';
import ComposeHeader from './ComposeHeader';
import DetailHeader from './DetailHeader';
import MessageList from './MessageList';
import MessageComposer from './MessageComposer';

const dummyThreads = [
  {
    id: '5e867eb9de721aecaccf4f7b',
    messages: [
      {
        id: '5e867f0a5bc0ff2bfa07bfa6',
        attachments: [],
        body: 'Good morning! How was your trip to México?',
        contentType: 'text',
        createdAt: moment()
          .subtract(10, 'hours')
          .toDate()
          .getTime(),
        senderId: '5e86805e2bafd54f66cc95c3'
      },
      {
        id: '5e867f167d5f78109ae9f2a4',
        attachments: [],
        body:
          "Good morning to you too! My trip was amazing! I can't wait to tell you. How was work this week?",
        contentType: 'text',
        createdAt: moment()
          .subtract(2, 'hours')
          .toDate()
          .getTime(),
        senderId: '5e86809283e28b96d2d38537'
      },
      {
        id: '5e867f1c9ca72084693528f4',
        attachments: [],
        body:
          "Work was great actually! I'm busy right now actually, so I'll message you later!",
        contentType: 'text',
        createdAt: moment()
          .subtract(5, 'minutes')
          .toDate()
          .getTime(),
        senderId: '5e86805e2bafd54f66cc95c3'
      },
      {
        id: '5e867f22fd2e27a09849b4db',
        attachments: [],
        body:
          "Sure! No problem. Talk soon!",
        contentType: 'text',
        createdAt: moment()
          .subtract(3, 'minutes')
          .toDate()
          .getTime(),
        senderId: '5e86809283e28b96d2d38537'
      },
      {
        id: '5e867f28a34d45ac6eb5c41f',
        attachments: [],
        body: "Good afternoon! I'm done with work now! How was your day?",
        contentType: 'text',
        createdAt: moment()
          .subtract(1, 'minute')
          .toDate()
          .getTime(),
        senderId: '5e86805e2bafd54f66cc95c3'
      },
      {
        id: '5e867f22fd2e27a09849b4db',
        attachments: [],
        body:
          "It was pretty good, thanks. Are you home now?",
        contentType: 'text',
        createdAt: moment()
          .subtract(3, 'minutes')
          .toDate()
          .getTime(),
        senderId: '5e86809283e28b96d2d38537'
      },
    ],
    participants: [
      {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/images/avatars/avatar_6.png',
        name: 'Katarina Smith',
        username: 'katarina.smith'
      },
      {
        id: '5e86805e2bafd54f66cc95c3',
        avatar: '/static/images/avatars/avatar_7.png',
        name: 'Adam Denisov',
        username: 'adam.denisov'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 2
  },
  {
    id: '5e867fa7082c3c5921403a26',
    messages: [
      {
        id: '5e867fc180837d901bd9bca1',
        attachments: [],
        body: 'Hey, would you like to collaborate?',
        contentType: 'text',
        createdAt: moment()
          .subtract(6, 'minutes')
          .toDate()
          .getTime(),
        senderId: '5e8680e60cba5019c5ca6fda'
      },
      {
        id: '5e8d6fb695df7971237fc173',
        attachments: [],
        body: 'Hi, Merrile!',
        contentType: 'text',
        createdAt: moment()
          .subtract(5, 'minutes')
          .toDate()
          .getTime(),
        senderId: '5e86809283e28b96d2d38537'
      },
      {
        id: '58825a290eb4d4271a54f188',
        attachments: [],
        body: 'Hello everyone 😀',
        contentType: 'text',
        createdAt: moment()
          .subtract(2, 'minutes')
          .toDate()
          .getTime(),
        senderId: '5e8891ab188cd2855e6029b7'
      }
    ],
    participants: [
      {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/images/avatars/avatar_6.png',
        name: 'Katarina Smith',
        username: 'katarina.smith'
      },
      {
        id: '5e8680e60cba5019c5ca6fda',
        avatar: '/static/images/avatars/avatar_12.png',
        name: 'Merrile Burgett',
        username: 'merrile.burgett'
      },
      {
        id: '5e8891ab188cd2855e6029b7',
        avatar: '/static/images/avatars/avatar_1.png',
        name: 'Cooper Murray',
        username: 'cooper.murray'
      }
    ],
    type: 'GROUP',
    unreadCount: 0
  }
];

const threadSelector = state => {
  const { threads, activeThreadId } = state.chat;
  const thread = threads.byId[activeThreadId];

  if (thread) {
    return thread;
  }

  return {
    id: null,
    messages: [],
    participants: [],
    unreadMessages: 0
  };
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    height: '300px'
  }
}));

const Thread = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { threadKey } = useParams();
  const { activeThreadId, participants, recipients } = useSelector(
    state => state.chat
  );
  const thread = useSelector(state => threadSelector(state));

  // In our case there two possible routes
  // one that contains chat/new and one with a chat/:threadKey
  // if threadKey does not exist, it means that the chat is in compose mode
  const mode = threadKey ? 'DETAIL' : 'COMPOSE';

  const handleAddRecipient = recipient => {
    dispatch(addRecipient(recipient));
  };

  const handleRemoveRecipient = recipientId => {
    dispatch(removeRecipient(recipientId));
  };

  const handleSendMessage = async value => {
    try {
      // Handle send message
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getDetails = async () => {
      dispatch(getParticipants(threadKey));

      try {
        await dispatch(getThread(threadKey));
      } catch (err) {
        // If thread key is not a valid key (thread id or username)
        // the server throws an error, this means that the user tried a shady route
        // and we redirect him on the compose route
        console.error(err);
        history.push('/app/chat/new');
      }
    };

    // If path contains a thread key we do the following:
    // 1) Load the thread participants based on the key
    // 2) Try to find a related thread based on the key, it might not exist if it is a new tread
    if (threadKey) {
      getDetails();
    } else {
      // If no thread key specifid, but an active thread id exists in the
      // store, reset that key. This means that the user navigated from details mode to compose
      if (activeThreadId) {
        dispatch(resetActiveThread());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadKey]);

  useEffect(() => {
    if (activeThreadId) {
      // Maybe we should also check if active thread
      // has unread messages before triggering this
      dispatch(markThreadAsSeen(activeThreadId));
    }
  }, [dispatch, activeThreadId]);

  return (
    <div className={classes.root}>
      <Box flexGrow={1} overflow="hidden">
        <MessageList thread={dummyThreads[0]} />
      </Box>
      <Divider />
      {/* <MessageComposer
        disabled
        onSend={handleSendMessage}
      /> */}
    </div>
  );
};

export default Thread;
