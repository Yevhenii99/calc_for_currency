window.addEventListener('DOMContentLoaded', () => {


    //---Slider

    function sliderContent(wrapper, insideBlock, photo, prev_Arrow, next_Arrow) {
      slideWrapper = document.querySelector(wrapper),
      slideField = document.querySelector(insideBlock),
      slides = document.querySelectorAll(photo),
      width = window.getComputedStyle(slideWrapper).width,
      prevArrow = document.querySelector(prev_Arrow),
      nextArrow = document.querySelector(next_Arrow);

      let offset = 0;

      console.log(slides);
      slideField.style.width = 100 * slides.length + '%';
      slideField.style.display = 'flex';
      slideField.style.transition = '0.5s all';

      slideWrapper.style.overflow = 'hidden';

      slides.forEach(item => {
        item.style.width = width;
      });
      nextArrow.addEventListener('click', () => {
        if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
          offset = 0;
        } else {
          offset += +width.slice(0, width.length - 2);
        }

        slideField.style.transform = `translateX(-${offset}px)`;
      });

      prevArrow.addEventListener('click', () => {
        if (offset === 0) {
          offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
          offset -= +width.slice(0, width.length - 2);
        }

        slideField.style.transform = `translateX(-${offset}px)`;
      });
    }
    sliderContent('.wrapper', '.inside_block', '.photo', '.prev_arrow', '.next_arrow');

    function requireData(currency1, currency2) {
      const inputUah = document.querySelector(currency1),
      inputUsd = document.querySelector(currency2);

      inputUah.addEventListener('input', () => {
        const request = new XMLHttpRequest();

        request.open('GET', 'js/db.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('load', () => {
          if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = ((+inputUah.value / data.current.usd)).toFixed(2);
          } else {
            inputUsd.value = 'Something wrong';
          }
        });
      });
    }
    requireData('.uah', '.usd');
          
    
         
});