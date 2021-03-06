$(function(){



    var swiper = new Swiper(".sc-collection .swiper", {
        slidesPerView:'auto',
        spaceBetween: 0,
        pagination: {
            el: ".slide-num .italic",
            type: "custom",
            renderCustom: function(swiper, current, total){
              return `${current}/${total}`
            }
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });

    
    const  sns = gsap.from('.sc-sns .sns',{
      opacity: 0,
      y: 100,
      stagger:0.1
    })

    // 특정영역에서 트리거
    ScrollTrigger.create({
      trigger: ".sc-sns",
      start: "top 50%", //[트리거기준 , 윈도우기준]
      end: "bottom top", //[트리거기준 , 윈도우기준]
      markers: false,
      animation: sns,
      // onEnter, 도달했을때
      // onLeave, 앤드가 스크롤앤드랑 만났을 때
      // onEnterBack, 스크롤앤드가 앤드로 다시 들어왔을 때
      // onLeaveBack (start와 스크롤스타트 스타트영역 벗어났을때)
      
    })


    const  concept = gsap.from('.content-area .text .desc',{
      opacity: 0,
      y: 100,
      stagger:0.1
    })

    // 특정영역에서 트리거
    ScrollTrigger.create({
      trigger: ".content-area",
      start: "top top", //[트리거기준 , 윈도우기준]
      end: "bottom top", //[트리거기준 , 윈도우기준]
      markers: false,
      animation: concept,
      
    })


    const scrollMotion = document.querySelectorAll('[data-name*="motion01"]')
    scrollMotion.forEach(a => {

      motion01 = gsap.from(a,{
        opacity: 1,
        y : 100,
        stagger: 0.1
      })

      // 특정영역에서 트리거
      ScrollTrigger.create({
        trigger: a,
        start: "top top", //[트리거기준 , 윈도우기준]
        end: "bottom top", //[트리거기준 , 윈도우기준]
        markers: false,
        animation: motion01,
        
      })

    })


    const motionElement = document.querySelectorAll('[data-name*="motion"]')
    motionElement.forEach(element => {


      yVal = (element.dataset.y) ? element.dataset.y : 0;
      xVal = (element.dataset.x) ? element.dataset.x : 0;


      motion = gsap.from(element,{
        opacity: 0,
        yPercent: yVal,
        xPercent: xVal,
      })
  
      // 특정영역에서 트리거
      ScrollTrigger.create({
        trigger: element,
        start: "top center", //[트리거기준 , 윈도우기준]
        end: "bottom top", //[트리거기준 , 윈도우기준]
        markers: false, // 기준을 알려주는것
        animation: motion,
        
      })

    });


})