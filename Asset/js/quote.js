$(document).ready(function(){
ourTitle = "";
ourContent = "";
tweetOut = "";
$.ajax({
  dataType: "json",
  url: "https://talaikis.com/api/quotes/random/"
}).done(function(data) {
  // If successful
  ourContent = '"' + data.quote + '"';
  tweetOut = '"' + data.quote + '"' + " " + data.author;
  $("#quote-title").html(data.author);
  $("#quote-content").html(ourContent);
  $("#tweetS").attr("href","https://twitter.com/intent/tweet?text=" + tweetOut);
});
});
$("#newquote").on("click", function() {
$.ajax({
  dataType: "json",
  url: "https://talaikis.com/api/quotes/random/"
}).done(function(data) {
  // If successful
  ourContent = '"' + data.quote + '"';
  tweetOut = '"' + data.quote + '"' + " " + data.author;
  $("#quote-title").html(data.author);
  $("#quote-content").html(ourContent);
});
});
