function animationHover(e, t, o) {
  (t = $("#newquote")),
    (e = $(e)),
    e.hover(
      function() {
        t.addClass("animated " + o);
      },
      function() {
        window.setTimeout(function() {
          t.removeClass("animated " + o);
        }, 2e3);
      }
    );
}
$("#newquote").on("click", function(e) {
  e.preventDefault(),
    $.ajax({
      url:
        "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      success: function(e) {
        var t = e.shift();
        $("#quote-title").text(t.title),
          $("#quote-content").html(t.content),
          "undefined" != typeof t.custom_meta &&
          "undefined" != typeof t.custom_meta.Source
            ? $("#quote-source").html("Source:" + t.custom_meta.Source)
            : $("#quote-source").text("");
      },
      cache: !1
    });
    console.log (url);
});
