export const isTouchDevice = () =>
  "ontouchstart" in window || navigator.maxTouchPoints > 0;

export const slugify = function (text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const scrollTo = function (id) {
  let anchor = document.querySelector(id);

  if (anchor && anchor.getBoundingClientRect().top !== 0) {
    window.scroll({
      top:
        anchor.getBoundingClientRect().top +
        window.pageYOffset -
        document.querySelector(".header").offsetHeight -
        16,
      behavior: "smooth",
    });
  }
};
