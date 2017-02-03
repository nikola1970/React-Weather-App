var React = require("react");


var InputComponent = React.createClass({

	makeSearch: function(e){

		e.preventDefault();

		var location = this.refs.location.value;

		this.refs.location.value = "";

		if (location.trim().length > 1) {
			this.props.onSearch(location);
		} else {
			alert("You have to enter city name");
		}

		
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