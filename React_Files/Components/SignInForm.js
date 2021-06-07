import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";

require("../static/index.scss");

export default function SignInForm() {
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

	const handleSignInBtnClick = () => {
		let data = {};
		document
			.querySelectorAll("#SignInForm input")
			.forEach((e) => (data[e.name] = e.value));

		// fetching data from server
		fetch("./api/signin", {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "X-CSRFToken": csrftoken },
		})
			.then((res) => res.JSON)
			.then((d) => {
				console.log(d);

				StartInput(restorePoint);
				CleanForm();
			})
			.catch((error) => {
				// Consoling the error
				console.log(error);

				StartInput(restorePoint);
			});
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				<div>
					<img
						className='filter drop-shadow-lg mx-auto h-16 sm:h-24 w-auto'
						src='./static/frontend/img/ihaLogo.svg'
						alt='Iha Ecommerce'
					/>
					<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
						Sign in to your account
					</h2>
				</div>
				<form
					id='SignInForm'
					className='mt-8 space-y-6'
					onSubmit={(e) => {
						e.preventDefault();
						SignIn();
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
								id='email-address'
								name='email'
								type='email'
								autoComplete='email'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='Email address'
							/>
						</div>
						<div>
							<label htmlFor='password' className='sr-only'>
								Password
							</label>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='current-password'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='Password'
							/>
						</div>
					</div>

					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<input
								id='remember_me'
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
							onClick={() => handleSignInBtnClick()}
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
}
