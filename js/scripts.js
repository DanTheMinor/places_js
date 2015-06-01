$(document).ready(function(){
  $("#new-landmark").click(function() {
    $("#landmark-forms").append('<div class="landmark-holder">' +
                                  '<div class="form-group">' +
                                    '<label for="landmarks"><b>Landmarks:</b></label>' +
                                    '<input required id="landmarks" type="text" class="form-control landmarks">' +
                                  '</div>' +
                                '</div>');
  });

  $("form#places").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedTimeOfYear = $("select#time-of-year").val();
    var inputtedNotes = $("textarea#Notes").val();

    var newPlace = {place: inputtedLocation, landmarks: [], timeOfYear: inputtedTimeOfYear, notes: inputtedNotes};

    $(".landmark-holder").each(function() {
      var inputtedLandmark = $(this).find("input.landmarks").val();
      newPlace.landmarks.push(inputtedLandmark);
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
      $("#notes-results").text(newPlace.notes)
      $("input").val("");
    })
    // $("ul#landmark-results").append("<li><span class='place'>" + newPlace.location )


  $("#result").show();
  });
});
