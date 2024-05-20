//Start of function for menu btn
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

//End of function for menu btn

const bookingType = document.getElementById("booking-type");

bookingType.addEventListener("click", (e) => {
  Array.from(bookingType.getElementsByTagName("div")).forEach((item) => {
    item.classList.remove("active");
  });
  e.target.classList.add("active");
});

//Start functionality for testimonial slider
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
});
//End functionality for testimonial slider

//Start of footer-year-automatically update the year evry year.

document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear(); // Get the current year
  var footerYearDiv = document.getElementById("footer-year"); // Get the div by its ID
  if (footerYearDiv) {
    footerYearDiv.textContent = `© ${currentYear} Visa Travel Agency. All rights reserved.`; // Set the text content of the div
    //adding styles to the footer
    footerYearDiv.style.padding = "1rem";
    footerYearDiv.style.fontSize = "0.8rem";
    footerYearDiv.style.color = "var(--white)";
    footerYearDiv.style.textAlign = "center";
  }
});

//End of footer-year

//start ofscroll reveal functionality

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

//header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .booking", {
  ...scrollRevealOption,
  delay: 1000,
});

//service container
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

//offer container
ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});

//dubai visa service page-visa change
document.getElementById("visaChangeBtn").addEventListener("click", function () {
  this.classList.toggle("active");
  var form = document.getElementById("bookingForm");
  if (this.classList.contains("active")) {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});
//dubai visa service page-visa chnage

//flight form start

//flight form end

//bookingForm data handler start

//bookingForm data handler end
