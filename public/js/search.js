$(document).ready(function() {
  function getReservation(req, res) {
    $.get("/user/reservation/:email", function(res) {
      console.log(res);
    });
  }
  getReservation();
});
