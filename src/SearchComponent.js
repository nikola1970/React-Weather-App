var React = require("react");

var InputComponent = require("./InputComponent");
var ResultComponent = require("./ResultComponent");
var getTemp = require("./OpenWeatherMap");


var SearchComponent = React.createClass({


	getInitialState: function() {
		return {
			location: "",
			temp: ""
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

		var showResult = () => {
			if (location && temp) {
				return <ResultComponent location={location} temp={temp} />;
			}
		}

		return (
			<div className="weather">
				<h1>Search a city for a temperature:</h1>
				<InputComponent onSearch={this.handleSearch} />
				{showResult()}
			</div>
		);
	}
});

module.exports = SearchComponent;



