document.addEventListener("DOMContentLoaded", function () {

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

/* Navbar toggle */
if (toggle && nav) {
toggle.addEventListener("click", function () {
nav.classList.toggle("active");
});
}

/* Close menu when clicking link */
const navLinks = document.querySelectorAll(".nav-links a");

if (navLinks.length > 0 && nav) {
navLinks.forEach(link => {
link.addEventListener("click", () => {
nav.classList.remove("active");
});
});
}

/* Scroll animation */
const observer = new IntersectionObserver(function(entries) {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
entry.target.classList.add("reveal");
}
});
}, { threshold: 0.15 });

const elements = document.querySelectorAll(
".project-card, .cert-card, .skill-item, .edu-card"
);

elements.forEach(el => observer.observe(el));

/* EmailJS */
if (typeof emailjs !== "undefined") {
emailjs.init("26uNHLamLEkAAw8XG");
}

const form = document.getElementById("contactForm");

if (form) {
form.addEventListener("submit", function (e) {

e.preventDefault();

const btn = form.querySelector("button");
if (btn) btn.innerText = "Sending...";

emailjs.sendForm(
"service_bcf3ya5",
"template_je6ty87",
this
)
.then(function () {
alert("Message sent successfully!");
if (btn) btn.innerText = "Send Message";
form.reset();
})
.catch(function (error) {
alert("Failed to send message");
console.log(error);
if (btn) btn.innerText = "Send Message";
});

});
}

});
