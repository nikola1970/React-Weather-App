var React = require("react");
require("./css/InputComponent.scss");

var InputComponent = React.createClass({

	makeSearch: function(e){

		e.preventDefault();

		var location = this.refs.location.value;

		this.refs.location.value = "";

		this.props.onSearch(location);
	},

	render: function(){
		return (
			<div>
				<form onSubmit={this.makeSearch}>
					<input type="text" ref="location" />
					<button type="submit">Hit Me!</button>
				</form>
			</div>
		);
	}
});

module.exports = InputComponent; 