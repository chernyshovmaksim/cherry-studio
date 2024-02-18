document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");

  /**
   * GSAP Register
   */
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  /**
   * GSAP Init
   */
  if (ScrollTrigger.isTouch !== 1) {
  }
});
