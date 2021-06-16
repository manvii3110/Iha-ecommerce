import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";

require("./static/index.scss");

const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));

const Temp = () => {
	const [username, setName] = useState("You Need to Sign in");

	useEffect(() => {
		fetch("./api/account/check_status")
			.then((d) => d.json())
			.then((data) => {
				if (data.authenticated) {
					setName(data.username);
				}
				console.log(data);
			});
	}, []);
	return (
		<div>
			<Suspense fallback={<div className='loading'></div>}>
				<Header />
			</Suspense>
			<h1 class='font-bold text-7xl text-center mx-5'>Hi, {username}</h1>
			<Suspense fallback={<div className='loading'></div>}>
				<Footer />
			</Suspense>
		</div>
	);
};

ReactDOM.render(<Temp />, document.getElementById("root"));
