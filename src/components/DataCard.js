import React from "react";

const DataCard = props => {
	const {
		artistName,
		trackName,
		collectionName,
		artworkUrl100,
		trackPrice,
		currency
	} = props.trackDetails;
	return (
		<div className="datacard">
			<div className="artwork">
				<img src={artworkUrl100.replace("100x100", "600x600")} alt="" />
			</div>
			<div className="overlay">
				<div>
					<div className="bold">{trackName}</div>
					<div className="regular">{collectionName}</div>
				</div>
				<div className="regular">{artistName}</div>
				<div className="green-badge">{currency + " " + trackPrice}</div>
			</div>
		</div>
	);
};

export default DataCard;
