$(document).ready(function () {
  // $('[data-toggle="tooltip"]').tooltip();

  $("#mycarousel").carousel({ interval: 1000, pause: false });

  $("#carouselButton").on("click", function () {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
    } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle");
      $("#carouselButton").children("span").removeClass("fa-play");
      $("#carouselButton").children("span").addClass("fa-pause");
    }
  });

  $(".login").on("click", function () {
    $("#loginModal").modal("show");

    return false;
  });

  $("#reserveTab").on("click", function () {
    $("#reserve").modal("toggle");

    return false;
  });
});
