// * Be sure to read about these GIPHY parameters (hint, hint):
// * `q`
// * `limit`
// * `rating`
// * Like many APIs, GIPHY requires developers to use a key to access their API data. To use the GIPHY API, you'll need a GIPHY account (don't worry, it's free!) and then obtain an API Key by [creating an app](https://developers.giphy.com/dashboard/?create=true).
// * Make sure you switch the protocol in the query URL from **`http to https`**, or the app may not work properly when deployed to Github Pages.

//$(document).ready(function () {

         // Initial array of topics
         var topics = ["thank you", "yasssss", "happy dance", "awesome", "sad", "gag", "cute", "sorry", "high five", "bummer", "dabbing"];
         console.log(topics);


         // Function to render buttons from the topics array

         function renderButtons() {
            // Clear area
            $("#buttons-area").empty();

            for (var i = 0; i < topics.length; i++) {
               var btn = $("<button>");
               btn.addClass("btn btn-outline-primary gifTopic");
               btn.attr("data-name", topics[i]);
               btn.text(topics[i]);
               $("#buttons-area").append(btn);
            }
         }

         renderButtons();

         $("#submitBtn").on('click'), function () {
               event.preventDefault();
               var topic = $("#addTopic").val().trim();
               topics.push(topic);
               renderButtons();
            
         };

      //@returns {string}



      //   * Make sure you switch the protocol in the query URL from **`http to https`**, or the app may not work properly when deployed to Github Pages