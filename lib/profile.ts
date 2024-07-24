import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const usersCollection = "users";

export const saveProfile = async (userId:any, profileData:any) => {
  try {
    const userDoc = doc(db, usersCollection, userId);
    await setDoc(userDoc, profileData, { merge: true });
  } catch (error) {
    console.error("Error saving profile:", error);
    throw error;
  }
};

export const getProfile = async (userId:any) => {
  try {
    const userDoc = doc(db, usersCollection, userId);
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting profile:", error);
    throw error;
  }
};
