var mydata;
	
		function getDoc() {
			var mysearchdata = document.getElementById("mysearch").value;
			$.ajax('http://jsonplaceholder.typicode.com/posts/'+ mysearchdata, {
			  method: 'GET'
			}).then(function(data) {
				mydata = data;
				document.getElementById("mytext1").value = mydata.title;
				document.getElementById("mytext2").value = mydata.body;
				document.getElementById("mytext3").value = mydata.userId;
					console.log(mydata);				
			});
		}
		function putDoc(){
			var  postData = {};
			postData.title = document.getElementById("mytext1").value;
			postData.body = document.getElementById("mytext2").value;
			postData.userId = document.getElementById("mytext3").value;
			$.ajax('http://jsonplaceholder.typicode.com/posts', {
			  method: 'POST',
			  data: postData
			}).then(function(data) {
			  console.log(data);
			});
		}
	