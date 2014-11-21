$(function() {
  // Handler for .ready() called.

 	/**********************************
 	********** Ask A Stylist ***************/
	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "ask_submit"
	  });
	  client.draw(query, document.getElementById("total_ask"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "ask_submit",
	    timeframe: "this_week"
	  });
	  client.draw(query, document.getElementById("week_ask"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "ask_submit",
	    groupBy: "looking"
	  });
	  client.draw(query, document.getElementById("looking"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "ask_submit",
	    groupBy: "time"
	  });
	  client.draw(query, document.getElementById("time"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "ask_submit",
	    groupBy: "day_sent"
	  });
	  client.draw(query, document.getElementById("day_sent"), {
	    // Custom configuration here
	  });
	});

});