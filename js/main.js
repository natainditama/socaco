$(function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: {
      breakpoint: 0,
    },
  });

  $(".nav-indicator a").on("click", function () {
    const pointer = $(".nav-pointer");
    gsap.to(pointer, {
      left: $(this).position().left,
      width: ($(this).width() * 3) / 4,
      duration: 0.5,
    });
    $(".nav-indicator a").removeClass("current");
    $(this).addClass("current");
  });
});
