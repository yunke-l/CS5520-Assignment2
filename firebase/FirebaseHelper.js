import { collection, addDoc, deleteDoc, doc, setDoc} from "firebase/firestore";
import { database } from "./FirebaseSetup";

export async function writeToDB(entry) {
  try {
    const docRef = await addDoc(collection(database, "Expenses"), entry);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(id) {
  try {
    await deleteDoc(doc(database, "Expenses", id));
    console.log("Document successfully deleted!");
  } catch (err) {
    console.log(err);
  }
}

export async function editInDB(id, entry) {
  try {
    await setDoc(doc(database, "Expenses", id), entry, { merge: true });
    console.log("Document successfully updated!");
  } catch (err) {
    console.log(err);
  }
}
