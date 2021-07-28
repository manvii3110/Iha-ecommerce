import React from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CardV = ({ data }) => {
	// console.log(data["images"][0].url);
	return (
		<NavLink
			className='group transition cursor-pointer  w-40  rounded-lg shadow-none hover:shadow-lg border bg-white focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-green-500 transform hover:scale-105'
			to={`/product/${data.id}`}
			style={{ content: "contain" }}
		>
			{/* <div
				className='w-full h-32 bg-cover bg-center rounded-t-lg'
				style={{
					backgroundImage: `${data["images"][0]["url"]}`,
				}}
			></div> */}
			{data["images"][0] && (
				<img
					className='object-contain object-center w-full h-32 my-auto bg-cover bg-center rounded-lg p-2'
					src={data["images"][0]["url"]}
				/>
			)}

			<div className='p-2'>
				<h1 className='group-hover:text-blue-600 overflow-ellipsis overflow-hidden h-12 '>
					{data.productName}
				</h1>
				<div className='flex flex-wrap my-1 text-xs space-x-0.5'>
					<span className=' fill-current text-yellow-400'>
						<FaStar />
					</span>
					<span className='fill-current text-yellow-400 '>
						<FaStar />
					</span>
					<span className='fill-current text-yellow-400 '>
						<FaStar />
					</span>
					<span className=' fill-current text-gray-400'>
						<FaStar />
					</span>
					<span className='fill-current text-gray-400'>
						<FaStar />
					</span>
					<span className='text-blue-600 inline-block align-top'>(100)</span>
				</div>
				<div className='flex overflow-x-hidden'>
					₹<h5 className='font-2xl'>{Intl.NumberFormat("en-IN").format(data.price)}</h5>
					<small className='text-gray-600 line-through mt-auto mx-1'>
						₹{Intl.NumberFormat("en-IN").format(data.price * 1.2)}
					</small>
					{/* <small className='text-green-600 text-xs font-bold mt-auto mx-1'>
						₹{Intl.NumberFormat("en-IN").format(data.price * 1.2 - data.price)} OFF
					</small> */}
				</div>
				<div></div>
			</div>
		</NavLink>
	);
};

const CardH = () => {};

export { CardV, CardH };
