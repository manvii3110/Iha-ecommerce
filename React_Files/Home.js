import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Header from "./Components/Header";

require("./static/index.scss");

const Home = () => {
	const a = "You Need to Sign in";
	const [username, setName] = useState(a);
	const [data, setData] = useState(<></>);

	useEffect(() => {
		fetch("./api/account/check_status")
			.then((d) => d.json())
			.then((data) => {
				if (data.authenticated) {
					setName(data.first_name);
					setData(
						<img
							className='h-16 w-16 rounded-full my-auto mt-4'
							src={data.userImage}
						/>,
					);
				}
				console.log(data);
			});
	}, []);

	const urlsAvaiable = [
		{
			name: "Home",
			url: "./",
		},
		{ name: "Add New Porduct", url: "./createproduct" },
		{ name: "Create new Account", url: "./register" },
		{ name: "Sign In", url: "./signin" },
	];
	return (
		<>
			<Header />
			<div className='p-6'>
				{data}
				<h1 className='font-bold text-7xl'>Hi, {username}</h1>
				<hr className='mt-8' />
				<div className='grid gap-y-3'>
					<h1 class='font-bold text-2xl '>Available Urls </h1>
					{urlsAvaiable.map((i, index) => {
						return (
							<a
								href={i.url}
								key={index}
								className='text-blue-500 no-underline hover:underline hover:text-blue-900'
							>
								{i.name}
							</a>
						);
					})}
				</div>
			</div>
		</>
	);
};

ReactDOM.render(<Home />, document.getElementById("root"));
