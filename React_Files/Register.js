import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrandLogoImg } from "./Components/BrandLogo";
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
	let signBtnData; // This will store restore state for sign in button

	const Loading = () => {
		// Storing data from form to formData variable as object
		document.querySelectorAll("#SignUpForm input").forEach((e) => {
			formData[e.name] = e.value;
		});

		// Changing singinbtn state to loading
		const signBtn = document.querySelector(
			'#SignUpForm button[type="submit"]',
		);
		signBtnData = signBtn.innerHTML;
		signBtn.innerHTML = "<div class='loading'></div>";
	};

	// This will restore the sign btn state to previous one
	const ResetSignBtn = () => {
		const signBtn = document.querySelector(
			'#SignUpForm button[type="submit"]',
		);
		signBtn.innerHTML = signBtnData;
	};

	// If any error is there, these will be useful
	const [signUpError, setSignUpError] = useState("");
	const [inputBorderClass, setInputBorderClass] = useState("border-gray-300");
	let inputClass = `appearance-none rounded-lg relative block w-full px-3 py-2 border ${inputBorderClass}  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10`;

	const SignUp = () => {
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
			ResetSignBtn();
			console.log(data);
			if (data.error) {
				setSignUpError(data.error);
				setInputBorderClass("border-red-300 bg-red-50");
			} else {
				location.replace("./");
			}
		})
		.catch((e) => {
			ResetSignBtn();
			console.log(`There is a catch ${e}`);
		});
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
					}}
				>
					{signUpError !== "" ? (
						<div className='text-red-600 text-center font-bold'>
							{signUpError}
						</div>
					) : (
						<></>
					)}
					<div class='flex mb-4'>
						<div class='w-1/2 mr-1'>
							<label class='block text-grey-darker text-sm font-bold mb-2'>
								First Name
							</label>
							<input
								class={inputClass}
								name='first_name'
								type='text'
								placeholder='First Name'
								required
							></input>
						</div>
						<div class='w-1/2 ml-1'>
							<label class='block text-grey-darker text-sm font-bold mb-2'>
								Last Name
							</label>
							<input
								class={inputClass}
								name='last_name'
								type='text'
								placeholder='Last Name'
								required
							></input>
						</div>
					</div>
					<div class='mb-4'>
						<label class='block text-grey-darker text-sm font-bold mb-2'>
							Email Address
						</label>
						<input
							class={inputClass}
							name='email'
							type='email'
							placeholder='Email Address'
							required
						></input>
					</div>
					<div class='mb-4'>
						<label class='block text-grey-darker text-sm font-bold mb-2'>
							Password
						</label>
						<input
							class={inputClass}
							name='password'
							id='password'
							type='password'
							placeholder='Password'
							required
						></input>
					</div>
					<div class='mb-4'>
						<label class='block text-grey-darker text-sm font-bold mb-2'>
							Confirm Password
						</label>
						<input
							class={inputClass}
							name='confirmuserpassword'
							id='confirmpassword'
							type='password'
							placeholder='Confirm Password'
							required
						></input>
					</div>
					<div>
						<button
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
