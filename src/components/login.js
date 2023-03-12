import React, { useState } from "react";
import "./login-style.scss";
import { BsHearts } from "react-icons/bs";

function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

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
		console.log("Creating account");
	};

	return (
		<div className='login-page'>
			<h2 className='title'>
				<BsHearts />
				My Cute Notes <BsHearts />
			</h2>
			<h2 className='subtitle'>Login</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='username'>Username: </label>
				<input
					type='text'
					id='username'
					name='username'
					value={username}
					onChange={handleUsernameChange}
					required
				/>
				<br />
				<br />
				<label htmlFor='password'>Password: </label>
				<input
					type='password'
					id='password'
					name='password'
					value={password}
					onChange={handlePasswordChange}
					required
				/>
				<br />
				<br />
				<button type='submit'>Log In</button>
			</form>
			<div></div>
		</div>
	);
}

export default LoginPage;
