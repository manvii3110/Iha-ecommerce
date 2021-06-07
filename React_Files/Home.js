import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

require("./static/index.scss");

const Home = () => {
	const [username, setUsername] = useState("world");

	useEffect(() => {
		fetch("./account/check_status")
			.then((res) => res.json())
			.then((data) => {
				setUsername(data.username);
			});
	});

	return (
		<div>
			This is home page
			<h1 className='font-bold'>Hi, {username}</h1>
		</div>
	);
};

ReactDOM.render(<Home />, document.getElementById("root"));
