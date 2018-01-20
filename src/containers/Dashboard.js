import React from "react";
import SearchView from "../views/SearchView";

const Dashboard = props => {
	const View = () => {
		let handler = <SearchView />;
		return handler;
	};
	return (
		<div className="dashboard">
			<View />
		</div>
	);
};

export default Dashboard;
