angular.module('openWeatherApp')
.filter('direction', function() {
	var directions = ["North","Northeast","East","Southeast","South","Southwest","West","Northwest","North"];
	return function(deg) {
		return directions[Math.round((deg - 22.5)/45)];
	};
})
.filter('windspeed', function() {
	return function(mps) {
		return (Math.round(mps * 3600 / 1610.3*1000)/1000).toFixed(1);
	};
})
.filter('typewind', function() {
	var typewindOptions = ["Still air","Light breeze","Moderate breeze","Gusty","Heavy winds","Run for the hills"],
	thresholds = [0,5,10,15,20,25],
	typewind;
	return function(mps) {
		_.each(thresholds, function(speed,index){
			if(speed > mps && !typewind) {
				typewind = index - 1;
			}
		});
		return typewindOptions[typewind];
	};
})
.filter('farenheit', function() {
	return function(deg) {
		return Math.round(1.8*(deg-273)+32);
	};
});