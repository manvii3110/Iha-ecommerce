import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from "react-router-dom";

require("./static/index.scss");

import Header from "./Components/Header";
import Loading from "./Components/Loading";

const Gallery = lazy(() => import("./Components/Gallery"));
const RecentlyAddedProducts = lazy(() => import("./Components/Product/ProductListing"));

const Home = () => {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
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
				</Suspense>
			</BrowserRouter>
		</>
	);
};

ReactDOM.render(<Home />, document.getElementById("root"));
