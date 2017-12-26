import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCiSTm-UqBMBNarmR9q2D2lYSQULqU-tEo',
  authDomain: 'fir-react-a992f.firebaseapp.com',
  databaseURL: 'https://fir-react-a992f.firebaseio.com',
  projectId: 'fir-react-a992f',
  storageBucket: 'fir-react-a992f.appspot.com',
  messagingSenderId: '509036644016',
};

firebase.initializeApp(config);

export default firebase;
