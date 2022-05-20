const throttle = (callback, delay) => {
    let timerId;
    return event => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback(event);
            timerId = null;
        }, delay, event);
    };
};

let imgs = document.querySelectorAll(".contents_img") // 부스이미지 모음
let texts = document.querySelectorAll(".contents_text") // 부스 텍스트 모음
let boothimg1 = imgs[0] // 기본형 
let boothimg2 = imgs[1] // 고급형
let boothimg3 = imgs[2] // 프리미엄
let boothtext1 = texts[0] // 기본형 텍스트
let boothtext2 = texts[1] // 고급형 텍스트
let boothtext3 = texts[2] // 프리미엄형 텍스트

let preImg1X =boothimg1.clientWidth // 기본형 이미지 너비  
let pretext1X =boothtext1.clientWidth // 기본형 텍스트 너비  
let preImg2X =boothimg2.clientWidth // 고급형 이미지 너비  
let pretext2X =boothtext2.clientWidth // 고급형 텍스트 너비  
let preImg3X =boothimg3.clientWidth // 프리미엄형 이미지 너비  
let pretext3X =boothtext3.clientWidth // 프리미엄형 텍스트 너비

let sections = document.querySelectorAll("section") // 섹션 불러오기
let section1 = sections[0] // 섹션 1
let section2 = sections[1] // 섹션 불러오기
let section3 = sections[2] // 섹션 불러오기
let section4 = sections[3] // 섹션 불러오기
let section5 = sections[4] // 섹션 불러오기
let section6 = sections[5] // 섹션 불러오기
let section7 = sections[6] // 섹션 불러오기

let gnbs = document.querySelectorAll("header nav ul li")
let gnb1 = gnbs[0]
let gnb2 = gnbs[1]
let gnb3 = gnbs[2]
let gnb4 = gnbs[3]
let gnb5 = gnbs[4]
let gnb6 = gnbs[5]
let gnb7 = gnbs[6]

let $nav =document.querySelector("header>nav")
console.log($nav)
gnb1.addEventListener("click", ()=> {
    window.scrollTo(0,section1.offsetTop - $nav.offsetHeight*1.1)
})
gnb2.addEventListener("click", ()=> {
    window.scrollTo(0,section2.offsetTop - $nav.offsetHeight*1.1)
})
gnb3.addEventListener("click", ()=> {
    window.scrollTo(0,section3.offsetTop - $nav.offsetHeight*1.1)
})
gnb4.addEventListener("click", ()=> {
    window.scrollTo(0,section4.offsetTop - $nav.offsetHeight*1.1)
})
gnb5.addEventListener("click", ()=> {
    window.scrollTo(0,section5.offsetTop - $nav.offsetHeight*1.1)
})
gnb6.addEventListener("click", ()=> {
    window.scrollTo(0,section6.offsetTop - $nav.offsetHeight*1.1)
})
gnb7.addEventListener("click", ()=> {
    window.scrollTo(0,section7.offsetTop - $nav.offsetHeight*1.1)
})


function booth1Animaiton(){
    boothimg1.style.transitionDuration = "1s";
    boothtext1.style.transitionDuration = "1.2s";
    boothimg1.style.visibility = "";
    boothtext1.style.visibility = "";
    boothimg1.style.transform = `translate(${0}px)`;
    boothtext1.style.transform = `translate(${0}px)`;
    }
function booth2Animaiton(){
    boothimg2.style.transitionDuration = "1s"
    boothtext2.style.transitionDuration = "1.2s"
    boothimg2.style.visibility = ""
    boothtext2.style.visibility = ""
    boothimg2.style.transform = `translate(${0}px)`
    boothtext2.style.transform = `translate(${0}px)`
    }
function booth3Animaiton(){
    boothimg3.style.transitionDuration = "1s"
    boothtext3.style.transitionDuration = "1.2s"
    boothimg3.style.visibility = ""
    boothtext3.style.visibility = ""
    boothimg3.style.transform = `translate(${0}px)`
    boothtext3.style.transform = `translate(${0}px)`
    }


function moPrePosition(){
boothimg1.style.transform = `translate(${-preImg1X}px)` // 오른쪽으로 너비만큼  이동
boothtext1.style.transform = `translate(${pretext1X}px)` // 오른쪽으로 너비만큼  이동
boothimg2.style.transform = `translate(${preImg2X}px)` // 왼쪽으로 너비만큼  이동
boothtext2.style.transform = `translate(${-pretext2X}px)` // 왼쪽으로 너비만큼  이동
boothimg3.style.transform = `translate(${-preImg3X}px)` // 오른쪽으로 너비만큼  이동
boothtext3.style.transform = `translate(${pretext3X}px)` // 오른쪽으로 너비만큼  이동

boothimg1.style.visibility = "hidden"
boothtext1.style.visibility = "hidden"
boothimg2.style.visibility = "hidden"
boothtext2.style.visibility = "hidden"
boothimg3.style.visibility = "hidden"
boothtext3.style.visibility = "hidden"
}
function pcPrePosition(){
boothimg1.style.transform = `translate(${preImg1X}px)` // 오른쪽으로 너비만큼  이동
boothtext1.style.transform = `translate(${pretext1X}px)` // 오른쪽으로 너비만큼  이동
boothimg2.style.transform = `translate(${-preImg2X}px)` // 왼쪽으로 너비만큼  이동
boothtext2.style.transform = `translate(${-pretext2X}px)` // 왼쪽으로 너비만큼  이동
boothimg3.style.transform = `translate(${preImg3X}px)` // 오른쪽으로 너비만큼  이동
boothtext3.style.transform = `translate(${pretext3X}px)` // 오른쪽으로 너비만큼  이동

boothimg1.style.visibility = "hidden"
boothtext1.style.visibility = "hidden"
boothimg2.style.visibility = "hidden"
boothtext2.style.visibility = "hidden"
boothimg3.style.visibility = "hidden"
boothtext3.style.visibility = "hidden"
}


window.innerWidth >= 1000 ?  pcPrePosition() : moPrePosition()

let booth1AniStrat = boothimg1.offsetTop - window.innerHeight*0.9
let booth2AniStart = boothimg2.offsetTop - window.innerHeight*0.9
let booth3AniStart = boothimg3.offsetTop - window.innerHeight*0.9
let booth3AniEnd = boothimg3.offsetTop + boothimg3.offsetHeight
let section1AniStart = section1.offsetTop - window.innerHeight*0.5
let section2AniStart = section2.offsetTop - window.innerHeight*0.5
let section3AniStart = section3.offsetTop - window.innerHeight*0.5
let section4AniStart = section4.offsetTop - window.innerHeight*0.5
let section5AniStart = section5.offsetTop - window.innerHeight*0.5
let section6AniStart = section6.offsetTop - window.innerHeight*0.5
let section7AniStart = section7.offsetTop - window.innerHeight*0.5

function gnbReset(){
    gnb1.style.fontWeight = ""
    gnb2.style.fontWeight = ""
    gnb3.style.fontWeight = ""
    gnb4.style.fontWeight = ""
    gnb5.style.fontWeight = ""
    gnb6.style.fontWeight = ""
    gnb7.style.fontWeight = ""
}


window.addEventListener("scroll",  throttle(()=>{

    if(scrollY >= booth1AniStrat && scrollY < booth2AniStart){
        // console.log("1")
        // console.log(boothtypearea.offsetTop)
        
        booth1Animaiton()
    }
    else if(scrollY >= booth2AniStart && scrollY < booth3AniStart){
        // console.log("2")

        // console.log(boothtypearea.offsetTop)
        booth2Animaiton()
    }
    else if(scrollY >= booth3AniStart && scrollY <booth3AniEnd){
        // console.log("3")

        // console.log(boothtypearea.offsetTop)
        booth3Animaiton()
    }
    if(screenY < section1AniStart){gnbReset()}
    if(scrollY >= section1AniStart && scrollY < section2AniStart){
        gnbReset()
        gnb1.style.fontWeight = "bold"
    }
    else if(scrollY >= section2AniStart && scrollY < section3AniStart){
        gnbReset()
        gnb2.style.fontWeight = "bold"
    }
    else if(scrollY >= section3AniStart && scrollY < section4AniStart){
        gnbReset()
        gnb3.style.fontWeight = "bold"
    }
    else if(scrollY >= section4AniStart && scrollY < section5AniStart){
        gnbReset()
        gnb4.style.fontWeight = "bold"
    }
    else if(scrollY >= section5AniStart && scrollY < section6AniStart){
        gnbReset()
        gnb5.style.fontWeight = "bold"
    }
    else if(scrollY >= section6AniStart && scrollY < section7AniStart ){
        gnbReset()
        gnb6.style.fontWeight = "bold"
    }
    else if(scrollY >= section7AniStart ){
        gnbReset()
        gnb7.style.fontWeight = "bold"
    }
    // if((boothimg1.style.visibility == "") && (boothimg2.style.visibility == "") && (boothimg3.style.visibility == "") && (document.querySelector("body").style.overflowX =="hidden")){
    //     console.log("11")
    //     setTimeout(removeXscroll, 10)}
}, 200))


function removeXscroll(){
    let body1 = document.querySelector("body")
    body1.style.overflowX == "hidden" ? body1.style.overflowX = "" : body1.style.overflowX = "hidden"
}
removeXscroll()

// top버튼 클릭시 font굵기 초기화
document.querySelector(".goto-top").addEventListener("click",gnbReset)
