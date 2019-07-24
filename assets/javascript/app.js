// * Be sure to read about these GIPHY parameters (hint, hint):
// * `q`
// * `limit`
// * `rating`
// * Like many APIs, GIPHY requires developers to use a key to access their API data. To use the GIPHY API, you'll need a GIPHY account (don't worry, it's free!) and then obtain an API Key by [creating an app](https://developers.giphy.com/dashboard/?create=true).
// * Make sure you switch the protocol in the query URL from **`http to https`**, or the app may not work properly when deployed to Github Pages.


// Initial array of topics
 var topics = ["thank you","yasssss","happy dance","awesome","sad","gag","cute","sorry","high five","bummer","dabbing"];

 function buildQueryURL() {
     var queryURL = "https://api.giphy.com/v1/gifs/search+?"; 
     var queryParams = {"api_key=": "3HskJVbTCA0hiHZGsNyb1jQ3Qh3U9vjf"};
     var queryParam.q = $("#search-term").val().trim();


     $("#add-topic").on("click", function(event) {
    //after click event
     event.preventDefault();
  // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);

 }
 
 //+ queryParam + "api_key=" + key +"&q=&limit=10&offset=0&rating=PG-13&lang=en";
 var q
 

$.ajax({
    url: queryURL,
    method: "GET",
})
   // storing the data from the AJAX request in the results variable
.then(function(response) {
console.log(response);
console.log(queryURL);
   // storing the data from the AJAX request in the results variable
var results = response.data;
// Looping through each result item


}



//   * Make sure you switch the protocol in the query URL from **`http to https`**, or the app may not work properly when deployed to Github Pages.