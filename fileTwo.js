/**
 * @author Prem Khanal
 */
	
	/* This is my new function to introduce the latestData
	 * 
	 */
	function latestData(mnewJobData) {
	
	console.log(mnewJobData);
	
		

		
		var googleDataSource = new google.visualization.DataTable();
		
		googleDataSource.addColumn('string'), mnewJobData.columns[0];
		googleDataSource.addColumn('number'), mnewJobData.columns[1];
		googleDataSource.addRows(mnewJobData.rows);
		
		
		
		var option = {title: "Worsening Unempyment"
		};
		
		
		var myMarchData = new google.visualization.LineChart(document.getElementById("dataBankDiv"));
		
		
		
		myMarchData.draw(googleDataSource, option);
		
	
		
	}
	
	function mchartData(){
		
	console.log("show my beautiful chart");
	
	/*Now I am lading the get function which is help me to get the  external data that I have saved in my desktop folder.
	 * 
	 */
	
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1Au1IPB-eyi1a6DhXaNJVJGNJEXtbAdZDSWU1TIQk&key=AIzaSyDKXOjTWWXFQlzg_fSmdUNjpsaj-RM0ofA", latestData, "json");
	
	}
	
	/*This the local file where I have stored the data.
	 * 
	 */
	
	function mdataSource() {
		
    console.log("This is my new page");
    
    /*Here I work with google chart loading fucntion. This is also the place where I am loading the google viz. library.
     * 
     */
    
    	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "mchartData"
    
   });
    
   	
	}
	
	$(document).ready(mdataSource);
