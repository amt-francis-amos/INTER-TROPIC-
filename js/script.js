

let closeBtn = document.getElementById('closeBtn');
let menuBtn = document.getElementById('menuBtn');
let show = document.getElementById("nav-links");


menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);


function openMenu(){
    
    show.style.right = "0";
}


function closeMenu(){
    
    show.style.right = "-200px";
}


const slides = [
  {
      backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('images/air-3.png')",
      title: "Welcome to Inter-Tropic Holding Ltd.",
      subtitle: "Global Air Services For Business.",
      buttonLink: "#",
      buttonText: "Our Services"
  },
  {
      backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('images/construction.jpg')",
      title: " Welcome to EARTHSAT CONSTRUCTION COMPANY.",
      subtitle: "We Care About Your Safety",
      buttonLink: "#",
      buttonText: "Contact Us"
  },
  {
      backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('images/mining.jpg')",
      title: "Welcome to KIJOE-MINERALS ",
      subtitle: "Building Tomorrow, Mining the Future",
      buttonLink: "#",
      buttonText: "Ask Anything"
  }
];


  let currentSlide = 0;
const heroSubtitle = document.getElementById("hero-subtitle");
const heroTitle = document.getElementById("hero-title");
const heroButton = document.getElementById("hero-button");


function showSlide(slideIndex) {
  const slide = slides[slideIndex];
  document.getElementById("hero").style.backgroundImage = slide.backgroundImage;
  heroSubtitle.textContent = slide.subtitle;
  heroTitle.textContent = slide.title;
  heroButton.textContent = slide.buttonText;
  heroButton.href = slide.buttonLink;

}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);


setInterval(nextSlide, 5000);



