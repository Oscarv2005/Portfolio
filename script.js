document.addEventListener("DOMContentLoaded", function () {

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
toggle.addEventListener("click", function () {
nav.classList.toggle("active");
});
}

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

for (let i = 0; i < elements.length; i++) {
    observer.observe(elements[i]);
}
 
elements.forEach(function(el){
observer.observe(el);
});

 entry.target.classList.add("reveal")
  
for (let i = 0; i < elements.length; i++) {
observer.observe(elements[i]);
}

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
