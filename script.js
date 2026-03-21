const toggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav-links")
toggle.addEventListener("click",()=>{
nav.classList.toggle("active")
})
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
const form = document.getElementById("contactForm")
form.addEventListener("submit",(e)=>{
e.preventDefault()
const btn = form.querySelector("button")
btn.innerText="Sending..."
setTimeout(()=>{
alert("Message received! I will get back to you soon.")
btn.innerText="Send Message"
form.reset()
},1200)
})