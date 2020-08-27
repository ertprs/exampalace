import firebase from 'firebase/app';
import 'firebase/firestore';

var firestore = firebase.firestore();

export const read = async collection => {
  const docRef = firestore.doc('users/yIQQ725hqDo6JJIvG3Un');
  docRef.get().then(function(doc) {
    if (doc && doc.exists) {
      const myData = doc.data();
      // console.log(myData);
    }
  });
};

export const write = () => {
  const docRef = firestore.doc('users/yIQQ725hqDo6JJIvG3Un');
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
  const docRef = firestore.doc('users/yIQQ725hqDo6JJIvG3Un');
  //any time the data changes,this will execute
  docRef.onSnapshot(function (doc) {
    if (doc && doc.exists) {
      // console.log('Data changed');
    }
  })
}
