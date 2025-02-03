window.addEventListener('DOMContentLoaded', ()=>{

    const slides = document.querySelectorAll('.product1'),
        prev = document.querySelector('.arrow-1'),
        slides1 = document.querySelectorAll('.product2'),
        next = document.querySelector('.arrow-2');
        text = document.querySelectorAll('.banner-title'),
        review = document.querySelectorAll('.review1'),
        review2 = document.querySelectorAll('.review2'),
        prev1 = document.querySelector('.prev1'),
        nx = document.querySelector('.next1');



    let SlideIndex = 0,
        pag = document.querySelectorAll('.li'),
        SlideIndexz = 0;
       

    // ------------------------------------------------ // увеличение

    function slid(m){
        m.forEach(item=>item.style.display="none");
        m[SlideIndex].style.display="block";
    }
    
    function pagin(){
        pag.forEach(item=>item.classList.remove('active'))
        pag[SlideIndex].classList.add('active')
         
    }

    // ------------------------------------------------ //
    function slidz(m){
        m.forEach(item=>item.style.display="none");
        m[SlideIndexz].style.display="block";
    }





    function showSlides(n){
        if(n>slides.length-1){
            SlideIndex=0
        }
        if(n<0){
            SlideIndex=slides.length-1
        }
        slid(slides)
        slid(slides1)
        slid(text)
        pagin()
    }
    showSlides(SlideIndex)

    

    function showSlidesz(n){
        if(n>review.length-1){
            SlideIndexz=0
        }
        if(n<0){
            SlideIndexz=review.length-1
        }
        slidz(review)
        slidz(review2)
        
        
    }
    showSlidesz(SlideIndexz)


    // --------------------------------------------- // кнопки
    
    function plusSlide(n){
        showSlides(SlideIndex+=n)
    }
    next.addEventListener('click', ()=>{
        plusSlide(1)
    })
    prev.addEventListener('click', ()=>{
        plusSlide(-1)
    })

    // ----------------------------------------------- //


    
    function plusSlidez(n){
        showSlidesz(SlideIndexz+=n)
    }
    nx.addEventListener('click', ()=>{
        plusSlidez(1)
    })
    prev1.addEventListener('click', ()=>{
        plusSlidez(-1)
    })
});






      