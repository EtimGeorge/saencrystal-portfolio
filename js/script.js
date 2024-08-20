document.addEventListener('DOMContentLoaded', function() {
  const showMoreButtons = document.querySelectorAll('.show-more');
  
  showMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
          const description = this.closest('.project-description');
          const fullDescription = description.querySelector('.full-description');
          
          if (fullDescription.style.display === 'none') {
              fullDescription.style.display = 'block';
              this.textContent = 'Show less';
          } else {
              fullDescription.style.display = 'none';
              this.textContent = 'Show more...';
          }
      });
  });
});

// ===== ABOUT SECTION WITH 3D ANIMATED SUB-CARDS ========

document.addEventListener('DOMContentLoaded', function() {
  const cards = ['experience', 'projects', 'clients'];
  
  cards.forEach(card => {
      const mainCard = document.getElementById(`${card}Card`);
      const subCards = document.getElementById(`${card}SubCards`);
      
      mainCard.addEventListener('click', function() {
          cards.forEach(otherCard => {
              if (otherCard !== card) {
                  document.getElementById(`${otherCard}SubCards`).classList.remove('active');
              }
          });
          subCards.classList.toggle('active');
      });
  });
});

// ===== SERVCIES TOGGLE

const servicesButtons = document.querySelectorAll('.serviceItem');
const serviceDetails = document.querySelector('.servicesRight');

const getService = (category) => {
  const details = servicesData.find(item => item.category === category);
  serviceDetails.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map(paragraph => `<p>${paragraph}</p>`).join('')}
  `;
}

const removeActiveClass = () => {
    servicesButtons.forEach(button => {
      button.classList.remove('active');
    })
  }
  
  servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
      removeActiveClass();
      const serviceClass = item.classList[1];
      getService(serviceClass);
      item.classList.add('active');
    })
  })
  
  getService('frontend');


//====================== MIXITUP (project section)======================

document.addEventListener('DOMContentLoaded', function () {
    const containerEl = document.querySelector('.projectsContainer');
    var mixer = mixitup(containerEl, {
      animation: {
        enable: false
      }
    });

    mixer.filter('*');
});


//====================== USING SWIPER JS (testimonial section) ======================

// Here is the js code for the review scroll 

// document.addEventListener('DOMContentLoaded', function() {
//   const swiper = new Swiper('.swiper', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     breakpoints: {
//       600: {
//           slidesPerView: 2
//       },
//       1024: {
//           slidesPerView: 3
//       }
//     }
//   });
// });


//=========== NAV TOGGLE (small screen) ===========
const navMenu = document.querySelector('.navMenu');
const navOpenBtn = document.querySelector('.navToggleOpen');
const navCloseBtn = document.querySelector('.navToggleClose');

const openNavHandler = () => {
  navMenu.style.display = 'flex';
  navOpenBtn.style.display = 'none';
  navCloseBtn.style.display = 'inline-block';
}

const closeNavHandler = () => {
  navMenu.style.display = 'none';
  navOpenBtn.style.display = 'inline-block';
  navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click', openNavHandler);
navCloseBtn.addEventListener('click', closeNavHandler);

// close nav menu on click of nav link on small screens
const navItems = navMenu.querySelectorAll('a');
if (window.innerWidth < 768) {
  navItems.forEach(item => {
      item.addEventListener('click', closeNavHandler)
  })
}





// ===== SCROLL UP ICON HERE ==== 

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('myVideo');
  video.play().catch(error => {
      console.error("Auto-play was prevented:", error);
      // Create a play button
      const playButton = document.createElement('button');
      playButton.innerHTML = 'Play Background Video';
      playButton.style.position = 'absolute';
      playButton.style.zIndex = '10';
      playButton.style.top = '10px';
      playButton.style.left = '10px';
      document.querySelector('.techStack').appendChild(playButton);

      playButton.addEventListener('click', () => {
          video.play();
          playButton.remove();
      });
  });
});

 function createServiceElement(service) {
            const serviceElement = document.createElement('div');
            serviceElement.className = 'service-item';
            serviceElement.innerHTML = `
                <h2 class="service-title">${service.title}</h2>
                ${service.description.map(desc => `<p class="service-description">${desc}</p>`).join('')}
            `;
            return serviceElement;
        }

        function animateServices() {
            const container = document.getElementById('servicesContainer');
            container.style.display = 'block';
            servicesData.forEach((service, index) => {
                const serviceElement = createServiceElement(service);
                serviceElement.style.opacity = '0';
                serviceElement.style.transform = 'translateZ(-100px) rotateX(-90deg)';
                container.appendChild(serviceElement);
                
                setTimeout(() => {
                    serviceElement.style.transition = 'opacity 0.5s, transform 0.5s';
                    serviceElement.style.opacity = '1';
                    serviceElement.style.transform = 'translateZ(0) rotateX(0)';
                }, index * 200);
            });
        }

        document.getElementById('showServices').addEventListener('click', animateServices);