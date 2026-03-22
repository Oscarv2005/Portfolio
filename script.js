document.addEventListener("DOMContentLoaded", () => {

const toggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav-links")

if (toggle && nav) {
toggle.addEventListener("click", () => {
nav.classList.toggle("active")
})
}

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("reveal")
}
})
}, { threshold: 0.15 })

const elements = document.querySelectorAll(
".project-card, .cert-card, .skill-item, .edu-card"
)

// SAFE loop (fixes your error)
for (let i = 0; i < elements.length; i++) {
observer.observe(elements[i])
}

// EmailJS
(function () {
emailjs.init("26uNHLamLEkAAw8XG")
})();

const form = document.getElementById("contactForm")

if (form) {
form.addEventListener("submit", function (e) {
e.preventDefault()

const btn = form.querySelector("button")
btn.innerText = "Sending..."

emailjs.sendForm(
"service_bcf3ya5",
"template_je6ty87",
this
)
.then(function () {
alert("Message sent successfully!")
btn.innerText = "Send Message"
form.reset()
})
.catch(function (error) {
alert("Failed to send message")
console.log(error)
btn.innerText = "Send Message"
})
})
}

})
