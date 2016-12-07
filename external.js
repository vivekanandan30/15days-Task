function createNew(){
		var temp_Name = document.getElementById("Name");
		var temp_Loc = document.getElementById("Loc");
		var temp_busStop = document.getElementById("busStop");
		var temp_railway = document.getElementById("railway");
		var temp_airport = document.getElementById("airport");
		var temp_thumPath = document.getElementById("thumPath");
		var temp_MainPath = document.getElementById("MainPath");
		var temp_Decp = document.getElementById("Decp");

	var  postData = {};
	postData.templeName = temp_Name.value;
	postData.location = temp_Loc.value;
	postData.nearestBusStop = temp_busStop.value;
	postData.nearestRailwayStation = temp_railway.value;
	postData.nearestAirport = temp_airport.value;
	postData.thumbnailPath = temp_thumPath.value;
	postData.MainImagepath = temp_MainPath.value;
	postData.description = temp_Decp.value;
	$.ajax('http://localhost:3000/tempdetails', {
	   method: 'POST',
		  data: postData
		}).then(function(data) {
		  console.log(data);
		});
	alert("Added successfully!!!");
}

function searching(){
	var temp_Id = document.getElementById("tempID");
	var temp_Name = document.getElementById("mod_Name");
	var temp_Loc = document.getElementById("mod_Loc");
	var temp_busStop = document.getElementById("mod_busStop");
	var temp_railway = document.getElementById("mod_railway");
	var temp_airport = document.getElementById("mod_airport");
	var temp_thumPath = document.getElementById("mod_thumPath");
	var temp_MainPath = document.getElementById("mod_MainPath");
	var temp_Decp = document.getElementById("mod_Decp");

	$.ajax('http://localhost:3000/tempdetails/' + parseInt(temp_Id.value), {
	   method: 'GET'
		}).then(function(data) {
			mydata = data;
			temp_Name.setAttribute("value", mydata.templeName);
			temp_Loc.setAttribute("value", mydata.location);
			temp_busStop.setAttribute("value", mydata.nearestBusStop);
			temp_railway.setAttribute("value", mydata.nearestRailwayStation);
			temp_airport.setAttribute("value", mydata.nearestAirport);
			temp_thumPath.setAttribute("value", mydata.thumbnailPath);
			temp_MainPath.setAttribute("value", mydata.MainImagepath);
			temp_Decp.innerHTML = mydata.description;
		  console.log(data);
		});

}

function updateNew(){
	var temp_Id = document.getElementById("tempID");
	var temp_Name = document.getElementById("mod_Name");
	var temp_Loc = document.getElementById("mod_Loc");
	var temp_busStop = document.getElementById("mod_busStop");
	var temp_railway = document.getElementById("mod_railway");
	var temp_airport = document.getElementById("mod_airport");
	var temp_thumPath = document.getElementById("mod_thumPath");
	var temp_MainPath = document.getElementById("mod_MainPath");
	var temp_Decp = document.getElementById("mod_Decp");

	var  postData = {};
	postData.templeName = temp_Name.value;
	postData.location = temp_Loc.value;
	postData.nearestBusStop = temp_busStop.value;
	postData.nearestRailwayStation = temp_railway.value;
	postData.nearestAirport = temp_airport.value;
	postData.thumbnailPath = temp_thumPath.value;
	postData.MainImagepath = temp_MainPath.value;
	postData.description = temp_Decp.value;
	$.ajax('http://localhost:3000/tempdetails/' + parseInt(temp_Id.value), {
	   method: 'PUT',
		  data: postData
		}).then(function(data) {
		  console.log(data);
		});
	alert("Updated successfully!!!");
}

function myclear(){
	var Add_temp_Name = document.getElementById("Name");
	var Add_temp_Loc = document.getElementById("Loc");
	var Add_temp_busStop = document.getElementById("busStop");
	var Add_temp_railway = document.getElementById("railway");
	var Add_temp_airport = document.getElementById("airport");
	var Add_temp_thumPath = document.getElementById("thumPath");
	var Add_temp_MainPath = document.getElementById("MainPath");
	var Add_temp_Decp = document.getElementById("Decp");
	var Mod_temp_Id = document.getElementById("tempID");
	var Mod_temp_Name = document.getElementById("mod_Name");
	var Mod_temp_Loc = document.getElementById("mod_Loc");
	var Mod_temp_busStop = document.getElementById("mod_busStop");
	var Mod_temp_railway = document.getElementById("mod_railway");
	var Mod_temp_airport = document.getElementById("mod_airport");
	var Mod_temp_thumPath = document.getElementById("mod_thumPath");
	var Mod_temp_MainPath = document.getElementById("mod_MainPath");
	var Mod_temp_Decp = document.getElementById("mod_Decp");
	
	Add_temp_Name.value = "";
	Add_temp_Loc.value = "";
	Add_temp_busStop.value = "";
	Add_temp_railway.value = "";
	Add_temp_airport.value = "";
	Add_temp_thumPath.value = "";
	Add_temp_MainPath.value = "";
	Add_temp_Decp.value = "";
	Mod_temp_Id.value = "";
	Mod_temp_Name.value = "";
	Mod_temp_Loc.value = "";
	Mod_temp_busStop.value = "";
	Mod_temp_railway.value = "";
	Mod_temp_airport.value = "";
	Mod_temp_thumPath.value = "";
	Mod_temp_MainPath.value = "";
	Mod_temp_Decp.value = "";
}

function deleteSearch(){
	$.ajax('http://localhost:3000/tempdetails', {
		  method: 'GET'
			}).then(function(data) {
			mydata = data;
			var tab = document.getElementById("mytable2");
			
			for(var i=0; i<mydata.length; i++){
				var myrow = tab.insertRow(-1);
				var mycell1 = myrow.insertCell(0);
				mycell1.setAttribute('width','350')
				var mycell2 = myrow.insertCell(1);
				var mycell3 = myrow.insertCell(2);
				mycell1.innerHTML = "<img class='img-responsive' src="+ mydata[i].thumbnailPath +" alt='Random Name'>";
				mycell2.innerHTML = "<strong>Temple Name:  </strong>" +
				 mydata[i].templeName + "<br><strong>Location:  </strong>" +
				  mydata[i].location + "<br><strong>Nearest Bus Stop:  </strong>" +
				   mydata[i].nearestBusStop +
				    "<br><strong>Nearest Railway Station:  </strong>" +
				     mydata[i].nearestRailwayStation +
				      "<br><strong>Nearest Airport:  </strong>" +
				       mydata[i].nearestAirport;

				mycell3.innerHTML = "<button class='btn btn-default' type='button' onclick='deletion("+ mydata[i].id +")'><span class='glyphicon glyphicon-trash'></span></button>";
			}
			console.log(mydata);
		});			
	
}

function deletion(a){
	$.ajax('http://localhost:3000/tempdetails/' + a, {
	   method: 'DELETE',
	   success:function(){
	   $( "#delete" ).load( "create.html", function() {
		  alert( "Load was performed." );
		});
	   }
	   });
}