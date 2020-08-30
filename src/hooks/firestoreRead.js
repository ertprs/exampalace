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
  var userRef = db.collection('users').doc(email);
  const user = await userRef.get();
  const exams = user.data().examsTaken;
  let gold = 0;
  let silver = 0;
  let bronze = 0;
  exams.forEach((exam, i) => {
    gold += exam.bestScore === 100 ? 1 : 0;
    silver += exam.bestScore >= 90 && exam.bestScore < 100 ? 1 : 0;
    bronze += exam.bestScore < 90 && exam.bestScore >= 80 ? 1 : 0;
  });

  let totalTrophies = gold + silver * 0.9 + bronze * 0.8;

  let finalScore = totalTrophies / exams.length;

  console.log(finalScore);

  let grade = 'F';

  if (finalScore === 1) {
    grade = 'A+';
  }
  if (finalScore < 1 && finalScore > .9) {
    grade = 'A';
  }
  if (finalScore < .9 && finalScore > .88) {
    grade = 'B+';
  }
  if (finalScore < .88 && finalScore > .8) {
    grade = 'B';
  }
  if (finalScore < .8 && finalScore > .7) {
    grade = 'C';
  }
  if (finalScore < .7 && finalScore > .6) {
    grade = 'D';
  }

  return {
    exams: exams.length,
    gold: gold,
    silver: silver,
    bronze: bronze,
    grade: grade
  };
};
