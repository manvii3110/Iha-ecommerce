import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductBuy() {
	let { id } = useParams();
	const [data, setData] = useState([]);

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
			id:{data.id}
			description {data.description}
			created {data.created}
			{data["images"] &&
				data["images"].map((e) => <img src={e["url"]} className='w-16 h-16' />)}
		</>
	) : (
		<div>Product id is{id}</div>
	);
}
