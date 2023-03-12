import React from "react";
import "./form-style.scss";
import { BsHearts } from "react-icons/bs";

const handleSubmit = () => {
	// submit nerw form to the database
};

const handleNameChange = () => {
	// change the name
};

const handleBirthdateChange = () => {
	// change the birthdte info
};

const handlePictureChange = () => {
	// have the user add a picture
};

function Form(props) {
	const [name, setname] = "";
	const [birthdate, setBirthdate] = "";

	return (
		<div className='form-page'>
			<h2>
				<BsHearts />
				Create Account <BsHearts />
			</h2>
			<form onSubmit={handleSubmit}>
				<label className='name'>Name:</label>
				<input
					type='text'
					id='name'
					name='name'
					value={name}
					onChange={handleNameChange}
					required
				/>
				<br />
				<br />
				<label className='birthdate'>Birthdate:</label>
				<input
					type='date'
					id='birthdate'
					name='birthdate'
					value={birthdate}
					onChange={handleBirthdateChange}
					required
				/>
				<br />
				<br />
				<label className='picture'>Picture:</label>
				<input
					type='file'
					id='picture'
					name='picture'
					accept='image/*'
					onChange={handlePictureChange}
					required
				/>
				<br />
				<br />
				<button type='submit'>Create Account</button>
				<button onClick={props.onClose}>Close</button>
			</form>
		</div>
	);
}

export default Form;
