$(document).ready(function(){ 

// appends new topic to the end of the topics list
$("#add-topic").on("click", function () {
    var newTopicBtn = $('<div class="btn btn-primary">');
    var topicName = $("#new-topics").val();
    newTopicBtn.addClass("topic");
    newTopicBtn.attr("data-topic-name", topicName);
    newTopicBtn.text(topicName);
    $("#topics").append(newTopicBtn);
});

var topics = ["FFXIV", "NBA", "Overwatch", "Heavensward", "Emma Watson", "Silicon Valley", "Supa hot fire"];

// for loop to display topics array one button at a time
for (var i = 0; i < topics.length; i++) {
    var topicBtn = $('<div class="btn btn-primary">');
    topicBtn.addClass("topic");
    topicBtn.attr("data-topic-name", topics[i]);
    topicBtn.text(topics[i]);
    $("#topics").append(topicBtn);
}

$(".btn-primary").on("click", function(){
    var topic = $(this).attr("data-topic-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(topic);
// retrieves JSON object
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response){
        console.log(response);
            var gifs = response.data;
            for(var i = 0; i < gifs.length; i++) {
                var topicDiv = $("<div>");
                var p = $("<p>").text("Rating: " + gifs[i].rating);
                var topicImage = $("<img>");
                topicImage.attr("src", gifs[i].images.fixed_height.url);
                topicDiv.append(p);
                topicDiv.append(topicImage);
                $("#gif-placement").prepend(topicDiv);
            }
        })
});

});

