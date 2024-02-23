import  { useState } from 'react';
// import Link from './Link';
import './App.css';

function App() {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		designation: "",
		email: "",
		phoneNumber: "",
		address: "",
		street: "",
		state: "",
		district: "",
		pincode:"",
	})

	const [submitted, setSubmitted] = useState(false);
	const [valid, setValid] = useState(false);

	const handleFirstNameInputChange = (event) => {
		setValues({...values, firstName: event.target.value})
	}

	const handleLastNameInputChange = (event) => {
		setValues({...values, lastName: event.target.value})
	}

	const handleDesignationInputChange = (event) => {
		setValues({...values, designation: event.target.value})
	}

	const handleEmailInputChange = (event) => {
		setValues({...values, email: event.target.value})
	}

	const handlePhoneNumberInputChange = (event) => {
		setValues({...values, phoneNumber: event.target.value})
	}

	const handleAddressInputChange = (event) => {
		setValues({...values, address: event.target.value})
	}

	const handleStreetInputChange = (event) => {
		setValues({...values, street: event.target.value})
	}

	const handleStateInputChange = (event) => {
		setValues({...values, state: event.target.value})
	}

	const handleDistrictInputChange = (event) => {
		setValues({...values, district: event.target.value})
	}

	const handlePincodeInputChange = (event) => {
		setValues({...values, pincode: event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if(values.firstName && 
			values.lastName && 
			values.designation && 
			values.email && 
			values.phoneNumber && 
			values.address && 
			values.street &&
			values.state &&
			values.district &&
			values.pincode) {
				setValid(true);
			}
		setSubmitted(true);
	}

  	return (
		<div className="form-container">
			<div>
				<img className="image" src="https://www.wallpapers13.com/wp-content/uploads/2019/10/Guangzhou-city-building-in-Guangdong-province-China-Night-view-4K-Ultra-HD-TV-Wallpaper-for-Desktop-1920x1200.jpg" alt="building" />
			</div>
			<form className="submit-form" onSubmit={handleSubmit}>
				<div className="wlcm">
					<img className="image1" src="https://thumbs.dreamstime.com/b/elegant-man-business-suit-badge-man-business-avatar-profile-picture-vector-illustration-isolated-elegant-man-business-108011294.jpg" alt=" man" />
					<div>Welcome !</div>
				</div>
				
				<input	
					onChange = {handleFirstNameInputChange}
					value = {values.firstName}		
					className = "form-field"
					placeholder="First Name :"
					name = "firstName"
				/>
				{submitted && !values.firstName ? <span>Please enter a first name</span> : null}
				<input		
					onChange = {handleLastNameInputChange}
					value = {values.lastName}		
					className="form-field"
					placeholder="Last Name :"
					name="lastName"
				/>
				{submitted && !values.lastName ?<span>Please enter a last name</span> : null}
				<input			
					onChange={handleDesignationInputChange}
					value = {values.designation}
					className="form-field"
					placeholder="Designation :"
					name="designation"
				/>
				{submitted && !values.designation ?<span>Please enter a designation</span>: null}
				<input			
					onChange={handleEmailInputChange}
					value = {values.email}
					className="form-field"
					placeholder="Email :"
					name="email"
				/>
				{submitted && !values.email ?<span>Please enter an email address</span> : null}
				<input			
					onChange={handlePhoneNumberInputChange}
					value = {values.phoneNumber}
					className="form-field"
					placeholder="Phone Number :"
					name="designation"
				/>
				{submitted && !values.designation ?<span>Please enter a phone number</span> : null}
				<input
					onChange={handleAddressInputChange}
					value = {values.address}
					className="form-field"
					placeholder="Address :"
					name="address"
				/>
				{submitted && !values.address ?<span>Please enter an address</span> : null}
				<input
					onChange={handleStreetInputChange}
					value = {values.street}
					className="form-field"
					placeholder="Street :"
					name="street"
				/>
				{submitted && !values.street ?<span>Please enter a street</span> : null}
				<input
					onChange={handleStateInputChange}
					value = {values.state}
					className="form-field"
					placeholder="State :"
					name="state"
				/>
				{submitted && !values.state ?<span>Please enter a state</span> : null}
				<input
					onChange={handleDistrictInputChange}
					value = {values.district} 
					className="form-field"
					placeholder="District :"
					name="district"
				/>
				{submitted && !values.district ?<span>Please enter a district</span> : null}
				<input
					onChange={handlePincodeInputChange}
					value = {values.pincode}
					className="form-field"
					placeholder="Pincode :"
					name="pincode"
				/>
				{submitted && !values.pincode ?<span>Please enter a pincode</span> : null}
				<button className="submitBtn" type="submit">Submit</button>
				{submitted && valid ? <div className="successMessage">Success! Thank you for submitting</div> : null}
			</form>			
		</div>
  	);
}

export default App;

// function App () {
// 	return (
// 		<div>
// 			<Link 
// 				title="React - A JavaScript library for building user interfaces"
// 				content="Content 1"	
// 				link="https://reactjs.org/"
// 			/>
// 			<Link 
// 				title="Getting Started"
// 				content="Content 2"	 
// 				link="https://reactjs.org/docs/getting-started.html"
// 			/>
// 			<Link 
// 				title="Intro to React"
// 				content="Content 3"	
// 				link="https://reactjs.org/tutorial/tutorial.html"
// 			 />
// 		</div>
// 	)
// }

// export default App;
