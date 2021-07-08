import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
require("./static/index.scss");

document.querySelector("body").className = " bg-gray-100";

function ProductPosting() {
	const [inputBorderClass, setInputBorderClass] = useState("border-gray-300");
	let inputClass = `mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border ${inputBorderClass} placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500  focus-within:border-green-500 focus:z-10 sm:text-sm`;

	return (
		<>
			<Header className='bg-white' />
			<div className='flex min-h-full py-5 sm:py-10 px-4 sm:px-6 lg:px-16 z-40 '>
				<div className='max-w-8xl mx-auto w-full space-y-8 '>
					<div className='w-100'>
						<h2 className=' mb-4 text-xl sm:text-3xl font-medium sm:font-normal text-gray-900'>
							Create a new Product Listing
						</h2>
						<hr />
					</div>
					<form
						id='SignInForm'
						className=' max-w-6xl mx-auto'
						onSubmit={(e) => {
							e.preventDefault();
						}}
						method='POST'
					>
						<div className='mt-8 flex flex-col md:flex-row border rounded-lg p-5 pt-4 bg-white'>
							<div className='mr-0 mb-6 md:mr-5 w-full md:w-2/5'>
								<label>Product Photos</label>
								<div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
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
												<input
													id='file-upload'
													name='file-upload'
													type='file'
													className='sr-only'
												/>
											</label>
											<p className='pl-1'>or drag and drop</p>
										</div>
										<p className='text-xs text-gray-500'>
											PNG, JPG, GIF up to 10MB
										</p>
									</div>
								</div>
							</div>
							<div className='w-full md:w-3/5 space-y-6'>
								<div>
									<label className='flex'>
										Product Title
										<span className='text-xs ml-auto font-gray-400 font-normal my-auto'>
											(255 characters at max)
										</span>
									</label>
									<input
										className={` ${inputClass.replace(
											"sm:text-sm",
											"text-4xl",
										)}`}
										name='product_title'
										type='text'
										placeholder='Product Title'
										maxLength={255}
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
												name='product_price'
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
											<select name='select' className={inputClass}>
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
											<select name='select' className={inputClass} required>
												<option value='none' disabled>
													select category
												</option>
												<option value='handcraft'>Hand Craft</option>
											</select>
										</div>
									</div>
								</div>
								<div>
									<label>Description</label>
									<textarea className={`${inputClass} h-28`}></textarea>
								</div>
								<div>
									<label>Keywords</label>
									<input
										className={inputClass}
										name='keywords'
										type='text'
										required
									/>
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
				</div>
			</div>
		</>
	);
}

ReactDOM.render(<ProductPosting />, document.getElementById("root"));
