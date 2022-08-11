import React, { useState, useEffect } from "react";

//create your first component

const Home = () => {
	const [color, setColor] = useState({
		red: "",
		yellow: "",
		green: "",
	});

	const handelChange = (event) => {
		console.log(event.target.id);
		const newColor = { [event.target.id]: "selected" };
		setColor(newColor);
	};

	console.log(color);

	return (
		<div>
			<div id="traficTop"></div>
			<div id="container">
				<div
					id="red"
					className={"red light " + color.red}
					onClick={handelChange}></div>
				<div
					id="yellow"
					className={"yellow light " + color.yellow}
					onClick={handelChange}></div>
				<div
					id="green"
					className={"green light " + color.green}
					onClick={handelChange}></div>
			</div>
		</div>
	);
};

export default Home;
