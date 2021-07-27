import React from "react";
import { BrandLinkStrip } from "./BrandLinks";
import { BrandLogoImgFull } from "./BrandLogo";

export default function Footer() {
	return (
		<footer className='text-gray-600 body-font bg-white border-t'>
			<div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
				<a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
					<BrandLogoImgFull />
					{/* <span className='ml-3 text-xl'>Iha Unnati</span> */}
				</a>
				<p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
					© 2021 Iha Consultancy —
					<a
						href='https://github.com/Wajid2001/'
						className='text-gray-600 ml-1'
						target='_blank'
					>
						@Wajid2001
					</a>
				</p>
				<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
					<BrandLinkStrip />
				</span>
			</div>
		</footer>
	);
}
