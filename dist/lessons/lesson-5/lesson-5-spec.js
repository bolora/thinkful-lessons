describe('Test of services data in Lesson 5 Controller', function() {

	beforeEach(module('thinkfulLessons'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('Lesson5Ctrl', {$scope: scope});
    }));	

	it('Search for cats should yield a return', inject(function(lesson5Service) {

		expect(lesson5Service.get("cats").then()).toBeDefined();
		
	}));

});