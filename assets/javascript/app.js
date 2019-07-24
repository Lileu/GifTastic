
   $(document).ready(function () {
      
   // Initial array of topics
   var topics = ["excitement", "yasssss", "happy dance", "awesome", "sad", "gag", "cute", "sorry", "high five", "bummer", "dabbing"];
   console.log(topics);
   
      
   $("#submitBtn").on('click'),function () {
      event.preventDefault();
      var newTopic = $("#addTopic").val().trim();
      var newBtn = $("<button>");
      newbtn.addClass("btn btn-outline-primary gifTopic");
      newbtn.attr("data-name", newTopic);
      newbtn.text(newTopic);
      $("#buttons-section").append(btn);
   
   
      // var topic = $("#addTopic").val().trim();
      // topics.push(topic);
      // renderButtons();
   };

   // Function to render buttons from the topics array
   function renderButtons() {
      // Clear section
      $("#buttons-section").empty();
      // Loop through array to create buttons
      for (var i = 0; i < topics.length; i++) {
         var btn = $("<button>");
         btn.addClass("btn btn-outline-primary gifTopic");
         btn.attr("data-name", topics[i]);
         btn.text(topics[i]);
         $("#buttons-section").append(btn);
      }
   }

   renderButtons();




   // Click event to retrieve related gifs
   $(document).on('click', 'button', function () {
      // Clear section
      $("#gifs-section").empty();
      // Generate api query from data attribute of button clicked 
      var b = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?&api_key=3HskJVbTCA0hiHZGsNyb1jQ3Qh3U9vjf&q=" + b + "&limit=10&lang=en";
      console.log(queryURL);



      // GET request ajax call
      $.ajax({
            url: queryURL,
            method: "GET",
         })
         .done(function (response) {
            console.log(queryURL);
            console.log(response);
            // Storing array of results from the response
            var results = response.data;
            for (i = 0; i < results.length; i++) {

               // Creating and storing a div tag
               var gifDiv = $('<div class="imgDiv">');

               // Creating a paragraph tag with the result item's rating
               var p = $("<p>").text("Rating: " + results[i].rating);

               // Creating and storing an image tag
               var gifImage = $("<img>");
               // Setting the src attribute of the image to a property pulled off the result item
               gifImage.attr("src", results[i].images.fixed_height.url)
                  .attr('data-still', results[i].images.fixed_height_still.url)
                  .attr('data-animate', results[i].images.fixed_height.url)
                  .attr('data-state', "still")
                  .addClass("showImage");
               //displaying the rating & image

               // Appending the paragraph and image tag to the gifDiv
               gifDiv.append(p);
               gifDiv.append(gifImage);
               $("#gifs-section").prepend(gifDiv);
            }
         })
   });

   $(document).on('click', '.showImage', function () {
      var state = $(this).data('state');
      if (state == "still") {
         $(this).attr("data-state", "animated");
         $(this).attr("src", $(this).attr("data-animated"));
      } else {
         $(this).attr("data-state", "still");
         $(this).attr("src", $(this).attr("data-still"));
      }
   });
});