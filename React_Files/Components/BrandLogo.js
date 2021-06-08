import React from "react";

require("../static/index.scss");

export const BrandLogoImg = () => {
	return (
		<>
			<img
				className='mx-auto h-32 w-auto'
				src='./static/frontend/img/ihaIcon.svg'
				alt='JUHS Logo'
			/>
		</>
	);
};

const BrandLogo = () => {
	return (
		<a
			href='./'
			className='brandLogo d-flex py-1 pr-1 defaultHover'
			title='Goto JUHS Home Page'
		>
			<img
				className='brandLogo-img'
				src='./static/frontend/img/ihaIcon.svg'
			/>
			<div className='brandLogo-text my-auto '>
				<div className='mx-1 my-auto'>
					<p className='my-1'>Jawahar Urdu High School &</p>
					<p className='my-1'>Junior College, Motala</p>
				</div>
			</div>
		</a>
	);
};

export default BrandLogo;
