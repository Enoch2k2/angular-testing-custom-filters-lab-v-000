describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter the list by the persons favorite food', function(){
		var people = [{
			name: 'George',
			favoriteFood: 'pizza'
		},
		{
			name: 'Han',
			favoriteFood: 'chicken'
		},
		{
			name: 'Alex',
			favoriteFood: 'ice cream'
		}]

		var results = $filter('favoriteFood')(people, 'ice cream')

		expect(results.length).toBe(1);
		expect(results[0].name).toBe('Alex');
	});

});
