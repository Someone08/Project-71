import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyC76fh9PaceOmTC5HQrVBiUUG7HiIJ4ykE",
    authDomain: "wkhjdjw-cd6e2.firebaseapp.com",
    databaseURL: "https://wkhjdjw-cd6e2-default-rtdb.firebaseio.com",
    projectId: "wkhjdjw-cd6e2",
    storageBucket: "wkhjdjw-cd6e2.appspot.com",
    messagingSenderId: "624105489670",
    appId: "1:624105489670:web:f7bbc170ac1c5a6f64ca87"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


