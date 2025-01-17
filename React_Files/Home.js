import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from "react-router-dom";

require("./static/index.scss");

import Loading from "./Components/Loading";

const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));
const Gallery = lazy(() => import("./Components/Gallery"));
const ProductBuy = lazy(() => import("./Pages/ProductBuy"));
const RecentlyAddedProducts = lazy(() => import("./Components/Product/ProductListing"));

const Home = () => {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Header />
			</Suspense>
			<BrowserRouter>
				<Route exact path='/home'>
					<Suspense fallback={<Loading />}>
						<div className='max-w-screen-2xl mx-auto p-2 sm:p-4'>
							<Gallery />
						</div>
					</Suspense>

					<Suspense fallback={<Loading />}>
						<RecentlyAddedProducts />
					</Suspense>
				</Route>

				<Route path='/product/:id'>
					<Suspense fallback={<Loading />}>
						<ProductBuy />
					</Suspense>
				</Route>
				<Suspense fallback={<Loading />}>
					<Footer />
				</Suspense>
			</BrowserRouter>
		</>
	);
};

ReactDOM.render(<Home />, document.getElementById("root"));
