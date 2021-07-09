import React from "react";
import { NavLink } from "react-router-dom";

export default function SellerDashboardHome() {
	return (
		<div>
			<NavLink to='/dashboard/sell'>Sell</NavLink>
		</div>
	);
}
