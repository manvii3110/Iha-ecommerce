import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import ReactDOM from "react-dom";

const Header = lazy(() => import("./Components/Header"));

require("./static/index.scss");

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<NavLink to='/header'>Header</NavLink>
					<Suspense fallback={<div>Loading...</div>}>
						<Header />
						<Switch>
							<Route exact path='/header' component={Header} />
						</Switch>
					</Suspense>
				</BrowserRouter>
				<div className='flex items-center justify-center h-screen'>
					<h1>This si main Page div</h1>
					<div className='text-black font-bold rounded-lg border shadow-lg p-10 m-20 bg-white dark:bg-gray-800'>
						<div>
							Webpack 5 boilerplate with React 17, Tailwind 2,
							using babel, sass, with a hot dev server and an
							optimized production build.
							<div className={"container mx-auto px-4"}>
								<div class='bg-gradient-to-r from-green-400 to-green-500 hover:from-pink-500 hover:to-yellow-500 '>
									{" "}
									This is my graident apps This is new
									gradient But now this laso new one
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
