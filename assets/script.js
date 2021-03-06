// GIPHY LYFE

var topics = ["FFXIV", "NBA", "Overwatch", "Heavensward", "Emma Watson", "Silicon Valley", "Supa hot fire"];

// Loop displaying the topics to buttons
for (var i = 0; i < topics.length; i++) {
    var topicBtn = $('<div class="btn btn-primary">');
    topicBtn.addClass("topic");
    topicBtn.attr("data-topic-name", topics[i]);
    topicBtn.text(topics[i]);
    $("#topics").append(topicBtn);
}

// Adds a new topic at the end of the list
$("#add-topic").on("click", function (e) {
    e.preventDefault();
    topics.push($("#new-topics").val());
    var newTopicBtn = $('<div class="btn btn-primary">');
    var topicName = $("#new-topics").val();
    newTopicBtn.addClass("topic");
    newTopicBtn.attr("data-topic-name", topicName);
    newTopicBtn.text(topicName);
    $("#topics").append(newTopicBtn);
});

$(document.body).on("click", ".topic", function(){
    var topic = $(this).attr("data-topic-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(topic);

// ajax call to the giphy API
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

