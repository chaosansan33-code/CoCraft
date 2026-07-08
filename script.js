
function updateNav(){
  const nav = document.getElementById("navbar");
  const isHome = document.body.classList.contains("home-page");
  if(!isHome || window.scrollY > 60){
    nav.classList.add("scrolled");
  }else{
    nav.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateNav);
window.addEventListener("load", updateNav);

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:.14});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
