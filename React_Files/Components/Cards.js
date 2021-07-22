import React from "react";
import { FaStar } from "react-icons/fa";

const CardV = () => {
	return (
		<a
			className='transition cursor-pointer flex flex-col w-32 rounded-lg shadow-none hover:shadow-lg border bg-white focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-green-500 transform hover:scale-105'
			href='./sell'
			style={{ content: "contain" }}
		>
			<div
				className='w-full h-32 bg-cover bg-center rounded-t-lg'
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80)",
				}}
			></div>

			<div className='p-2'>
				<h1>This is Product</h1>
				<div className='flex flex-wrap my-1'>
					<span className=' fill-current text-yellow-400 m-0.5'>
						<FaStar />
					</span>
					<span className='fill-current text-yellow-400  m-0.5'>
						<FaStar />
					</span>
					<span className='fill-current text-yellow-400 m-0.5'>
						<FaStar />
					</span>
					<span className=' fill-current text-gray-400 m-0.5'>
						<FaStar />
					</span>
					<span className='fill-current text-gray-400 m-0.5'>
						<FaStar />
					</span>
					<span className='text-blue-600 m-0.5 text-sm'>(100)</span>
				</div>
				<h5>₹100</h5>
			</div>
		</a>
	);
};

const CardH = () => {};

export { CardV, CardH };
