import React, { Suspense, useEffect, useState, lazy } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import Loading from "../Components/Loading";

const RecentlyAddedProducts = lazy(() => import("../Components/Product/ProductListing"));

export default function ProductBuy() {
	let { id } = useParams();
	const [data, setData] = useState([]);
	const [mainImgNumber, setMainImgNumber] = useState(0);

	useEffect(() => {
		fetch(`/api/product/${id}`)
			.then((res) => res.json())
			.then((d) => {
				console.table(d["data"]);
				setData(d["data"]);
			});
	}, []);
	return data !== [] ? (
		<>
			<div className='flex flex-row content-center min-h-screen' key={data.id}>
				<div className='flex flex-col ml-16 mb-3 mt-20'>
					{data["images"] &&
						data["images"].map((e, i) => (
							<img
								src={e["url"]}
								onClick={() => setMainImgNumber(i)}
								className='object-contain w-3/5 h-24 m-3 mt-4 active:border-green-500 border-2'
							/>
						))}
				</div>
				<div className='w-2/5 h-96 mt-16 ml-5 mb-16 '>
					<img
						src={data["images"] && data["images"][mainImgNumber]["url"]}
						alt=''
						className='object-contain w-full h-96'
					/>
				</div>

				<div className='flex flex-col w-2/5 ml-12 mt-3 mr-24 mb-1 justify-center'>
					<h2 className='uppercase text-xl tracking-wide'>{data.productName}</h2>
					<Link to='/home'>Brand : Redmi</Link>

					<div className='flex flex-wrap my-1 text-s space-x-0.5'>
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
						<span className='text-gray-400 inline-block align-top pl-2 text-xs'>
							(1,535 Ratings)
						</span>
					</div>
					<hr className='h-2' />
					<span className='text-red-700'>
						M.R.P:- <span>&#8377;</span>546
					</span>

					<span className='text-red-700 mb-3 '>
						Deal Price:- <span>&#8377;</span>
						{data.price}
					</span>
					<p className='text-gray-800 text-sm'>
						FREE Delivery : Thursday, July 29 <span class='text-blue-500'>Details</span>
					</p>
					<hr className='h-2' />
					<div>
						<h1 className='text-xl text-gray-900'>Key Features</h1>
						<ul className='list-disc pl-1'>
							<li className='text-gray-600 text-sm p-1'>{data.description}</li>
						</ul>
					</div>
					<div className='flex flex-row'>
						<button className='btn-primary w-28 my-2 mx-2 text-white font-bold py-1 px-4 rounded-xs'>
							Add to cart
						</button>
						<button className='btn-primary w-28 my-2 mx-2 text-white font-bold py-1 px-4 rounded-xs'>
							Buy Now
						</button>
					</div>
				</div>
			</div>
			<Suspense fallback={<Loading />}>
				<RecentlyAddedProducts />
			</Suspense>
		</>
	) : (
		<div>Product id is{id}</div>
	);
}
