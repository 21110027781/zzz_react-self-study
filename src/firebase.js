import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBTmiHFfti28-Kg4dnHXAK0VBS2fKzief4",
    authDomain: "tiki-demo-b774f.firebaseapp.com",
    databaseURL: "https://tiki-demo-b774f.firebaseio.com",
    projectId: "tiki-demo-b774f",
    storageBucket: "tiki-demo-b774f.appspot.com",
    messagingSenderId: "847965250045"
};
firebase.initializeApp(config);
export default firebase;