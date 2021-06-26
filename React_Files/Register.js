import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrandLogoImg } from "./Components/BrandLogo";
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
	let inputClass = `transition appearance-none rounded-lg relative block w-full px-3 py-2 border ${mainBorderClass} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10`;

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
		<div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				<div>
					<BrandLogoImg />
					<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
						Sign up to Iha account
					</h2>
				</div>
				<form
					id='SignUpForm'
					className='mt-8 space-y-6 pb-0 sm:pb-16'
					method='POST'
					onSubmit={(e) => {
						e.preventDefault();
						SignUp();
						return false;
					}}
				>
					<div className='flex mb-4'>
						<div className='w-1/2 mr-1'>
							<label className='block text-grey-darker text-sm font-bold mb-2'>
								First Name
							</label>
							<input
								className={inputClass}
								name='first_name'
								type='text'
								placeholder='First Name'
								required
							></input>
						</div>
						<div className='w-1/2 ml-1'>
							<label className='block text-grey-darker text-sm font-bold mb-2'>
								Last Name
							</label>
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
						<label className='block text-grey-darker text-sm font-bold mb-2'>
							Email Address
						</label>
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
						<label className='block text-grey-darker text-sm font-bold mb-2'>
							Password
						</label>
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
						<label className='block text-grey-darker text-sm font-bold mb-2'>
							Confirm Password
						</label>
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
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

ReactDOM.render(<Register />, document.getElementById("root"));
