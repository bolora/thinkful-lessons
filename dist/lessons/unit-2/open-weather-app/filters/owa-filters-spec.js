describe('owaFilters', function() {

	beforeEach(module('openWeatherApp'));

	it('should ...', inject(function($filter) {

        var filter = $filter('owaFilters');

		expect(filter('input')).toEqual('output');

	}));

});