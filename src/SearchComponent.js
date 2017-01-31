var React = require("react");

var InputComponent = require("./InputComponent");
var ResultComponent = require("./ResultComponent");
var getTemp = require("./OpenWeatherMap");


var SearchComponent = React.createClass({


	getInitialState: function() {
		return {
			location: "Beograd",
			temp: 40
		}
	},

	handleSearch: function(location) {

		var that = this;
		
		getTemp(location).then(function(temp){
	
			that.setState({
				location: location,
				temp: temp
			});

		});
	},

	render: function(){

		var {location, temp} = this.state;

		return (
			<div>
				<h1>Search for a city:</h1>
				<InputComponent onSearch={this.handleSearch} />
				<ResultComponent location={location} temp={temp} />
			</div>
		);
	}
});

module.exports = SearchComponent;



