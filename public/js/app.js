var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');

	// ============ collections ============
	App.cities = new App.Collections.CitiesCollection();
  App.itineraries = new App.Collections.ItinerariesCollection();
  App.users = new App.Collections.UsersCollection();

  // ============ main view ============
  App.mainView = new App.Views.MainView();

  // Async issue

 	// App.cityItineraryList = new 
 	// 	App.Views.CityItineraryList( 
 	// 		{ model: 
 	// 			App.cities.findWhere( 
 	// 				{g_city_id: 'ChIJ674hC6Y_WBQRujtC6Jay33k'})  
 	// 	});

 	// App.cityItineraryList.fillItineraries();

});