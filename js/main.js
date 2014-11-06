$(function() {
  // Handler for .ready() called.

 	var client = new Keen({
	  projectId: "545a81ed80a7bd4b5ca2c5ea",
	  readKey: "264eab35364a3a8158c6a27f7b2272880cd58daef4dea0ae81a15b9c11fcc993a5faf3efd320d77970281889c78bd6659c44636250d7cdabd3f2a017c1a75c99583bc5e9d591da6e73395c4c44466e45bb1a2a469fa2be34eeae9b3f0089628da6fdeb203b9e9145778623d0d9632b91"
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "ask_stylist_submit"
	  });
	  client.draw(query, document.getElementById("total_ask"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "ask_stylist_submit",
	    timeframe: "this_week"
	  });
	  client.draw(query, document.getElementById("week_ask"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "ask_stylist_submit",
	    groupBy: "looking"
	  });
	  client.draw(query, document.getElementById("looking"), {
	    // Custom configuration here
	  });
	});

	Keen.ready(function(){
	  var query = new Keen.Query("count", {
	    eventCollection: "ask_stylist_submit",
	    groupBy: "time"
	  });
	  client.draw(query, document.getElementById("time"), {
	    // Custom configuration here
	  });
	});

});