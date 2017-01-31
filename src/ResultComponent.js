var React = require("react");


var ResultComponent = ({location, temp}) => {

	return (
		<div>
			<p>Current temperature in {location} is {temp}</p>
		</div>
	)

};

module.exports = ResultComponent;