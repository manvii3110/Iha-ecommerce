import React from "react";

require("../static/index.scss");

export const BrandLogoImg = (props) => {
	return (
		<>
			<img
				className={`h-12 w-12 my-2 my:0 ${props.className}`}
				src='/static/frontend/img/Iha Unnathi logo Croped.jpeg'
				alt='Iha Ecommerce Logo'
			/>
		</>
	);
};

export const BrandLogoCircle = () => {
	return (
		<a
			href='/home'
			className='flex mx-auto w-max transition flex px-1 py-1 rounded-full bg-transparent hover:bg-white active:bg-gray-100 border border-white hover:border-gray-200 active:border-gray-500 shadow-none hover:shadow active:shadow-md'
			title='Goto Iha Ecommerce'
		>
			<BrandLogoImg className='rounded-full' />
		</a>
	);
};

const BrandLogo = () => {
	return (
		<a href='/home' className='flex ml-2 sm:ml-0' title='Goto Iha Ecommerce'>
			<BrandLogoImg />
		</a>
	);
};

export default BrandLogo;
