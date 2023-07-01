import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDuO6KCr24YuK3Zy9gZxFhVIwgN07MOYxw",
  authDomain: "reactfirebase-8577d.firebaseapp.com",
  databaseURL: "https://reactfirebase-8577d-default-rtdb.firebaseio.com",
  projectId: "reactfirebase-8577d",
  storageBucket: "reactfirebase-8577d.appspot.com",
  messagingSenderId: "157039940745",
  appId: "1:157039940745:web:f3b966c514d7c52362a258",
  measurementId: "G-V09XJ4DQE4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getProduction(db) {
  const ProductionCol = collection(db, "Product");
  const ProductionSnapshot = await getDocs(ProductionCol);
  const ProductionList = ProductionSnapshot.docs.map((doc) => doc.data());
  return ProductionList;
}

let Captain = await getProduction(db);

export default Captain;
