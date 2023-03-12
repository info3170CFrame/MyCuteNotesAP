import React, { useState } from "react";
import Form from "./components/createAccount";
import LoginPage from "./components/login";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZgZeGS6B0OkL8wcWZ5vMD39zr14F3Z40",
  authDomain: "notesapp-c802c.firebaseapp.com",
  projectId: "notesapp-c802c",
  storageBucket: "notesapp-c802c.appspot.com",
  messagingSenderId: "581482568535",
  appId: "1:581482568535:web:cebc85321d95b39aa93c12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(app);

// Adds a sample user to database (example)
const addUser = async () => {
  try {
    const user = {
      name: "John Doe",
      email: "john@example.com",
      age: 30,
	  timestamp: Timestamp.now() 
    };
    const usersCollection = collection(db, "users");
    const docRef = await addDoc(usersCollection, user);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

addUser();



function MainPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showForm, setShowForm] = useState(false);

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Here you would typically make an API call to a server to authenticate the user
		// and handle any errors that occur.
		console.log(`Logging in as ${username} with password ${password}...`);
	};

	const handleForgotPasswordClick = () => {
		// Here you could show a modal or navigate to a separate page for resetting the password.
		console.log("Forgot password clicked!");
	};

	const handleCreateAccount = () => {
		setShowForm(true);
	};

	return (
		<div>
			<div>{showForm && <Form />}</div>
			<div>
				{!showForm && (
					<div>
						<LoginPage />
						<div>
							<a
								href='#'
								onClick={handleForgotPasswordClick}
							>
								Forgot your password?
							</a>
						</div>
						<div>
							<a
								href='#'
								onClick={handleCreateAccount}
							>
								Create Account
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default MainPage;
