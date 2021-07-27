import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { FaShoppingBag } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import Loading from "./Components/Loading";

require("./static/index.scss");

document.querySelector("body").className = " bg-gray-100";

const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));
function Dashboard() {
	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<Header className='bg-white' />
				</Suspense>

				<div className='flex min-h-full py-5 sm:py-10 px-4 sm:px-6 lg:px-16 z-40 '>
					<div className=' max-w-6xl mx-auto w-full space-y-8 min-h-screen'>
						<a
							href='/dashboard/products/'
							className='space-x-2 flex transition-all px-3 py-2 bg-white shadow-none hover:shadow-md rounded-lg border'
						>
							<FaShoppingBag className='my-auto fill-current text-blue-500' />
							<div>Products</div>
						</a>
					</div>
				</div>
				<Suspense fallback={<Loading />}>
					<Footer />
				</Suspense>
			</BrowserRouter>
		</>
	);
}

ReactDOM.render(<Dashboard />, document.getElementById("root"));
