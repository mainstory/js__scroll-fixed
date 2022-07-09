const firstSection = document.querySelector('.section-1')
const header = document.querySelector('.header')
const body = document.querySelector('body')



document.addEventListener('scroll', () => {
   const bodyTop = body.getBoundingClientRect().top
   console.log(bodyTop);

   if (bodyTop <= -30) {
      header.classList.add('_fixed')
      
   } else {
      header.classList.remove('_fixed')

   }


   if (bodyTop <= -130) {
      header.classList.add('_active')
   } else {
      header.classList.remove('_active')
   }



})








