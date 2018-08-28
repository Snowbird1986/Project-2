$(document).ready(function() {
  $("#createSubmit").on("click", createRes);
  $("#emailSubmit").on("click", emailSearch);
  $("#adminSubmit").on("click", adminSearch);

  function createRes(event) {
    event.preventDefault();
    beginDate = $("#reserve-text").val();
    window.location = "/times/" + beginDate;
  }

  function emailSearch(event) {
    event.preventDefault();
    email = $("#email-text").val();
    window.location = "/user/reservation/" + email;
  }

  function adminSearch(event) {
    event.preventDefault();
    TimeID = $("#time-text").val();
    window.location = "/user/timeslot/" + TimeID;
  }
});
