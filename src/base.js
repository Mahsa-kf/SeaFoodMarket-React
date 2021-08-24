import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyCvJgpwwsetKCbcaIQJaBsU8XOaNbQA5Yg",
    authDomain: "catch-of-the-day-mahsa-mkf.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-mahsa-mkf-default-rtdb.firebaseio.com",
   
  });

const base = Rebase.createClass(firebaseApp.database());


//This is a named export
export { firebaseApp};

// this is a default export
export default base;