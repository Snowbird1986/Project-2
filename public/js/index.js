$(document).ready(function() {
  $("#createSubmit").on("click", createRes);
  $("#emailSubmit").on("click", emailSearch);
  $("#adminSubmit").on("click", adminSearch);

  function createRes(event) {
    event.preventDefault();
    beginDate = $(this).data("date");
    console.log(beginDate);
    $.get("/times/" + beginDate, function(data) {});
  }
  function emailSearch(event) {
    event.preventDefault();
    email = $(this).text();
    console.log(email);
    $.get("/user/reservation/" + email, function(data) {});
  }
  function adminSearch(event) {
    event.preventDefault();
    TimeID = $(this).data("TimeID");
    console.log(TimeID);
    $.get("/user/timeslot/" + TimeID, function(data) {});
  }
});
