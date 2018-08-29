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
      TimeId: 1,
      //   $("#TimeID")
      //     .val()
      //     .trim(),
      resTime: $("#TimeID")
        .val()
        .trim()
    };
    $.post("/newres", newReservation).then(function(data) {
      console.log(data);
      //   alert("Adding reservation...");
      window.location = "/";
    });
  }
});
