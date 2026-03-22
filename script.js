// MENU TOGGLE
const toggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav-links")

if (toggle) {
toggle.addEventListener("click", () => {
nav.classList.toggle("active")
})
}

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("reveal")
}
})
}, { threshold: 0.15 })

document.querySelectorAll(
".project-card,.certificate-card,.skill-item,.edu-card"
).forEach(el => observer.observe(el))

// EMAILJS START
(function () {
emailjs.init("26uNHLamLEkAAw8XG"); // Your Public Key
})();

const form = document.getElementById("contactForm")

form.addEventListener("submit", function (e) {
e.preventDefault()

const btn = form.querySelector("button")
btn.innerText = "Sending..."

emailjs.sendForm(
"service_bcf3ya5",     // Service ID
"template_je6ty87",    // Template ID
this                   // Form
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
