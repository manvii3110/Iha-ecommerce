import React from "react";

require("../static/index.scss");

export const BrandLogoImg = () => {
	return (
		<>
			<img
				className='h-12	 w-12'
				src='./static/frontend/svg/ihaLogo.svg'
				alt='Iha Ecommerce Logo'
			/>
		</>
	);
};

export const BrandLogoCircle = () => {
	return (
		<a
			href='./'
			className='flex mx-auto w-max transition flex px-1 py-1 rounded-full bg-transparent hover:bg-white active:bg-gray-100 border border-white hover:border-gray-200 active:border-gray-500 shadow-none hover:shadow active:shadow-md'
			title='Goto Iha Ecommerce'
		>
			<BrandLogoImg />
		</a>
	);
};

const BrandLogo = () => {
	return (
		<a href='./' className='flex' title='Goto Iha Ecommerce'>
			<BrandLogoImg />
			<div className='hidden md:block font-normal text-gray-900 my-auto ml-1 mb-2'>
				Ship it Free
			</div>
		</a>
	);
};

export default BrandLogo;
