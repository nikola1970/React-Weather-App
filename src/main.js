var React = require("react");
var ReactDOM = require("react-dom");
var SearchComponent = require("./SearchComponent");

require("./css/styles.scss");


var App = React.createClass({


	render: function() {
		return (
			<SearchComponent />
		);
	}
});

ReactDOM.render(<App/>, document.getElementById("app"));
