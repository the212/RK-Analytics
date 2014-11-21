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

	  var query2 = new Keen.Query("count", {
	    eventCollection: "ask_submit",
	    timeframe: "this_week"
	  });
	  client.draw(query2, document.getElementById("week_ask"), {
	    // Custom configuration here
	  });

	  var query3 = new Keen.Query("count", {
	    eventCollection: "ask_submit",
	    groupBy: "looking"
	  });
	  client.draw(query3, document.getElementById("looking"), {
	    // Custom configuration here
	  });

	  var query4 = new Keen.Query("count", {
	    eventCollection: "ask_submit",
	    groupBy: "time"
	  });
	  client.draw(query4, document.getElementById("time"), {
	    // Custom configuration here
	  });

	  var query5 = new Keen.Query("count", {
	    eventCollection: "ask_submit",
	    groupBy: "day_sent"
	  });
	  client.draw(query5, document.getElementById("day_sent"), {
	    // Custom configuration here
	  });

	});

});