$(document).ready(function() {
  $("#createSubmit").on("click", createRes);
  $("#emailSubmit").on("click", emailSearch);
  $("#adminSubmit").on("click", adminSearch);

  function createRes(event) {
    event.preventDefault();
    console.log(event.target);
    beginDate = $("#reserve-text").val();
    console.log(beginDate);
    $.get("/times/" + beginDate, function(data) {});
  }
  function emailSearch(event) {
    event.preventDefault();
    email = $("#email-text").val();
    console.log(email);
    $.get("/user/reservation/" + email, function(data) {});
  }
  function adminSearch(event) {
    event.preventDefault();
    TimeID = $("#time-text").val();
    console.log(TimeID);
    $.get("/user/timeslot/" + TimeID, function(data) {});
  }
});
