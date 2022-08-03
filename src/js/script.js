window.addEventListener('DOMContentLoaded', () => {


    //---Slider

    const slides = document.querySelectorAll('.currency_item'),
          secondSlides = document.querySelectorAll('.currency_elem'),
          prevArrow = document.querySelector('.slide_prev'),
          nextArrow = document.querySelector('.slide_next'),
          prevArrow2 = document.querySelector('.second_slide_prev'),
          nextArrow2 = document.querySelector('.second_slide_next'),
          inputValue1 = document.querySelector('.btn_uah'),
          inputValue2 = document.querySelector('.btn_usd');

          let slideIndex = 1;
          let slideIndex2 = 1;


          showSlides(slideIndex);

          function showSlides(n) {
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach(item => item.style.display = 'none');
            slides[slideIndex - 1].style.display = 'block';
          }

          function plusSlides(n) {
            showSlides(slideIndex += n);
          }

          prevArrow.addEventListener('click', () => {
            plusSlides(-1);
          });
          
          nextArrow.addEventListener('click', () => {
            plusSlides(1);
          });


          //secondSlider

          showSecondSlides(slideIndex2);

          function showSecondSlides(n) {
            if (n > secondSlides.length) {
                slideIndex2 = 1;
            }
            if (n < 1) {
                slideIndex2 = secondSlides.length;
            }
            secondSlides.forEach(item => item.style.display = 'none');
            secondSlides[slideIndex2 - 1].style.display = 'block';
          }

          function plusSecondSlides(n) {
            showSecondSlides(slideIndex2 += n);
          }

          prevArrow2.addEventListener('click', () => {
            plusSecondSlides(-1);
          });
          
          nextArrow2.addEventListener('click', () => {
            plusSecondSlides(1);
          });



//    const uah = document.querySelector('#uah'),
//          usd = document.querySelector('#usd');


//          uah.addEventListener('input', () => {
//             const request = new XMLHttpRequest();

//             request.open('GET', 'js/db.json');
//             request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//             request.send();

//             request.addEventListener('load', () => {
//                 if (request.status === 200) {
//                     console.log(request.response);
//                     const data = JSON.parse(request.response);
//                     usd.value = (+uah.value / data.current.usd).toFixed(2);
//                 } else {
//                     usd.value = 'Something wrong...';
//                 }
//             });
//          });


    
         
});