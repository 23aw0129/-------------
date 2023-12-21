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

// const inputBtn = [...document.querySelectorAll('.cho .btn')];
// console.log(inputBtn);
// inputBtn.forEach((disabled,index) =>{
//   disabled.addEventListener("click",()=>{
//     disabled[index].setAttribute('disabled',true)
//   })
// })

// $(function(){
//   $('.check').on('click', function() {
//     if ($(this).prop('checked')){
//       // 一旦全てをクリアして再チェックする
//       $('.check').prop('checked', false);
//       $(this).prop('checked', true);
//     }
//   });
// });

const inputClass = document.getElementsByClassName("one");
console.log(inputClass);
for(let i=0;i<inputClass.length;i++){
    inputClass[i].onclick = function(){
      for(let u=0;u<inputClass.length;u++){
        //４回めぐって　0 1 2 3 4 
        inputClass[u].checked = false;
        this.checked = true;
      }
    }
} 
const inputClass2 = document.getElementsByClassName("two");
console.log(inputClass2);
for(let i=0;i<inputClass2.length;i++){
    inputClass2[i].onclick = function(){
      for(let u=0;u<inputClass2.length;u++){
        //４回めぐって　0 1 2 3 4 
        inputClass2[u].checked = false;
        this.checked = true;
      }
    }
} 

//都道府県
const touhoku = ['北海道','青森県','岩手県','秋田県','山形県','福島県','秋田県']
const kantou = ['茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県','新潟県','石川県','富山県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県']
const kinki = ['京都府','大阪府','三重県','滋賀県','山形県','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県']
const sikoku = ['徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県','大分県','熊本県','宮崎県','鹿児島県','沖縄県']
const All = ['北海道','青森県','岩手県','秋田県','山形県','福島県','秋田県','茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県','新潟県','石川県','富山県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県','京都府','大阪府','三重県','滋賀県','山形県','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県','徳島県','香川県','愛媛県','高知県','山形県','福岡県','佐賀県','長崎県','大分県','熊本県','宮崎県','鹿児島県','沖縄県']
let place = document.querySelector('.place_p')
inputClass2[0].addEventListener("click",()=>{
  place.innerHTML = touhoku[Math.floor(Math.random() * touhoku.length)] 
})
let place1 = document.querySelector('.place_p')
inputClass2[1].addEventListener("click",()=>{
  place.innerHTML = kantou[Math.floor(Math.random() * kantou.length)] 
})
let place2 = document.querySelector('.place_p')
inputClass2[2].addEventListener("click",()=>{
  place.innerHTML = kinki[Math.floor(Math.random() * kinki.length)] 
})
let place3 = document.querySelector('.place_p')
inputClass2[3].addEventListener("click",()=>{
  place.innerHTML = sikoku[Math.floor(Math.random() * sikoku.length)] 
})
let place4 = document.querySelector('.place_p')
inputClass2[4].addEventListener("click",()=>{
  place.innerHTML = All[Math.floor(Math.random() * All.length)] 
})

// 課題　内容
//決断・判断力
const ass = [`あらかじめ何個かやりたいこと<br>
              を決めておいて現地で何をする<br>
              かをその場で決める`,`旅で目的地最寄りまで着いたら<br>
              スマホ禁止（宿舎などでは例外）<br>
              大雑把な計画を自分で密度を濃<br>
              い旅へと変えていこう`
              ]
let ass_p = document.querySelector('.ass_p');


const choice = [`そこの名物を3種類食べ<br>
                観光スポットに4カ所行<br>
                き宿は現地で取る<span>*宿泊あり</span>`]
let choice_p= document.querySelector('.choice_p')


const choiceB = [`そこの名物を5種類食べ<br>
観光スポットに3カ所行<br>
く。<span>*宿泊なし</span>`]
let choice_p_b =document.querySelector('.choice_p_b')


inputClass[0].addEventListener("click",()=>{
  ass_p.innerHTML = ass[Math.floor(Math.random()*ass.length)]
  choice_p.innerHTML = choice[Math.floor(Math.random()*choice.length)]
  choice_p_b.innerHTML = choiceB[Math.floor(Math.random()*choiceB.length)]
})


//チャレンジ精神
const ass1 = [`リスクを受け入れ、失敗を<br>
                恐れない(大きいお金を賭ける、<br>
                旅先で出会った人に写真を撮って<br>
                もらえるように頼む)など`,`旅で目的地最寄りまで着いたら<br>
                スマホ禁止（宿舎などでは例外）<br>
                大雑把な計画を自分で密度を濃<br>
                い旅へと変えていこう`,]
let ass_p_1 = document.querySelector('.ass_p');


const choice1 = [`旅で出会った人に話しかけてみ<br>よう。<br>
              体験したことないこと、食べた<br>ことがな
                いものなどに挑戦して<br>みよう。<span>*宿泊あり/宿舎なし兼用</span>`]
let choice_p_1= document.querySelector('.choice_p')


const choiceB1 = [``]
let choice_p_b_1 =document.querySelector('.choice_p_b')


inputClass[1].addEventListener("click",()=>{
  ass_p_1.innerHTML = ass1[Math.floor(Math.random()*ass.length)]
  choice_p_1.innerHTML = choice1[Math.floor(Math.random()*choice.length)]
  choice_p_b_1.innerHTML = choiceB1[Math.floor(Math.random()*choiceB.length)]
})

//多様性
const ass2 = [`全く興味のないものを体験して<br>
                みよう。体験したことないもの<br>
                でも可`,
              ]
let ass_p_2 = document.querySelector('.ass_p');


const choice2 = [`色んな人に話しかけその人の、<br>
                  ことやお勧めの場所などを<br>
                  聞いてみよう<span>*宿泊あり/宿舎なし兼用</span>`]
let choice_p_2= document.querySelector('.choice_p')


const choiceB2 = [``]
let choice_p_b_2 =document.querySelector('.choice_p_b')


inputClass[2].addEventListener("click",()=>{
  ass_p_2.innerHTML = ass2[Math.floor(Math.random()*ass.length)]
  choice_p_2.innerHTML = choice2[Math.floor(Math.random()*choice.length)]
  choice_p_b_2.innerHTML = choiceB2[Math.floor(Math.random()*choiceB.length)]
})

//自分の可能性
const ass3 = [`自分が興味のあることをひたすら<br>
                挑戦してみよう。`,
              ]
let ass_p_3 = document.querySelector('.ass_p');


const choice3 = [`自分に何ができるのかを<br>
                  たくさん試し答えが出る<br>
                  までひたすら続ける。<span>*宿泊あり/宿舎なし兼用</span>`]
let choice_p_3= document.querySelector('.choice_p')


const choiceB3 = [``]
let choice_p_b_3 =document.querySelector('.choice_p_b')


inputClass[3].addEventListener("click",()=>{
  ass_p._3innerHTML = ass3[Math.floor(Math.random()*ass.length)]
  choice_p_3.innerHTML = choice3[Math.floor(Math.random()*choice.length)]
  choice_p_b_3.innerHTML = choiceB3[Math.floor(Math.random()*choiceB.length)]
})

//特になし
const ass4 = [`d`,
              ]
let ass_p_4 = document.querySelector('.ass_p');


const choice4 = [`d`]
let choice_p_4= document.querySelector('.choice_p')


const choiceB4 = [`d`]
let choice_p_b_4 =document.querySelector('.choice_p_b')


inputClass[4].addEventListener("click",()=>{
  ass_p_4.innerHTML = ass4[Math.floor(Math.random()*ass.length)]
  choice_p_4.innerHTML = choice4[Math.floor(Math.random()*choice.length)]
  choice_p_b_4.innerHTML = choiceB4[Math.floor(Math.random()*choiceB.length)]
})