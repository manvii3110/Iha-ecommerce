import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrandLogoCircle } from "./Components/BrandLogo";
import { InformationCircleIcon } from "@heroicons/react/solid";
require("./static/index.scss");

const Register = () => {
	function getCookie(name) {
		let cookieValue = null;
		if (document.cookie && document.cookie !== "") {
			const cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) === name + "=") {
					cookieValue = decodeURIComponent(
						cookie.substring(name.length + 1),
					);
					break;
				}
			}
		}
		return cookieValue;
	}
	const csrftoken = getCookie("csrftoken");

	let formData = {}; // This will store important data send to server
	let registerBtnData = ""; // This will store restore state for sign in button

	const Loading = () => {
		// Storing data from form to formData variable as object
		document.querySelectorAll("#SignUpForm input").forEach((e) => {
			formData[e.name] = e.value;
		});

		// Changing singinbtn state to loading
		const registerBtn = document.querySelector("#registerBtn");
		registerBtnData = registerBtn.innerHTML;
		registerBtn.innerHTML = "<div class='loading'></div>";
	};

	// This will restore the sign btn state to previous one
	const resetResgisterBtn = () => {
		const registerBtn = document.querySelector("#registerBtn");
		registerBtn.innerHTML = registerBtnData;
	};

	// If any error is there, these will be useful
	const mainBorderClass = "border-gray-300";
	const errorBorderClass = "border-red-300 bg-red-50";

	const [signUpError, setSignUpError] = useState("");
	const [emailError, setEmailError] = useState("");
	let inputClass = `transition appearance-none rounded-lg relative block w-full px-3 py-2 border ${mainBorderClass} focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10`;

	// This will ensure if the both the passwords are same
	const [passwordError, setPasswordError] = useState("");
	function checkPass() {
		setPasswordError("");

		const a = document.querySelector("#password");
		const b = document.querySelector("#confirmpassword");
		if (b.value != a.value) {
			setPasswordError("Both password must match");
			return false;
		} else {
			return true;
		}
	}

	const SignUp = (e) => {
		setEmailError("");
		if (checkPass()) {
			Loading();
			fetch("./api/account/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"X-CSRFToken": csrftoken,
				},
				body: JSON.stringify(formData),
			})
				.then((r) => r.json())
				.then((data) => {
					/*
					 * This will work only
					 * if there is any type of error
					 * else the user will be redirected to index page
					 */
					resetResgisterBtn();
					console.log(data);
					if (data.error) {
						if (data.error.includes("mail")) {
							setEmailError(data.error);
						} else {
							setSignUpError(data.error);
						}
					} else {
						location.replace("./");
					}
				})
				.catch((e) => {
					resetResgisterBtn();
					console.log(`There is a catch ${e}`);
				});
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 sm:py-2 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full my-4 space-y-4'>
				<BrandLogoCircle />
				<form
					id='SignUpForm'
					className='mt-8 space-y-6  border rounded-lg py-4 px-4 bg-white'
					method='POST'
					onSubmit={(e) => {
						e.preventDefault();
						SignUp();
					}}
				>
					<h2 className='mb-4 text-3xl font-base text-gray-900'>
						Create Account
					</h2>
					<div className='flex mb-4'>
						<div className='w-1/2 mr-1'>
							<label>First Name</label>
							<input
								className={inputClass}
								name='first_name'
								type='text'
								placeholder='First Name'
								required
							></input>
						</div>
						<div className='w-1/2 ml-1'>
							<label>Last Name</label>
							<input
								className={inputClass}
								name='last_name'
								type='text'
								placeholder='Last Name'
								required
							></input>
						</div>
					</div>
					<div className='mb-4'>
						<label>Email Address</label>
						<input
							className={` ${
								emailError != ""
									? inputClass.replace(
											mainBorderClass,
											errorBorderClass,
									  )
									: inputClass
							}`}
							name='email'
							type='email'
							placeholder='Email Address'
							required
						></input>
						{emailError !== "" ? (
							<div className='mt-2 text-red-600 text-sm font-bold flex'>
								<InformationCircleIcon
									className='h-5 w-5 mr-2'
									aria-hidden='true'
								/>
								{emailError}
							</div>
						) : (
							<></>
						)}
					</div>
					<div className='mb-4'>
						<label>Password</label>
						<input
							className={
								passwordError !== ""
									? inputClass.replace(
											mainBorderClass,
											errorBorderClass,
									  )
									: inputClass
							}
							name='password'
							id='password'
							type='password'
							placeholder='Password'
							required
						></input>
					</div>
					<div className='mb-4'>
						<label>Confirm Password</label>
						<input
							className={
								passwordError !== ""
									? inputClass.replace(
											mainBorderClass,
											errorBorderClass,
									  )
									: inputClass
							}
							name='confirmuserpassword'
							id='confirmpassword'
							type='password'
							placeholder='Confirm Password'
							required
						></input>
					</div>
					{passwordError !== "" ||
					(signUpError !== "" && !signUpError.includes("mail")) ? (
						<div className='text-red-600 text-sm font-bold flex'>
							<InformationCircleIcon
								className='h-5 w-5 mr-2'
								aria-hidden='true'
							/>
							{passwordError}
							{signUpError}
						</div>
					) : (
						<></>
					)}
					<div>
						<button
							id='registerBtn'
							type='submit'
							className='btn-primary w-full'
						>
							Create your Iha Account
						</button>
					</div>
					{/* Sign In Button */}
					<div>
						<div className='flex mb-6'>
							<hr className='w-2/6 my-auto border-gray-300' />
							<h3 className='w-4/6 text-center'>
								Already a User?
							</h3>
							<hr className='w-2/6 my-auto border-gray-300' />
						</div>
						<a className='btn-secondary' href='./signin'>
							Sign In
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

ReactDOM.render(<Register />, document.getElementById("root"));
