import React, { useEffect, useState } from "react";

export default function ProductPostingForm() {
	let inputClass = `mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500  focus-within:border-green-500 focus:z-10 sm:text-sm`;

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

	let formData = new FormData(); // This will store important data send to server
	let submitBtnData = ""; // This will store restore state for sign in button

	const Loading = () => {
		formData = new FormData();

		// Storing data from form to formData variable as object
		document.querySelectorAll("#CreateProductForm input").forEach((e) => {
			if (e.name != "images") {
				formData.append(e.name, e.value);
			}
		});
		formData.append(
			document.querySelector("textarea").name,
			document.querySelector("textarea").value,
		);
		document.querySelectorAll("#CreateProductForm select").forEach((e) => {
			formData.append(e.name, e.value);
		});
		formData.append(
			"csrfmiddlewaretoken",
			document.querySelector('input[name="csrfmiddlewaretoken"]').value,
		);
		// Appending images
		for (let i in document.querySelector('#CreateProductForm input[name="images"]').files) {
			formData.append(
				"img" + i,
				document.querySelector('#CreateProductForm input[name="images"]').files[i],
			);
		}
		formData.append(
			"imageLength",
			document.querySelector('#CreateProductForm input[name="images"]').files.length,
		);

		// Changing submitBtn state to loading
		const submitBtn = document.querySelector("button[type='submit']");
		submitBtnData = submitBtn.innerHTML;
		submitBtn.innerHTML = "<div class='loading'></div>";
	};

	// This will restore the sign btn state to previous one
	const resetSubmitBtn = () => {
		const submitBtn = document.querySelector("button[type='submit']");
		submitBtn.innerHTML = submitBtnData;
	};

	const [errorMessage, setErrorMessage] = useState("");
	const submitForm = (e) => {
		setErrorMessage("");
		Loading();
		fetch("/api/product/", {
			method: "POST",
			headers: {
				"X-CSRFToken": csrftoken,
			},
			body: formData,
		})
			.then((r) => r.json())
			.then((data) => {
				/*
				 * This will work only
				 * if there is any type of error
				 * else the user will be redirected to index page
				 */
				resetSubmitBtn();
				console.log(data);
				// if (data.error) {
				// } else {
				// 	location.replace("/dashboard");
				// }
			})
			.catch((e) => {
				resetSubmitBtn();
				setErrorMessage(e);
				console.log(`There is a catch ${e}`);
			});
	};

	// This will import categories for the form
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("/api/product/categories")
			.then((res) => res.json())
			.then((data) => {
				setCategories(data["categories"]);
			});
	}, []);

	return (
		<>
			<form
				id='CreateProductForm'
				className=' max-w-6xl mx-auto'
				onSubmit={(e) => {
					e.preventDefault();
					submitForm();
				}}
				method='POST'
			>
				<div className='w-100'>
					<h2 className=' mb-4 text-xl sm:text-3xl font-medium sm:font-normal text-gray-900 border-b pb-2'>
						Create a new Product Listing
					</h2>
				</div>
				{errorMessage != "" && (
					<div className='mt-4 w-full bg-red-50 text-red-500 font-bold border-2 border-red-500 rounded-md px-1 py-2 text-center'>
						This is {errorMessage}
					</div>
				)}
				<div className='mt-6 flex flex-col md:flex-row border rounded-lg p-5 pt-4 bg-white'>
					<div className='mr-0 mb-6 md:mr-5 w-full md:w-2/5'>
						<label>Product Photos</label>
						<div className='relative focus-within:border-green-500 focus-within:bg-gray-50 transition-all mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
							<input
								name='images'
								type='file'
								accept='image/*'
								className='absolute  top-0 h-full w-full cursor-pointer'
								min={1}
								max={5}
								multiple
							/>
							<div className='space-y-1 text-center'>
								<svg
									className='mx-auto h-12 w-12 text-gray-400'
									stroke='currentColor'
									fill='none'
									viewBox='0 0 48 48'
									aria-hidden='true'
								>
									<path
										d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
										strokeWidth={2}
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
								<div className='flex text-sm text-gray-600'>
									<label
										htmlFor='file-upload'
										className='relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500'
									>
										<span>Upload a file</span>
									</label>
									<p className='pl-1'>or drag and drop</p>
								</div>
								<p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
							</div>
						</div>
					</div>
					<div className='w-full md:w-3/5 space-y-6'>
						<div>
							<label className='flex'>
								Product Title
								<span className='text-xs ml-auto font-gray-400 font-normal my-auto'>
									(64 characters at max)
								</span>
							</label>
							<input
								className={` ${inputClass.replace("sm:text-sm", "text-4xl")}`}
								name='productName'
								type='text'
								placeholder='Product Title'
								maxLength={64}
								required
							></input>
						</div>
						<div className='block md:grid grid-flow-col grid-cols-3 space-y-6 md:space-y-0 space-x-0 md:space-x-6'>
							<div>
								<label>Product Price</label>
								<span className={`${inputClass} flex font-medium`}>
									₹
									<input
										className='ml-2 focus:outline-none w-full '
										name='price'
										type='number'
										placeholder='1'
										min={1}
										required
									></input>
								</span>
							</div>
							<div>
								<label>Condition</label>
								<div className='relative z-0 w-full'>
									<select name='condition' className={inputClass}>
										<option value='new' selected>
											New
										</option>
										<option value='old'>Old</option>
									</select>
								</div>
							</div>
							<div>
								<label>Category</label>
								<div className='relative z-0 w-full'>
									<select name='category' className={inputClass} required>
										<option value='o' disabled selected>
											select category
										</option>
										{categories != [] &&
											categories.map((d, index) => {
												return (
													<option value={d[0]} key={index}>
														{d[1]}
													</option>
												);
											})}
									</select>
								</div>
							</div>
						</div>
						<div>
							<label>Description</label>
							<textarea
								name='description'
								className={`${inputClass} h-28`}
								required
							></textarea>
						</div>
						<div>
							<label>Keywords</label>
							<input className={inputClass} name='keywords' type='text' required />
						</div>
					</div>
				</div>
				<div className='mt-4 flex'>
					<button className='btn-secondary'>Cancel</button>
					<button type='submit' className='ml-auto btn-primary'>
						Publish
					</button>
				</div>
			</form>
		</>
	);
}
