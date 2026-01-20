new Typed('#element', {
  strings: ['Student.', 'Video Editor.', 'Web Developer.'],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true
});

function reveal(){
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
