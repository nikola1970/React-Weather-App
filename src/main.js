const React = require("react");
const ReactDOM = require("react-dom");

var SearchComponent = require("./SearchComponent");


var App = React.createClass({


	render: function() {
		return (
			<SearchComponent />
		);
	}
});

ReactDOM.render(<App/>, document.getElementById("app"));
