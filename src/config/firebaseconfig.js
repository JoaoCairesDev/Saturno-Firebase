import {firebase} from '@react-native-firebase/firestore';
import 'firebase/storage';
import {initializeApp} from '@firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBdMhG5sb2WHrm5643RHRMTYQLJuIXU_j8',
  authDomain: 'marrecosdesaturno.firebaseapp.com',
  projectId: 'marrecosdesaturno',
  storageBucket: 'marrecosdesaturno.appspot.com',
  messagingSenderId: '83075658121',
  appId: '1:83075658121:web:47fb3ca205fa30c9b43158',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
