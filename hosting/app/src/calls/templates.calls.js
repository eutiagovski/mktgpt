import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../configs/firebase.config";

const templatesRef = collection(db, "templates");

export const getTemplates = async () => {
  const docs = [];

  const querySnapshot = await getDocs(templatesRef);
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });

  

  return docs;
};
