angular.module('countriesCapitals').factory('content',function($sce) {

	var content = {
		title: "Countries and Capitals",
		population_of_country:"Population of Country",
		area:"Area",
		capital:"Capital",
		population_of_capital:"Population of Capital",
		neighbors:"neighbors",
		browse_countries:"Browse Countries",
		home:"Home",
		intro: $sce.trustAsHtml('This is an application that utilizes the <a href="http://www.geonames.org/" target="new">geonames.org</a> service to provide a list of countries and information about each country\'s capitals'),
		name:"Name",
		country_code:"Country Code",
		capital:"Capital",
		area_in_sq_miles:"Area in sq miles",
		population:"Population",
		continent:"Continent"
	};

	return content;
});