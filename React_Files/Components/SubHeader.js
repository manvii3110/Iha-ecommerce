import React from "react";
import { NavLink } from "react-router-dom";

export default function SubHeader() {
	const navLinks = [
		{ title: "Products", link: "/dashboard/products" },
		{ title: "Orders", link: "/dashboard/orders" },
		{ title: "Sell", link: "/dashboard/sell" },
	];

	return (
		<div className='w-full flex  bg-white border-b-2'>
			<div className='flex mx-auto space-x-4 transition-all'>
				{navLinks.map((e, index) => (
					<NavLink
						to={e.link}
						key={index}
						className=''
						activeClassName='-mb-0.5 border-b-2 border-green-500'
					>
						{e.title}
					</NavLink>
				))}
			</div>
		</div>
	);
}
