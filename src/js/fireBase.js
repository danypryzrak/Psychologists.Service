import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, push, get, child } from 'firebase/database';
import { isLogedIn } from './isLogIn';

if (localStorage.getItem("userData") !== null) {
isLogedIn()
}



export const firebaseConfig = {
  apiKey: "AIzaSyBNjOUTkhaZnuYlElXhJb1oAsh2cNbb8TU",
  authDomain: "psychologists-service-6f7c4.firebaseapp.com",
  databaseURL: "https://psychologists-service-6f7c4-default-rtdb.firebaseio.com",
  projectId: "psychologists-service-6f7c4",
  storageBucket: "psychologists-service-6f7c4.appspot.com",
  messagingSenderId: "411510910026",
  appId: "1:411510910026:web:4ae5d085aae23d16964ab3",
  measurementId: "G-DX0CTSQB57"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

export async function registerUser(name, email, password) {
  try {
    // Создание пользователя в Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Получение идентификатора нового пользователя
    const userId = userCredential.user.uid;

    set(ref(db, 'users/' + userId), {
    username: name,
    email: email
    });
    

    console.log('User registered successfully');
  } catch (error) {
    console.error('Registration error:', error.message);
  }
}

export async function loginUser(email, password) {
  try {
    // Вход пользователя в Firebase Authentication
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Получение информации о пользователе из Realtime Database по его уникальному идентификатору
    const userId = userCredential.user.uid;
    const dbRef = ref(getDatabase())
    const snapshot = await get(child(dbRef, `users/${userId}`))
      let userData = snapshot.val()
      userData.uid = userId
      const userDataJSON = JSON.stringify(userData)
    localStorage.setItem("userData", userDataJSON)
    isLogedIn()

    console.log('User logged in successfully:', userDataJSON);
  } catch (error) {
    console.error('Login error:', error.message);
  }
}