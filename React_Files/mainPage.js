import React, { Component, Suspense } from "react";

import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter, NavLink } from "react-router-dom";

import Header from "./Components/Header";

require("./static/index.scss");

class MainPage extends Component {
	render() {
		return (
			<div className='flex items-center justify-center h-screen'>
				<h1>This si main Page div</h1>
				<div className='text-black font-bold rounded-lg border shadow-lg p-10 m-20 bg-white dark:bg-gray-800'>
					<div>
						Webpack 5 boilerplate with React 17, Tailwind 2, using
						babel, sass, with a hot dev server and an optimized
						production build.
						<div className={"container mx-auto px-4"}>
							<div class='bg-gradient-to-r from-green-400 to-green-500 hover:from-pink-500 hover:to-yellow-500 '>
								{" "}
								This is my graident apps This is new gradient
								But now this laso new one
							</div>
						</div>
					</div>
					<BrowserRouter>
						<div>
							<NavLink to='/header'>Header</NavLink>
						</div>
					</BrowserRouter>
				</div>
				<Suspense fallback={<div>Loading</div>}>
					<Route path='/header' component={Header} />
				</Suspense>
			</div>
		);
	}
}

ReactDOM.render(<MainPage />, document.getElementById("root"));
