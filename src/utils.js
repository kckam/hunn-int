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

export const dob = {
  renderYear: function () {
    let year = [];

    for (let i = new Date().getFullYear(); i >= 1950; i--) {
      year.push(
        <option value={i} key={`year_${i}`}>
          {i}
        </option>
      );
    }

    return year;
  },

  renderMonth: function () {
    let month = [];

    for (let i = 1; i <= 12; i++) {
      month.push(
        <option value={i} key={`month_${i}`}>
          {i}
        </option>
      );
    }

    return month;
  },

  renderDay: function () {
    let day = [];

    for (let i = 1; i <= 31; i++) {
      day.push(
        <option value={i} key={`day_${i}`}>
          {i}
        </option>
      );
    }

    return day;
  },
};
