var React = require("react");


var ResultComponent = ({location, temp}) => {

	return (
		<div>
			<p>Current temperature in {location} is <span className="temp">{temp} &deg;C</span></p>
		</div>
	)

};

module.exports = ResultComponent;