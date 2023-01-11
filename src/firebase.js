// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA2MHJktP1UwSFiKPECVLMQiepVlWjU7-w',
	authDomain: 'sveltetest-1825f.firebaseapp.com',
	projectId: 'sveltetest-1825f',
	storageBucket: 'sveltetest-1825f.appspot.com',
	messagingSenderId: '107824135123',
	appId: '1:107824135123:web:81bc96b6ebbd78d29ccd26',
	measurementId: 'G-0QFT0NDN1G'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
