import React from "react";

const DataCard = props => {
	const {
		artistName,
		trackName,
		collectionName,
		artworkUrl100
	} = props.trackDetails;
	return (
		<div className="datacard">
			<div className="image">
				<img src={artworkUrl100} alt={trackName} />
			</div>
			<div className="text-data">
				<div className="dark">{trackName}</div>
				<div className="lightdark">{artistName}</div>
				<div className="lightgray">{collectionName}</div>
			</div>
		</div>
	);
};

export default DataCard;
