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
	    eventCollection: "set_appointment_request"
	  });
	  client.draw(query, document.getElementById("total_appointments"), {
	    // Custom configuration here
	  });
	});

 	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "ask_stylist_submit"
	  });
	  client.draw(query, document.getElementById("total_ask"), {
	    // Custom configuration here
	  });
	});

});