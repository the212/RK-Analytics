$(function() {
  // Handler for .ready() called.

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
	    eventCollection: "set_appointment_request",
	    groupBy: "time"
	  });
	  client.draw(query, document.getElementById("appoinment_times"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "set_appointment_request",
	    groupBy: "day"
	  });
	  client.draw(query, document.getElementById("appoinment_days"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "set_appointment_request",
	    groupBy: "product"
	  });
	  client.draw(query, document.getElementById("appoinment_products"), {
	    // Custom configuration here
	  });
	});

});