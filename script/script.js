var right_ = 0;
$(document).ready(function () {
  var a = 0;
  var animate_timeline = function () {
    if (a == 0) {
      $(".timeline-elements")
        .children()
        .each(function () {
          $(this).css({
            right: right_ + "px",
          });
          right_ += 20;
        });
      right_ = 0;
      a = 1;
    } else {
      $(".timeline-elements")
        .children()
        .each(function () {
          $(this).css({
            right: "0px",
          });
        });
      a = 0;
    }
  };
  $("#parent-timeline").hover(animate_timeline).click(animate_timeline);
});

// Intersection observe below for Navbar tranparency: https://www.youtube.com/watch?v=RxnV9Xcw914

const Timeline_div = document.getElementById("logo");

let options = {
  root: null,
  rootMargin: "-50px",
  threshold: 1.0,
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      $("#topnav").css("background-color", "transparent");
    } else {
      $("#topnav").css("background-color", "var(--light-text-clr)");
    }
    // $(".timeline-elements")
    //   .children()
    //   .each(function () {
    //     $(this).css({
    //       right: right_ + "px",
    //     });
    //     right_ += 20;
    //   });
    // right_ = 0;
    // document.getElementById("parent-timeline").focus();
  });
};

let observer = new IntersectionObserver(callback, options);

observer.observe(Timeline_div);
