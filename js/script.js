"use strict";
// 文字を丸める
function ToArch(element) {
  // 要素内のテキストを抜き出して配列にする
  var text = element.textContent;
  text = text.split("");

  // 要素内のテキストを１文字ずつかこみ、それらに角度と高さを設定
  element.innerHTML = "";
  for (var int = 0; int < text.length; int++) {
    var divnode = null;

    // 要素の角度
    var divrotate = (360 / text.length) * int;

    divnode = document.createElement("span");
    divnode.innerHTML = text[int];
    divnode.style.position = "absolute";
    divnode.style.height = "50%";
    // divnode.style.color = "unset";
    divnode.style.transformOrigin = "bottom center";
    divnode.style.top = "0";
    divnode.style.bottom = "0";
    divnode.style.left = "49.5%";
    divnode.style.transform = "rotate(" + divrotate + "deg)";
    element.appendChild(divnode);
  }
  return element;
}

var archtarget = document.getElementById("header_logo");
ToArch(archtarget);

//秒速ランダム
const randomArray = [4,7,10];
  
const ranTime = () =>{
  const logos = document.querySelector('#header_logo');
  const i = randomArray[Math.floor( Math.random() * randomArray.length ) ];
  logos.classList.remove(`logo_4`)
  logos.classList.remove(`logo_7`)
  logos.classList.remove(`logo_10`)
  console.log(i);
  console.log(`logo_${i}`);
  console.log(`${i+ '000'}`);
  logos.classList.add(`logo_${i}`);
  setTimeout(ranTime, `${i+'000'}`);
}
ranTime();
// スライダー

const slider = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  speed: 3000,
  autoplay: {
    delay: 2000,
  },
  });
  const slider1 = new Swiper(".swiper1", {
    loop: true,
    slidesPerView: 1,
    speed: 3000,
    autoplay: {
      delay: 2000,
      reverseDirection: true,
    },

    });
    const slider2 = new Swiper(".swiper2", {
      loop: true,
      slidesPerView: 1,
      speed: 3000,
      autoplay: {
        delay: 2000,
        reverseDirection: true,
      },
      });
      const slider3 = new Swiper(".swiper3", {
        loop: true,
        slidesPerView: 1,
        speed: 3000,
        autoplay: {
          delay: 2000,
        },
        direction:'vertical',
        });


    // 出現アニメーション
    // ファーストビュー
    // 一枚目
    // gsap.fromTo(".firstView1", 2,{
    //   stagger:1,
    //   x:-200,
    //   autoAlpha: 0,
    // },
    //   {
    //     x:0,
    //     autoAlpha: 1,
    //   scrollTrigger: {
    //     trigger: ".firstView1", // アニメーション開始のトリガー要素
    //     toggleActions:"play none none reverse",
    //     start: "top center", // アニメーション開始位置
    //   },
    // });
    // // 二枚目
    // gsap.fromTo(".firstView2", 3,{
    //   stagger:1,
    //   x:200,
    //   autoAlpha: 0,
    // },
    //   {
    //     x:0,
    //     autoAlpha: 1,
    //   scrollTrigger: {
    //     trigger: ".firstView2", // アニメーション開始のトリガー要素
    //     toggleActions:"play none none reverse",
    //     start: "top center", // アニメーション開始位置
    //   },
    // });
    // // 三枚目
    // gsap.fromTo(".firstView3", 4,{
    //   stagger:1,
    //   y:100,
    //   autoAlpha: 0,
    // },
    //   {
    //     y:0,
    //     autoAlpha: 1,
    //   scrollTrigger: {
    //     trigger: ".firstView2", // アニメーション開始のトリガー要素
    //     toggleActions:"play none none reverse",
    //     start: "top center", // アニメーション開始位置
    //   },
    // });
        // ファーストビューの次
    gsap.fromTo(".idt", 0.5,{
      y:100,
      autoAlpha: 0,
    },
      {
        y:0,
        autoAlpha: 1,
      scrollTrigger: {
        trigger: ".idt", // アニメーション開始のトリガー要素
        toggleActions:"play none none reverse",
        start: "top center", // アニメーション開始位置

      },
    });
    // start
    gsap.fromTo(".idt2", 1,{
      y:50,
      autoAlpha: 0,
    },
      {
        y:0,
        autoAlpha: 1,
      scrollTrigger: {
        trigger: ".idt2", // アニメーション開始のトリガー要素
        toggleActions:"play none none reverse",
        start: "top center", // アニメーション開始位置
      },
    });
// 旅の魅力とは
gsap.fromTo(".con_1", 1,{
  x:-100,
  autoAlpha: 0,
},
  {
    x:0,
    autoAlpha: 1,
  scrollTrigger: {
    trigger: ".con_1", // アニメーション開始のトリガー要素
    toggleActions:"play none none reverse",
    start: "top center", // アニメーション開始位置
  },
});
// 旅で得られるもの
gsap.fromTo(".con_2", 1,{
  x:-100,
  autoAlpha: 0,
},
  {
    x:0,
    autoAlpha: 1,
  scrollTrigger: {
    trigger: ".con_2", // アニメーション開始のトリガー要素
    toggleActions:"play none none reverse",
    start: "top center", // アニメーション開始位置
  },
});

// 一人旅の感想
// 20代
let count = 0;
const tgs_btn1 = document.querySelector(".age20")
const tgs_con1 = document.querySelector(".tgs_content1")
const tgs_btn2 = document.querySelector(".age20_1")
const tgs_con2 = document.querySelector(".tgs_content2")

tgs_btn1.addEventListener("click",()=>{
  count= count+2;
  tgs_con2.style.zIndex=count;
  tgs_con1.classList.remove('fuwa')
  tgs_con2.classList.add('fuwa')
})
tgs_btn2.addEventListener("click",()=>{
  count= count+2;
  tgs_con1.style.zIndex=count;
  tgs_con2.classList.remove('fuwa')
  tgs_con1.classList.add('fuwa')
})
// 30代
const tgs_btn3 = document.querySelector(".age30")
const tgs_con3 = document.querySelector(".tgs_content3")
const tgs_btn4 = document.querySelector(".age30_1")
const tgs_con4 = document.querySelector(".tgs_content4")

tgs_btn3.addEventListener("click",()=>{
  count= count+2;
  tgs_con4.style.zIndex=count;
  tgs_con3.classList.remove('fuwa')
  tgs_con4.classList.add('fuwa')
})
tgs_btn4.addEventListener("click",()=>{
  count= count+2;
  tgs_con3.style.zIndex=count;
  tgs_con4.classList.remove('fuwa')
  tgs_con3.classList.add('fuwa')
})
// ソロトリの概念

gsap.fromTo(".ai", 1,{
  y:50,
  autoAlpha: 0,
},
  {
    x:0,
    autoAlpha: 1,
    stagger:0.4,
  scrollTrigger: {
    trigger: ".ai", // アニメーション開始のトリガー要素
    toggleActions:"play none none reverse",
    start: "top center", // アニメーション開始位置
  },
});


// 旅への挑戦

// const cha_btn0 = document.querySelector("button")
// const cha_btn1 = document.querySelector(".next_btn")
// const cha_btn2 = document.querySelector(".next_btn2")
// const cha_btn3 = document.querySelector(".b_main2")
// const cha_btn4 = document.querySelector(".back_btn")

// const cha_con0 = document.querySelector(".charenge_content")
// const cha_con1 = document.querySelector(".charenge_content1")
// const cha_con2 = document.querySelector(".charenge_content2")
// const cha_con3 = document.querySelector(".charenge_content3")

// window.addEventListener('load', function(){
//   let count = 0;
// cha_btn0.addEventListener("click",()=>{
//   count= count-4;
//   cha_con0.style.zIndex=count;
//   cha_con0.classList.remove('fuwa')
//   cha_con1.classList.add('fuwa')
// })
// cha_btn1.addEventListener("click",()=>{
//   count= count-4;
//   cha_con1.style.zIndex=count;
//   cha_con1.classList.remove('fuwa')
//   cha_con2.classList.add('fuwa')
// })
// cha_btn2.addEventListener("click",()=>{
//   count= count-4;
//   cha_con2.style.zIndex=count;
//   cha_con3.classList.remove('fuwa')
//   cha_con2.classList.add('fuwa')
// })



// cha_btn3.addEventListener("click",()=>{
//   count=count+4;
//   cha_con2.style.zIndex=count;
//   cha_btn3.classList.add('fuwa')
//   cha_btn2.classList.remove('fuwa')
// })
// cha_btn4.addEventListener("click",()=>{
//   count=count+4;
//   cha_con2.style.zIndex=count;
//   cha_btn3.classList.add('fuwa')
//   cha_btn2.classList.remove('fuwa')
// })
// })

const charengeAll = [...document.querySelectorAll(".charenge_All")];
const next = [...document.querySelectorAll(".next_btn")]
const prev = document.querySelector('.back_btn')
const bMain = document.querySelector('.b_main1')
console.log(charengeAll[0])

next.forEach((charenge,index) => {
  charenge.addEventListener("click",()=>{
    charengeAll[index].style.display='none';
    console.log(index);
    charengeAll[index+1].style.display= 'block'
    
  })
})
prev.addEventListener("click",()=>{
  charengeAll[3].style.display= 'none'
  charengeAll[0].style.display='block'
})
bMain.addEventListener("click",()=>{
  charengeAll[2].style.display= 'none'
  charengeAll[1].style.display='block'
})