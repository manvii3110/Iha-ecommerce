import React from "react";

require("../static/index.scss");

export default function Footer() {
	return (
		<footer class='text-gray-600 body-font'>
			<div class='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
				<a class='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
					<img
						src='./static/frontend/img/ihaIcon.svg'
						className='w-10 h-10 '
					/>
					<span class='ml-3 text-xl'> Ecommerce</span>
				</a>
				<p class='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
					developed by —
					<a
						href='https://github.com/Wajid2001'
						class='text-gray-600 ml-1'
						rel='noopener noreferrer'
						target='_blank'
					>
						@wajid2001
					</a>
				</p>
			</div>
		</footer>
	);
}
