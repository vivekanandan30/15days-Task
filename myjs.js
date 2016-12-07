var templeDetails = (function(){
	getTempDetails = function(){
		$.ajax('http://localhost:3000/tempdetails', {
		  method: 'GET'
			}).then(function(data) {
			mydata = data;
			var tab = document.getElementById("mytable");
			
			for(var i=0; i<mydata.length; i++){
				var myrow = tab.insertRow(-1);
				var mycell1 = myrow.insertCell(0);
				mycell1.setAttribute('width','350')
				var mycell2 = myrow.insertCell(1);
				mycell1.innerHTML = "<a href='#'><img class='img-responsive' src="+ mydata[i].thumbnailPath +" alt='Random Name' onclick='newDetailPage("+ mydata[i].id +")'></a>";
				mycell2.innerHTML = "<strong>Temple Name:  </strong>" +
				 mydata[i].templeName + "<br><strong>Location:  </strong>" +
				  mydata[i].location + "<br><strong>Nearest Bus Stop:  </strong>" +
				   mydata[i].nearestBusStop +
				    "<br><strong>Nearest Railway Station:  </strong>" +
				     mydata[i].nearestRailwayStation +
				      "<br><strong>Nearest Airport:  </strong>" +
				       mydata[i].nearestAirport;			
			}
			//console.log(mydata);
		});			
	},
	myFilterDetails = function(a){
		$.ajax('http://localhost:3000/tempdetails', {
		  method: 'GET'
			}).then(function(data) {
			mydata = data;
			var myFilterData = mydata.filter(function(item){
				//console.log(item);
            return item["templeName"].toLowerCase().indexOf(a.toLowerCase())!=-1
            });
            var tab = document.getElementById("mytable");
            for(var i=0; i<myFilterData.length; i++){
            var myrow = tab.insertRow(-1);
				var mycell1 = myrow.insertCell(0);
				mycell1.setAttribute('width','350')
				var mycell2 = myrow.insertCell(1);
				mycell1.innerHTML = "<a href='#'><img class='img-responsive' src="+ myFilterData[0].thumbnailPath +" alt='Random Name' onclick='newDetailPage("+ myFilterData[0].id +")'></a>";
				mycell2.innerHTML = "<strong>Temple Name:  </strong>" +
				 myFilterData[0].templeName + "<br><strong>Location:  </strong>" +
				  myFilterData[0].location + "<br><strong>Nearest Bus Stop:  </strong>" +
				   myFilterData[0].nearestBusStop +
				    "<br><strong>Nearest Railway Station:  </strong>" +
				     myFilterData[0].nearestRailwayStation +
				      "<br><strong>Nearest Airport:  </strong>" +
				       myFilterData[0].nearestAirport;
        	}
			console.log(myFilterData[0]);
		});
	}


	return{
		getTempleDetails:getTempDetails,
		filterDetails:myFilterDetails

	};

})();

function newDetailPage(a){
	//alert(a);
	sessionStorage.setItem("sent", a);
	window.open("detailpage.html");

}