

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
      backgroundImage: "url('images/air-1.png')",
      title: "Global Air Services For Business",
      subtitle: "For Personal & Business",
      buttonLink: "#",
      buttonText: "Our Services"
  },
  {
      backgroundImage: "url('images/air-2.png')",
      title: "Smooth landings, effortless bookings. Welcome to IHAS.",
      subtitle: "We Care About Your Safety",
      buttonLink: "#",
      buttonText: "Contact Us"
  },
  {
      backgroundImage: "url('images/air-3.jpeg')",
      title: "Smooth landings, effortless bookings. Welcome to IHAS.",
      subtitle: "We Care About Your Safety",
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
