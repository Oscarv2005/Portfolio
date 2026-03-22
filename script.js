const toggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav-links")

if(toggle){
toggle.addEventListener("click",()=>{
nav.classList.toggle("active")
})
}

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("reveal")
}
})
},{threshold:0.15})

document.querySelectorAll(
".project-card,.certificate-card,.skill-item,.edu-card"
).forEach(el=>observer.observe(el))

// EMAILJS START
(function(){
emailjs.init("YOUR_PUBLIC_KEY");
})();

const form = document.getElementById("contactForm")

form.addEventListener("submit",(e)=>{
e.preventDefault()

const btn = form.querySelector("button")
btn.innerText="Sending..."

emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",form)
.then(()=>{
alert("Message sent successfully!")
btn.innerText="Send Message"
form.reset()
})
.catch((error)=>{
alert("Failed to send message")
console.log(error)
})
})
