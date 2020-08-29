import firebase from 'firebase/app';
import 'firebase/firestore';

var db = firebase.firestore();

export const read = async collection => {
  const docRef = db.doc('users/yIQQ725hqDo6JJIvG3Un');
  docRef.get().then(function(doc) {
    if (doc && doc.exists) {
      const myData = doc.data();
      // console.log(myData);
    }
  });
};

export const write = () => {
  const docRef = db.doc('users/yIQQ725hqDo6JJIvG3Un');
  docRef
    .set({
      email: 'another@gmail.com',
      level: 1
    })
    .then(function() {
      // console.log('email changed');
    })
    .catch(function(error) {
      // console.log('ERROR');
      // console.log(error);
    });
};

export const getRealTimeUpdates = () => {
  const docRef = db.doc('users/yIQQ725hqDo6JJIvG3Un');
  //any time the data changes,this will execute
  docRef.onSnapshot(function(doc) {
    if (doc && doc.exists) {
      // console.log('Data changed');
    }
  });
};

export const createUser = (userName, email) => {
  var docRef = db.collection('users').doc(email);

  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log('Document data:', doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch(function(error) {
      console.log('Error getting document:', error);
    });
};

export const getUserData = async email => {
  var docRef = db.collection('users').doc(email);
  const docData = await docRef.get();
  if (docData.exists) {
    return docData.data().examsTaken;
  } else {
    db.collection('users')
      .doc(email)
      .set({
        created: firebase.firestore.FieldValue.serverTimestamp(),
        premium: false,
        examsTaken: [],
        skills: {
          reading: 0,
          grammar: 0,
          spelling: 0,
          conversational: 0,
          vocabulary: 0,
          writing: 0
        }
      });
    var newUserRef = db.collection('users').doc(email);
    const newUser = await newUserRef.get();
    return newUser.data();
  }
};

export const firebaseGetUser = userId => {
  return db
    .collection('users')
    .doc(userId)
    .get();
};

export const firebaseGetUserSkills = async email => {
  var newUserRef = db.collection('users').doc(email);
  const newUser = await newUserRef.get();
  return newUser.data().skills;
};

export const firebaseGetUserExams = async email => {
  var newUserRef = db.collection('users').doc(email);
  const newUser = await newUserRef.get();
  console.log(newUser.data())
  return newUser.data().examsTaken.length;
};
