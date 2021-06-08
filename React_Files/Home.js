import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

require("./static/index.scss");

const Home = () => {
	const [username, setName] = useState("You Need to Sign in");

	useEffect(() => {
		fetch("./api/account/check_status")
			.then((d) => d.json())
			.then((data) => {
				setName(data.username);
				console.log(data);
			});
	}, []);
	return (
		<div>
			<h1 class='font-bold text-7xl text-center mx-5'>Hi, {username}</h1>
		</div>
	);
};

ReactDOM.render(<Home />, document.getElementById("root"));
