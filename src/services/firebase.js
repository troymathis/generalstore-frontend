import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBDxH5AFJhYFWAURoF2tHus5UHdR6PlXyo',
    authDomain: 'project3-general-store.firebaseapp.com',
    projectId: 'project3-general-store',
    storageBucket: 'project3-general-store.appspot.com',
    messagingSenderId: '458462358980',
    appId: '1:458462358980:web:92abfcf8e5c8abe5cdc891'
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function login() {
    const user = auth.signInWithPopup(provider);
    return user
}

function logout() {
    return auth.signOut();
}

export { auth, login, logout };