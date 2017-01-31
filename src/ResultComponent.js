var React = require("react");


var ResultComponent = ({location, temp}) => {

	return (
		<p>Current temperature in {location} is {temp}</p>
	)

};

module.exports = ResultComponent;