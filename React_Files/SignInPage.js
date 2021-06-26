import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LockClosedIcon } from "@heroicons/react/solid";

import { BrandLogoImg } from "./Components/BrandLogo";

require("./static/index.scss");

const SignInForm = () => {
	// This will fetch csrf token from request headers
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
		document.querySelectorAll("#SignInForm input").forEach((e) => {
			formData[e.name] = e.value;
		});

		// Changing singinbtn state to loading
		const signBtn = document.querySelector(
			'#SignInForm button[type="submit"]',
		);
		signBtnData = signBtn.innerHTML;
		signBtn.innerHTML = "<div class='loading'></div>";
	};

	// This will restore the sign btn state to previous one
	const ResetSignBtn = () => {
		const signBtn = document.querySelector(
			'#SignInForm button[type="submit"]',
		);
		signBtn.innerHTML = signBtnData;
	};

	// If any error is there, these will be useful
	const [signInError, setSignInError] = useState("");
	const [inputBorderClass, setInputBorderClass] = useState("border-gray-300");
	let inputClass = `appearance-none rounded-none relative block w-full px-3 py-2 border ${inputBorderClass} placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`;

	// This will Sign the user in Iha portal
	const SignIn = () => {
		Loading();
		setSignInError("");
		setInputBorderClass("border-gray-300");

		// fetching data from server
		fetch("./api/account/signin", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: { "X-CSRFToken": csrftoken },
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
					setSignInError(data.error);
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
			<meta
				name='description'
				content='This is a sign in Page, where user will be able to sign in to its Iha Portal.'
			></meta>
			<div className='max-w-md w-full space-y-8'>
				<div>
					<BrandLogoImg />
					<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
						Sign in to Iha account
					</h2>
				</div>
				<form
					id='SignInForm'
					className='mt-8 space-y-6 pb-0 sm:pb-16'
					onSubmit={(e) => {
						e.preventDefault();
						SignIn();
						return false;
					}}
					method='POST'
				>
					<input type='hidden' name='remember' defaultValue='true' />
					<div className='rounded-md shadow-sm -space-y-px'>
						<div>
							<label htmlFor='email-address' className='sr-only'>
								Email address
							</label>
							<input
								name='email'
								type='email'
								autoComplete='email'
								required
								className={inputClass + " rounded-t-md "}
								placeholder='Email address'
							/>
						</div>
						<div>
							<label htmlFor='password' className='sr-only'>
								Password
							</label>
							<input
								name='password'
								type='password'
								autoComplete='current-password'
								required
								className={inputClass + " rounded-b-md "}
								placeholder='Password'
							/>
						</div>
					</div>

					{signInError !== "" ? (
						<div className='text-red-600 text-center font-bold'>
							{signInError}
						</div>
					) : (
						<></>
					)}

					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<input
								name='remember_me'
								type='checkbox'
								className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
							/>
							<label
								htmlFor='remember_me'
								className='ml-2 block text-sm text-gray-900'
							>
								Remember me
							</label>
						</div>

						<div className='text-sm'>
							<a
								href='#'
								className='font-medium text-indigo-600 hover:text-indigo-500'
							>
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
								<LockClosedIcon
									className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
									aria-hidden='true'
								/>
							</span>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

ReactDOM.render(<SignInForm />, document.getElementById("root"));
