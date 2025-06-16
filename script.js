window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('backgroundMusic');
  let started = false;

  function playAudio() {
    if (!started) {
      audio.play().then(() => {
        started = true;
      }).catch(() => {
        // Some browsers block autoplay, let user try again
      });
    }
  }

  // Listen for multiple user gestures for best compatibility
  ['click', 'touchstart', 'mousedown', 'keydown'].forEach(event => {
    document.body.addEventListener(event, playAudio);
    window.addEventListener(event, playAudio);
  });

  // Musiqani avtomatik ijro etish va takrorlash
  function autoplayMusic() {
    audio.loop = true;
    audio.play().catch(e => console.log("Musiqani avtomatik ijro etishda xatolik:", e));
  }

  // Dastlabki yuklanish animatsiyalari (birinchi bo'lim)
  setTimeout(() => {
    document.querySelector('.couple-anim').classList.add('show');
  }, 700);
  setTimeout(() => {
    document.querySelector('.bezak-anim').classList.add('show');
  }, 700);
  setTimeout(() => {
    document.querySelector('.og-anim-o').classList.add('show');
    document.querySelector('.og-anim-and').classList.add('show');
    document.querySelector('.og-anim-g').classList.add('show');
  }, 1500);

  const sectionsToAnimate = document.querySelectorAll('.section-2, .section-3, .section-4, .section-5, .section-6, .section-7, .central-image-section-5');

  if (sectionsToAnimate.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const baseDelay = 500;

          if (entry.target.classList.contains('section-3')) {
            const elements = entry.target.querySelectorAll('.section-3-el');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('show');
              }, baseDelay + (index * 990));
            });
            const ogNames = entry.target.querySelectorAll('.og-name, .og-name-and');
            setTimeout(() => {
              ogNames.forEach(nameEl => {
                nameEl.classList.add('show');
              });
            }, baseDelay + (elements.length * 100));
          }
          else if (entry.target.classList.contains('section-4')) {
            const countdownElements = entry.target.querySelectorAll('.countdown-el');
            countdownElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('show');
              }, baseDelay + (index * 100));
            });
            startCountdown();
          }
          else if (entry.target.classList.contains('section-5')) {
            const bezakSection5 = entry.target.querySelector('.bezak-section-5');
            if (bezakSection5) {
              setTimeout(() => {
                bezakSection5.classList.add('show');
              }, baseDelay);
            }
            const calendarComponent = entry.target.querySelector('.calendar-component');
            if (calendarComponent) {
              setTimeout(() => {
                calendarComponent.classList.add('show');
              }, baseDelay + 200);
            }
          }
          else if (entry.target.classList.contains('central-image-section-5')) {
            setTimeout(() => {
              entry.target.classList.add('show');
            }, baseDelay);
          }
          else if (entry.target.classList.contains('section-6')) {
            const section6Elements = [
              entry.target.querySelector('.bezak-section-6'),
              entry.target.querySelector('.loc-title'),
              entry.target.querySelector('.loc-address'),
              entry.target.querySelector('.loc-restoran'),
              entry.target.querySelector('.loc-miras'),
              entry.target.querySelector('.restaurant-image'),
              entry.target.querySelector('.map-button')
            ].filter(Boolean);

            section6Elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('show');
              }, baseDelay + (index * 150));
            });
          }
          else if (entry.target.classList.contains('section-7')) {
            const section7Elements = [
              entry.target.querySelector('.start-title'),
              entry.target.querySelector('.start-time'),
              entry.target.querySelector('.couple-section-7-image'),
              entry.target.querySelector('.bezak-section-7')
            ].filter(Boolean);

            section7Elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('show');
              }, baseDelay + (index * 150));
            });
          }
          else {
            setTimeout(() => {
              entry.target.classList.add('show');
            }, baseDelay);
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    sectionsToAnimate.forEach(section => {
      observer.observe(section);
    });
  }

  function startCountdown() {
    const countdownDate = new Date("2025-07-04T14:00:00").getTime();

    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerHTML = String(days).padStart(3, '0');
      document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
      document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
      document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Церемония началась!";
      }
    }, 1000);
  }

  // Musiqani avtomatik ijro etish
  autoplayMusic();
});

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.mySwiper', {
    slidesPerView: 1.128, // Show part of next/prev slides
    spaceBetween: 5,
    centeredSlides: true,
    loop: true, // Enable infinite loop
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1.128,
      },
      1024: {
        slidesPerView: 1.128, // Increased width for larger screens
      }
    }
  });
});
