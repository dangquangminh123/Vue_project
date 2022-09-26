import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyATUXlQp_W2CE_AIZ6_orYuGzqiwnTLT84",
  authDomain: "vue3firebase9-82bfb.firebaseapp.com",
  projectId: "vue3firebase9-82bfb",
  storageBucket: "vue3firebase9-82bfb.appspot.com",
  messagingSenderId: "1017739510862",
  appId: "1:1017739510862:web:e4f0a8d9c4a1d37a082f1f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productsColRef = collection(db, "products");
const auth = getAuth(app)
export {auth, productsColRef };