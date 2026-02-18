const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const icon = document.getElementById("menu-icon");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");

  if (menu.classList.contains("hidden")) {
    icon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  } else {
    icon.setAttribute("d", "M6 18L18 6M6 6l12 12");
  }
});

// Select all timeline steps

window.addEventListener("scroll", () => {
  const wrapper = document.getElementById("timeline-wrapper");
  const progress = document.getElementById("scroll-progress");

  const rect = wrapper.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Start filling when the top of the timeline reaches the middle of the screen
  // End filling when the bottom of the timeline reaches the middle of the screen
  const startPoint = windowHeight / 2;
  const currentProgress = Math.min(
    Math.max((startPoint - rect.top) / rect.height, 0),
    1,
  );

  progress.style.height = currentProgress * 100 + "%";
});
