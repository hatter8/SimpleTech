//scripts.js


const aboutSection = document.querySelector('.about')
const descLeft = document.querySelector('.desc-left')
const descRight = document.querySelector('.desc-right')


// half way through the section
const slideInAt = (window.scrollY + window.innerHeight) - aboutSection.offsetHeight / 2;
console.log(slideInAt)

function checkSlide() {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - aboutSection.offsetHeight / 2;
    // bottom of the image
    const imageBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
    const isHalfShown = slideInAt > aboutSection.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom
    if (isHalfShown && isNotScrolledPast  ) {
        descLeft.classList.add('active');
        descRight.classList.add('active');
    } 
    // else{
    //     descLeft.classList.remove('active-left');
    //     descRight.classList.remove('active-right');
    // }
    
  }

  window.addEventListener('scroll', checkSlide)

//   descLeft.classList.remove('active-left');
//   descRight.classList.remove('active-right');
  