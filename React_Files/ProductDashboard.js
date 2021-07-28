import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

// Stylings
require("./static/index.scss");
import Loading from "./Components/Loading";

document.querySelector("body").className = " bg-gray-100";

const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));

const ProductPostingForm = lazy(() => import("./Pages/ProductDashboard/New"));
const Listings = lazy(() => import("./Pages/ProductDashboard/Listings"));
const Overview = lazy(() => import("./Pages/ProductDashboard/Overview"));
const Blocked = lazy(() => import("./Pages/ProductDashboard/Blocked"));

export default function ProductDashboard() {
	const navLinks = [
		{ title: "Overview", link: "/dashboard/products/", component: <Overview /> },
		{ title: "Active", link: "/dashboard/products/listings", component: <Listings /> },
		{ title: "Blocked", link: "/dashboard/products/blocked", component: <Blocked /> },
	];

	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Header className='bg-white' />
			</Suspense>
			<div className='flex min-h-full py-5 sm:py-10 px-4 sm:px-6 lg:px-16 z-40 '>
				<Route exact path='/dashboard/products/new/'>
					<Suspense fallback={<Loading />}>
						<ProductPostingForm />
					</Suspense>
				</Route>
				<Route exact path={[navLinks.map((e) => e.link)]}>
					<Suspense fallback={<Loading />}>
						<div
							className={`${
								window.location.pathname === "/dashboard/products/new/"
									? "hidden"
									: ""
							} mx-auto w-full min-h-screen`}
						>
							<div className=' max-w-6xl mx-auto space-y-4'>
								<div className='w-100'>
									<h2 className='flex mb-4 text-xl sm:text-3xl font-medium sm:font-normal text-gray-900'>
										Products
										<NavLink
											to='/dashboard/products/new/'
											className='btn-primary-sm ml-auto my-auto'
										>
											Add a New Product
										</NavLink>
									</h2>
									<div className='flex border-b space-x-12'>
										{navLinks.map(({ link, title }, index) => (
											<NavLink
												exact
												to={link}
												key={index}
												className='transition-all px-2 py-2 text-gray-400 hover:text-gray-900'
												activeClassName='border-b-2 border-green-500 text-gray-900'
											>
												{title}
											</NavLink>
										))}
									</div>
								</div>
								{navLinks.map(({ link, component }, index) => (
									<Suspense fallback={<Loading />} key={index}>
										<Route exact path={link}>
											{component}
										</Route>
									</Suspense>
								))}
							</div>
						</div>
					</Suspense>
				</Route>
			</div>
			<Suspense fallback={<Loading />}>
				<Footer />
			</Suspense>
		</BrowserRouter>
	);
}

ReactDOM.render(<ProductDashboard />, document.getElementById("root"));
