import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { DocumentReference, getFirestore } from "firebase/firestore";
import { collection, addDoc, deleteDoc, updateDoc, doc, getDocs, getDoc,
         where, query } from "firebase/firestore";

/**
 * инициализация конфига 
 */
const firebaseConfig = {
  apiKey: "AIzaSyArCP6s8_lnVcqwPOx_tGdeJ7pI9262nzY",
  authDomain: "nftasker-4ba4b.firebaseapp.com",
  projectId: "nftasker-4ba4b",
  storageBucket: "nftasker-4ba4b.appspot.com",
  messagingSenderId: "157830561560",
  appId: "1:157830561560:web:d418f9d8df2a88a027a86d",
  measurementId: "G-LDF6XQL0E4",
};

/**
 * инициализация базы данных
 */
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

// -------------------- add / delete / update users -------------------- //

/**
 * Добавление пользователя в database
 * @param address 
 * @param name 
 * @param userId 
 * @returns docRef.id
 */
export const addUser = async (address: string, name: string, userId: string) => {
    const docRef = await addDoc(collection(db, 'Users'), {
        address: address,
        name: name,
        userId: userId
    })

    return docRef.id;
}

export const findUserByAddress = async (address: string) => {
    const userQuery = query(collection(db, 'Users'), where('address', '==', address));
    return await getDocs(userQuery);
}

export const deleteUser = async (id: string) => {
    await deleteDoc(doc(db, 'Users', id));
}

export const editUser = async (id: string, address: string, name: string) => {
    await updateDoc(doc(db, 'Users', id), {
        id: id,
        address: address,
        name: name
    })
}

// -------------------- add / delete / update users -------------------- //

// -------------------- add / delete / update tasks -------------------- //

export const addTask = async (taskId: string, 
    userId: string,
    title: string, 
    desc: string, 
    reward: number, 
    deadline: string) => {
    const docRef = await addDoc(collection(db, 'Tasks'), {
        userId: userId,
        taskId: taskId,
        title: title,
        desc: desc,
        reward: reward,
        deadline: deadline
    })

    return docRef.id;
}

export const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, 'Tasks', id));
}

export const updateTask = async (id: string, newData: Array<String>) => {
    await updateDoc(doc(db, 'Tasks', id), {
        ...doc(db, 'Tasks', id),
        ...newData
    });
}