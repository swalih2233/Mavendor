
document.addEventListener('DOMContentLoaded', (event) => {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.slideshow-dots');
  let currentIndex = 0;
  let isTransitioning = false;

  slides.forEach((slide, index) => {
      const dot = document.createElement('button');
      dot.addEventListener('click', () => showSlide(index));
      dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.children;

  function updateDots() {
      Array.from(dots).forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
      });
  }

  function showSlide(index) {
      if (isTransitioning) return;
      isTransitioning = true;
      const offset = -index * 100;
      const slidesElement = document.querySelector('.slides');
      slidesElement.style.transform = `translateX(${offset}%)`;
      currentIndex = index;
      updateDots();
      setTimeout(() => {
          isTransitioning = false;
      }, 1000); // Transition duration matches CSS transition
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  // Initially display the first slide and activate the first dot
  showSlide(currentIndex);
  
  // Change slide every 7 seconds
  setInterval(nextSlide, 7000);
});   
// end 




// Team slider

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// end 

// menu responsive

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-menu');
  const navLinks = document.querySelector('.nav-links2');

  mobileMenu.addEventListener('click', () => {
      navLinks.classList.add('active');
      mobileMenu.style.display = 'none';
      closeMenu.style.display = 'block';
  });

  closeMenu.addEventListener('click', () => {
      navLinks.classList.remove('active');
      closeMenu.style.display = 'none';
      mobileMenu.style.display = 'flex';
  });
});








// slider 

var swiper = new Swiper(".card_slider", {
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 5000, // 5 seconds
    disableOnInteraction: false,
  },
  breakpoints: {
    1280: {
      slidesPerView: 4,
    },
    980: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    360: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 2,
    },
  }
});




