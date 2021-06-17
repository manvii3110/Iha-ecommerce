import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

require("./static/index.scss");

const Home = () => {
	const a = "You Need to Sign in";
	const [username, setName] = useState(a);
	const [data, setData] = useState(<></>);

	useEffect(() => {
		fetch("./api/account/check_status")
			.then((d) => d.json())
			.then((data) => {
				setData(
					<img
						className='h-16 w-16 rounded-full my-auto mt-4'
						src={data.userImage}
					/>,
				);
				if (data.authenticated) {
					setName(data.username);
				}
				console.log(data);
			});
	}, []);
	return (
		<div className='p-6'>
			{data}
			<h1 className='font-bold text-7xl text-center mx-auto flex content-center'>
				Hi, {username}
			</h1>
		</div>
	);
};

ReactDOM.render(<Home />, document.getElementById("root"));
