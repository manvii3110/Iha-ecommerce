import React, { useEffect, useState } from "react";

export default function Blocked() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("/api/product/myProducts/blocked")
			.then((res) => res.json())
			.then((d) => {
				console.log(d);
				setData(d["data"]);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	return (
		<div className='bg-red-100 rounded-lg border border-red-500 overflow-hidden'>
			<div className='px-3 py-2 text-xl text-red-700 font-medium'>Blocked Listings</div>

			<table className='table-fixed bg-white'>
				<thead>
					<tr className='text-gray-700 uppercase text-xs py-4 border-t border-red-500'>
						<th className='w-9/12 px-3 py-2'>Title</th>
						<th className='w-1/12 px-3 py-2'>Views</th>
						<th className='w-1/12 px-3 py-2'>Orders</th>
						<th className='w-1/12 px-3 py-2'>Cancellations</th>
					</tr>
				</thead>
				<tbody>
					{data.map(({ id, productName, images, views, block_reason }, index) => (
						<>
							<tr className='border-t px-2 py-1' key={index}>
								{/* Title */}
								<td className='flex max-h-12 '>
									<div className='h-18 w-24 flex'>
										<img
											className='mx-auto object-contain rounded object-center h-full w-auto my-auto bg-cover bg-center rounded-lg p-2'
											src={images[0]["url"]}
										/>
									</div>
									<a
										href={`/product/${id}`}
										className='my-auto px-2 text-gray-900 hover:text-blue-600 cursor-pointer truncate'
									>
										{productName}
									</a>
								</td>
								{/* Views */}
								<td className='text-center'>{views}</td>
								{/* Orders */}
								<td className='text-center'>0</td>
								{/* Cancellations */}
								<td className='text-center'>0</td>
							</tr>
							<div id={`item${id}`} className='ml-10 px-2 py-3 text-red-600'>
								<div className='relative  border-l-2 pl-14'>
									<label>Block Reason:</label>
									{block_reason}
								</div>
							</div>
						</>
					))}
				</tbody>
			</table>
		</div>
	);
}
