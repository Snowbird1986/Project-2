$(document).ready(function() {
  $("#createSubmit").on("submit", createRes);
  $("#emailSubmit").on("submit", emailSearch);
  $("#adminSubmit").on("submit", adminSearch);

  function createRes(req, res) {
    beginDate = $(this).data("date");
    console.log(beginDate);
    $.get("/times/" + beginDate, function(data) {});
  }
  function emailSearch(req, res) {
    email = $(this).text();
    console.log(email);
    $.get("/user/" + email, function(data) {});
  }
  function adminSearch(req, res) {
    TimeID = $(this).data("TimeID");
    console.log(TimeID);
    $.get("/user/" + TimeID, function(data) {});
  }
});
