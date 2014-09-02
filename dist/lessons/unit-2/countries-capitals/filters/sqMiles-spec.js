describe('sqMiles', function() {

	beforeEach(module('countriesCapitals'));

	it('should ...', inject(function($filter) {

        var filter = $filter('sqMiles');

		expect(filter('input')).toEqual('output');

	}));

});