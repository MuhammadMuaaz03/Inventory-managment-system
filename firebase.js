import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBrgDZoiwuBFHt-UQaNi5BQ_EtilvK5eo",
  authDomain: "inventory-management-app-6d22c.firebaseapp.com",
  projectId: "inventory-management-app-6d22c",
  storageBucket: "inventory-management-app-6d22c.appspot.com",
  messagingSenderId: "246715154610",
  appId: "1:246715154610:web:ed4aa602e60937bf8709ab",
  measurementId: "G-5XBMZRBLTB"
 };

 
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
