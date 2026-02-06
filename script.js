// Scroll animations
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      section.classList.add("active");
    }
  });
});

// Mobile menu
function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}
