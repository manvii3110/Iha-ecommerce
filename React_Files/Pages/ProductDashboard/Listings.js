import React, { useEffect, useState } from "react";

export default function Listings() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("/api/product/myProducts")
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
		<div className='bg-white rounded-lg border overflow-hidden'>
			<div className='px-3 py-2 text-xl'>Active Listings</div>

			<table className='table-fixed bg-white'>
				<thead>
					<tr className='text-gray-700 uppercase text-xs py-4 border-t'>
						<th className='w-9/12 px-3 py-2'>Title</th>
						<th className='w-1/12 px-3 py-2'>Views</th>
						<th className='w-1/12 px-3 py-2'>Orders</th>
						<th className='w-1/12 px-3 py-2'>Cancellations</th>
					</tr>
				</thead>
				<tbody>
					{data.map((d, index) => (
						<>
							<tr className='border-t hover:bg-gray-200 px-2 py-1' key={index}>
								{/* Title */}
								<td className='flex max-h-12 '>
									<div className='h-18 w-24 flex'>
										<img
											className='mx-auto object-contain object-center h-full w-auto my-auto bg-cover bg-center rounded-lg p-2'
											src={d["images"][0]["url"]}
										/>
									</div>
									<a
										href={`/product/${d.id}`}
										className='my-auto px-2 text-gray-900 hover:text-blue-600 cursor-pointer truncate'
									>
										{d.productName}
									</a>
								</td>
								{/* Views */}
								<td className='text-center'>{d.views}</td>
								{/* Orders */}
								<td className='text-center'>0</td>
								{/* Cancellations */}
								<td className='text-center'>0</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
		</div>
	);
}
