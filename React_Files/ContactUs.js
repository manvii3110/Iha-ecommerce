import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

require("./static/index.scss");

import { BrandLinkStrip } from "./Components/BrandLinks";
import Header from "./Components/Header";

const ContactUs = () => {
	// This will fetch csrf token from request headers
	function getCookie(name) {
		let cookieValue = null;
		if (document.cookie && document.cookie !== "") {
			const cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) === name + "=") {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
	const csrftoken = getCookie("csrftoken");

	const csrfmiddlewaretoken = document.querySelector("input[name='csrfmiddlewaretoken']").value;
	document.querySelector("input[name='csrfmiddlewaretoken']").remove();
	console.log(csrfmiddlewaretoken);

	const inputClass =
		"appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm";

	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const loading = () => {
		const btn = document.querySelector("#submitForm");
		const btnValue = btn.value;
		btn.innerHTML = "<div class='loading'></div>";
		return btnValue;
	};

	const resetLoading = (v) => {
		document.querySelector("#submitForm").value = v;
	};

	const resetMessages = () => {
		setErrorMessage("");
		setSuccessMessage("");
	};

	let formData = new FormData();

	const CollectFormData = () => {
		formData = new FormData();
		document.querySelectorAll("input").forEach((e) => {
			formData.append(e.name, e.value);
		});
		formData.append("message", document.querySelector("section textarea").value);
		formData.append("csrfmiddlewaretoken", csrfmiddlewaretoken);
	};

	const sendEnquiry = () => {
		const resetValue = loading();

		resetMessages();
		CollectFormData();

		fetch("/api/contactus/", {
			method: "POST",
			body: formData,
			headers: { "X-CSRFToken": csrftoken },
		})
			.then((res) => res.json())
			.then((d) => {
				console.log(d);

				setSuccessMessage(d["message"]);
				resetLoading(resetValue);
			})
			.catch((err) => {
				console.log(err);
				setErrorMessage(err);
				resetLoading(resetValue);
			});
	};

	return (
		<>
			<Header />
			<section className='text-gray-600 body-font relative'>
				<div className='container px-5 py-16 mx-auto'>
					<div className='flex flex-col text-center w-full mb-12'>
						<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
							Contact Us
						</h1>
						<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
							We'd Love to Hear From You
						</p>
					</div>
					<div className='lg:w-1/2 md:w-2/3 mx-auto'>
						{(errorMessage || successMessage) && (
							<div
								className={`transition-all mx-2 mb-4 px-3 py-2 rounded-lg font-medium border-2 ${
									errorMessage
										? "border-red-500 bg-red-50 text-red-600"
										: "border-green-500 bg-green-50 text-green-600"
								}`}
							>
								{errorMessage || successMessage}
							</div>
						)}
						<div className='flex flex-wrap'>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label for='name'>Name</label>
									<input type='text' name='name' className={inputClass} />
								</div>
							</div>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label for='email'>Email</label>
									<input type='email' name='email' className={inputClass} />
								</div>
							</div>
							<div className='p-2 w-full'>
								<div className='relative'>
									<label for='message'>Message</label>
									<textarea
										id='message'
										name='message'
										className={inputClass + " h-32"}
									></textarea>
								</div>
							</div>
							<div className='pb-2 pt-4 w-full'>
								<button
									id='submitForm'
									onClick={() => {
										sendEnquiry();
									}}
									className='btn-primary mx-auto'
								>
									Send Query
								</button>
							</div>
							<div className='flex flex-col space-y-4 p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
								<a className='text-indigo-500'>Info@Ihaconsulting.In</a>
								<div className='text-gray-700 mx-auto  '>
									Iha Consulting Services Pvt. Ltd. 1-8-450/A9,
									<br />
									Ground Floor Indian Airlines Colony Begumpet,
									<br />
									Patigadda Hyderabad - 500016.
									<br />
									Telangana.
								</div>
								<div className='flex mx-auto'>
									<BrandLinkStrip />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

ReactDOM.render(<ContactUs />, document.getElementById("root"));
