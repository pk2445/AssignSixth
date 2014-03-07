/**
 * @author Prem Khanal
 */
	
	/* This is my new function to introduce the latestData
	 * 
	 */
	function latestData(mnewJobData) {
	
	console.log(mnewJobData);
	
		
	/*This is google array to data table by putting the name of the function and data list
		 * 
		 */
		
		var googleDataSource = new google.visualization.DataTable();
		
		googleDataSource.addColumn('string'), mnewJobData.columns[0];
		googleDataSource.addColumn('number'), mnewJobData.columns[1];
		googleDataSource.addRows(mnewJobData.rows);
		
		/*This title that I put in the js file is not apprearing 
		 * 
		 */
		
		var option = {title: "Worsening Unempyment"
		};
		
		
		/* this is the google visualization line chart command 
	 * 
	 */
		
		var myMarchData = new google.visualization.LineChart(document.getElementById("dataBankDiv"));
		
		
		
		myMarchData.draw(googleDataSource, option);
		
	
		
	}
	
	/** Here is the command to define the new callback fountion named "chartData" and the console.log function will chekc whether it 
 * is workng properly. To CHeck, we have to go to the html page opened with Firefox and see in the console where I should be 
 * able to see the "show my databak" */

	function mchartData(){
		
	console.log("show my beautiful chart");
	
	/*Now I am loading the get function which unlike in the past will help me to get the external data that I have saved in my desktop folder.
	 * 
	 */
	
	/* Now I am loading the get function, a function that will take the data that we load in the json file. I am also introducting 
	 * a new callback called latestData and "json" as my another parameter
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
	
	/* Docment ready function and mdataSource is the name of my callback. */
	$(document).ready(mdataSource);
