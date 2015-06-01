$(document).ready(function(){
  $("#new-landmark").click(function() {
    $("#landmark-forms").append('<div class="landmark-holder">' +
                                  '<div class="form-group">' +
                                    '<label for="landmarks"><b>Landmarks:</b></label>' +
                                    '<input required id="landmarks" type="text" class="form-control landmarks">' +
                                  '</div>' +
                                '</div>');
  });

$("#new-eat").click(function() {
  $(".eat-holder").append('<div class="form-group">' +
                            '<label for="eat"><b>Eats:</b></label>' +
                            '<input type="text" class="form-control eat">' +
                          '</div>');
  });

  $("form#places").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedTimeOfYear = $("select#time-of-year").val();
    var inputtedNotes = $("textarea#Notes").val();

    var newPlace = {place: inputtedLocation, landmarks: [], timeOfYear: inputtedTimeOfYear, notes: inputtedNotes, eats: []};

    $(".landmark-holder").each(function() {
      var inputtedLandmark = $(this).find("input").val();
      newPlace.landmarks.push(inputtedLandmark);
    });

    $(".eat").each(function() {
      var inputtedEat = $(this).val();
      newPlace.eats.push(inputtedEat);
    });

    $("ul#place-results").append("<li><span class='place'>" + newPlace.place + "</span></li>");

    $(".place").last().click(function() {
      $(".show-place").show();
      $(".show-place h3").text(newPlace.place);
      $("#time-of-year-results").text(newPlace.timeOfYear);
      $("ul#landmark-results").text("");

      newPlace.landmarks.forEach(function(landmark) {
        $("ul#landmark-results").append("<li>" + landmark + "</li>");
      });

      newPlace.eats.forEach(function(eat) {
        $("ul#eat-results").append("<li>" + eat + "</li>");
      });

      $("#notes-results").text(newPlace.notes);
      $(".place-info").show();
    });

    $("input").val("");
    $("select").val("No Time Selected");
    $("textarea").val("");

    $("#landmark-forms").replaceWith('<div id="landmark-forms">' +
                                      '<div class="landmark-holder">' +
                                        '<div class="form-group">' +
                                          '<label for="landmarks"><b>Landmarks:</b></label>' +
                                          '<input required id="landmarks" type="text" class="form-control landmarks">' +
                                        '</div>' +
                                      '</div>' +
                                    '</div>');

    $(".eat-holder").replaceWith('<div class="eat-holder">' +
                                  '<div class="form-group">' +
                                    '<label for="eat"><b>Eats:</b></label>' +
                                    '<input type="text" class="form-control eat">' +
                                  '</div>' +
                                '</div>');

  $("#result").show();
  });
});
