import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";

require("./static/index.scss");

const SellerDashboardHome = lazy(() => import("./Pages/ProductDashboard/SellerDashboardHome"));
const ProductPostingForm = lazy(() => import("./Pages/ProductDashboard/ProductPostingForm"));

document.querySelector("body").className = " bg-gray-100";

function ProductPosting() {
	return (
		<>
			<BrowserRouter>
				<Header className='bg-white' />
				<SubHeader />
				<div className='flex min-h-full py-5 sm:py-10 px-4 sm:px-6 lg:px-16 z-40 '>
					<div className='max-w-8xl mx-auto w-full space-y-8 '>
						<Suspense fallback={<div className='loading'></div>}>
							<Route exact path='/dashboard'>
								<SellerDashboardHome />
							</Route>
							<Route path='/dashboard/sell'>
								<ProductPostingForm />
							</Route>
						</Suspense>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}

ReactDOM.render(<ProductPosting />, document.getElementById("root"));
