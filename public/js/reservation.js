$(document).ready(function() {
  var url = window.location.pathname;
  var searchDate = url.substring(url.indexOf("s/") + 2);
  //   console.log(url)
  //   console.log(url.substring(url.indexOf("s/") + 2));
  $("#submit").on("click", makeRes);

  function makeRes(event) {
    event.preventDefault();
    var newReservation = {
      firstName: $("#firstName")
        .val()
        .trim(),
      lastName: $("#lastName")
        .val()
        .trim(),
      phoneNumber: $("#phoneNumber")
        .val()
        .trim(),
      address: $("#address")
        .val()
        .trim(),
      city: $("#city")
        .val()
        .trim(),
      state: $("#state")
        .val()
        .trim(),
      zip: $("#zip")
        .val()
        .trim(),
      email: $("#email")
        .val()
        .trim(),
      groupSize: $("#partySize")
        .val()
        .trim(),
      preferedDate: searchDate,
      resDate: searchDate,
      TimeId: $("#time-text")
        .val()
        .trim(),
      resTime: $("#time-text")
        .val()
        .trim()
    };
    $.get(
      "/user/reservationcheck/" +
        $("#email")
          .val()
          .trim()
    ).then(function(data) {
      console.log(data);
      if (data !== null) {
        alert("Only one reservation per email.");
        window.location = "/";
      } else {
        $.get(
          "/times2/" +
            $("#time-text")
              .val()
              .trim()
        ).then(function(data) {
          console.log(data[0].availableSpaces);
          console.log(newReservation.groupSize);
          var updatedSpaces = {
            availableSpaces: data[0].availableSpaces - newReservation.groupSize
          };
          $.ajax({
            type: "PUT",
            url:
              "/newres/" +
              $("#time-text")
                .val()
                .trim(),
            data: updatedSpaces
          }).then(function(data) {
            console.log(data);
            $.post("/newres", newReservation).then(function(data) {
              console.log(data);
              alert("Reservation Successful!!");
              window.location = "/";
            });
          });
        });
      }
    });
  }
  // $.post("/newres", newReservation).then(function(data) {
  //   console.log(data);
  //   //   alert("Adding reservation...");
  //   window.location = "/";
  // });
});
