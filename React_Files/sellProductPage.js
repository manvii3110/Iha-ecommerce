import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrandLogoImg } from "./Components/BrandLogo";
import Header from "./Components/Header";
require("./static/index.scss");

function ProductPosting() {
	const [inputBorderClass, setInputBorderClass] = useState("border-gray-300");
	const [condition, setCondition] = useState("");
	let inputClass = `appearance-none rounded-lg relative block w-full px-3 py-2 border ${inputBorderClass} placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`;
	const [productPostingError, setProductPostingError] = useState("");
	const PostProduct = () => {
		setInputBorderClass("border-gray-300");
	};
	return (
		<>
			<Header className='bg-white' />
			<div className='flex bg-gray-50 min-h-full py-5 sm:py-10 px-4 sm:px-6 lg:px-16 z-40'>
				<div className='max-w-8xl mx-auto w-full space-y-8 '>
					<div className='w-100'>
						<h2 className=' mb-4 text-xl sm:text-3xl font-medium sm:font-normal text-gray-900'>
							Create a new Product Listing
						</h2>
						<hr />
					</div>
					<form
						id='SignInForm'
						className='mt-8 space-y-6 pb-0 sm:pb-16'
						onSubmit={(e) => {
							e.preventDefault();
							PostProduct();
						}}
						method='POST'
					>
						{productPostingError !== "" ? (
							<div className='text-red-600 text-center font-bold'>
								{productPostingError}
							</div>
						) : (
							<></>
						)}
						<div className='mb-4'>
							<label className='block text-grey-darker text-sm font-bold mb-2'>
								Product Title
							</label>
							<input
								className={inputClass}
								name='product_title'
								type='text'
								placeholder='Product Title'
								required
							></input>
						</div>
						<div className='mb-4'>
							<label className='block text-grey-darker text-sm font-bold mb-2'>
								Product Price (Including shipping)
							</label>
							<input
								className={inputClass}
								name='product_price'
								type='number'
								placeholder='Product Price'
								required
							></input>
						</div>
						<div className='mb-4'>
							<label className='block text-grey-darker text-sm font-bold mb-2'>
								Condition
							</label>
							<div className='relative z-0 w-full mb-5'>
								<select
									name='select'
									value={condition}
									onChange={(e) =>
										setCondition(e.target.value)
									}
									className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200'
								>
									<option value='' disabled>
										Select condition
									</option>
									<option value='old'>Old</option>
									<option value='new'>New</option>
								</select>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

ReactDOM.render(<ProductPosting />, document.getElementById("root"));
