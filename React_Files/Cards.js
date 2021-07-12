import React from "react";
import ReactDOM from "react-dom";

require("./static/index.scss");

const Card_v = () => {
	return <div>This is card vertical</div>;
};
const Card_h = () => {
	return <div>This is card horizontal</div>;
};
const Cards = () => {
	return (
		<div>
			These are cards
			<Card_h /> <Card_v />
		</div>
	);
};

ReactDOM.render(<Cards />, document.getElementById("root"));
