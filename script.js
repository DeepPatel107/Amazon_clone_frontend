const imgs = [document.querySelector('.header-slider #img1'),
    document.querySelector('.header-slider #img2'),
    document.querySelector('.header-slider #img3'),
    document.querySelector('.header-slider #img4'),
    document.querySelector('.header-slider #img5'),
    document.querySelector('.header-slider #img6')
];

const prev_btn=document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;
function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}
changeSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeSlide();
})

next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeSlide();
})

// const scrollContainer = document.querySelectorAll('.products');
// // myInterval = setInterval(function(evt){
// //     evt.preventdefault();
// //     item.scollLeft += evt.deltaY;
// // },3000)


// for(const item of scrollContainer){
//     item.addEventListener('wheel',(evt)=>{
//         evt.preventdefault();
//         item.scrollLeft += evt.deltaY;
//     })
// }

