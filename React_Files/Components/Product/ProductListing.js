import React, { useEffect, useState } from "react";
import { CardV, CardH } from "./Cards";

export default function RecentlyAddedProducts() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("/api/product/")
			.then((res) => res.json())
			.then((d) => {
				console.log(d);
				setData(d["data"]);
			});
	}, []);

	return data !== [] ? (
		<div className='space-y-2'>
			<h1 className='text-3xl p-2 sm:p-4  max-w-screen-2xl mx-auto '>
				Recently Added Products
			</h1>
			<div className=' bg-green-50 px-2 sm:px-4'>
				<div className='px-2 py-4 grid-flow-col grid  overflow-x-auto space-x-4 max-w-screen-2xl mx-auto overflow-x-auto'>
					{data.map((d) => (
						<CardV data={d} />
					))}
					<div className='h-full w-2'></div>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
}
