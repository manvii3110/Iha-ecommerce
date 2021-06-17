import React from "react";
import ReactDOM from "react-dom";

require("./static/index.scss");

const Register = () => {
	// Note to use static files use the following url
	// './static/frontend/img/[filename].[extension]'
	// And to add new images goto './frontend/static/frontend/img/' folder
	return <div>this is registration page</div>;
};

ReactDOM.render(<Register />, document.getElementById("root"));
