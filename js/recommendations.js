$(function() {
  // Handler for .ready() called.
	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "stylist_sent_recommendation"
	  });
	  client.draw(query, document.getElementById("total_stylist"), {
	    // Custom configuration here
	  });
	});

	  Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "stylist_sent_recommendation",
	    timeframe: "this_week"
	  });
	  client.draw(query, document.getElementById("week_stylist"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "stylist_sent_recommendation",
	    groupBy: "Stylist"
	  });
	  client.draw(query, document.getElementById("stylists"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "stylist_sent_recommendation",
	    groupBy: "product"
	  });
	  client.draw(query, document.getElementById("stylist_products"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "stylist_sent_recommendation",
	    groupBy: "CustomerEmail"
	  });
	  client.draw(query, document.getElementById("stylist_emails"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "stylist_sent_recommendation",
	    groupBy: "day_sent"
	  });
	  client.draw(query, document.getElementById("stylist_day"), {
	    // Custom configuration here
	  });
	});

});