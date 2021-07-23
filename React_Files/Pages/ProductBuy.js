import React from "react";
import { useParams } from "react-router-dom";

export default function ProductBuy() {
	let { id } = useParams();
	return <div>Product id is{id}</div>;
}
