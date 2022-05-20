let imgs = document.querySelectorAll(".contents_img")
let texts = document.querySelectorAll(".contents_text")
let boothimg1 = imgs[0]
let boothimg2 = imgs[1]
let boothimg3 = imgs[2]
let boothtext1 = texts[0]
let boothtext2 = texts[1]
let boothtext3 = texts[2]

let sections = document.querySelectorAll("section")
let section1 = sections[0]
let section2 = sections[1]
let section3 = sections[2]
let section4 = sections[3]
let section5 = sections[4]
let section6 = sections[5]


let gnbs = document.querySelectorAll("header nav ul li")
let gnb1 = gnbs[0]
let gnb2 = gnbs[1]
let gnb3 = gnbs[2]
let gnb4 = gnbs[3]
let gnb5 = gnbs[4]
let gnb6 = gnbs[5]
console.log(gnbs)


let preImg1X =boothimg1.clientWidth
let pretext1X =boothtext1.clientWidth
let preImg2X =boothimg2.clientWidth
let pretext2X =boothtext2.clientWidth
let preImg3X =boothimg3.clientWidth
let pretext3X =boothtext3.clientWidth

boothimg1.style.transform = `translate(${preImg1X}px)`
boothtext1.style.transform = `translate(${preImg1X}px)`
boothimg2.style.transform = `translate(${-preImg2X}px)`
boothtext2.style.transform = `translate(${-preImg2X}px)`
boothimg3.style.transform = `translate(${preImg3X}px)`
boothtext3.style.transform = `translate(${preImg3X}px)`


boothimg1.style.visibility = "hidden"
boothtext1.style.visibility = "hidden"
boothimg2.style.visibility = "hidden"
boothtext2.style.visibility = "hidden"
boothimg3.style.visibility = "hidden"
boothtext3.style.visibility = "hidden"
function test1(){
    boothimg1.style.transitionDuration = "1s"
boothtext1.style.transitionDuration = "1.2s"
boothimg1.style.visibility = "visible"
boothtext1.style.visibility = "visible"
    boothimg1.style.transform = `translate(${0}px)`
boothtext1.style.transform = `translate(${0}px)`
}
function test2(){
    boothimg2.style.transitionDuration = "1s"
boothtext2.style.transitionDuration = "1.2s"
boothimg2.style.visibility = "visible"
boothtext2.style.visibility = "visible"
boothimg2.style.transform = `translate(${0}px)`
boothtext2.style.transform = `translate(${0}px)`
}
function test3(){
    boothimg3.style.transitionDuration = "1s"
boothtext3.style.transitionDuration = "1.2s"
boothimg3.style.visibility = "visible"
boothtext3.style.visibility = "visible"
    boothimg3.style.transform = `translate(${0}px)`
boothtext3.style.transform = `translate(${0}px)`
}
function pretest1(){
    boothimg1.style.transitionDuration = ""
    boothtext1.style.transitionDuration = ""
    boothimg1.style.visibility = "hidden"
    boothtext1.style.visibility = "hidden"
    boothimg1.style.transform = `translate(${preImg1X}px)`
boothtext1.style.transform = `translate(${preImg1X}px)`
}
function pretest2(){
    boothimg2.style.transitionDuration = ""
    boothtext2.style.transitionDuration = ""
    boothimg2.style.visibility = "hidden"
    boothtext2.style.visibility = "hidden"
    boothimg2.style.transform = `translate(${-preImg2X}px)`
boothtext2.style.transform = `translate(${-preImg2X}px)`
}
function pretest3(){
    boothimg3.style.transitionDuration = ""
    boothtext3.style.transitionDuration = ""
    boothimg3.style.visibility = "hidden"
    boothtext3.style.visibility = "hidden"
    boothimg3.style.transform = `translate(${preImg3X}px)`
boothtext3.style.transform = `translate(${preImg3X}px)`
}

// setTimeout(test, 1000)

let boothtypearea = document.querySelector("#booth_type")


// 브라우저 화면의 60% 노출 된경우
// 브라우저의 높이
// 대상의 시작지점
// 대상의 시작지점 - 브라우저의 높이의 50%
let aa = boothimg1.offsetTop - window.innerHeight*0.9
let bb = boothimg2.offsetTop - window.innerHeight*0.9
let cc = boothimg3.offsetTop - window.innerHeight*0.9
let aaa = section1.offsetTop - window.innerHeight*0.5
let bbb = section2.offsetTop - window.innerHeight*0.5
let ccc = section3.offsetTop - window.innerHeight*0.5
let ddd = section4.offsetTop - window.innerHeight*0.5
let eee = section5.offsetTop - window.innerHeight*0.5
let fff = section6.offsetTop - window.innerHeight*0.5
window.addEventListener("scroll", ()=>{
    if(scrollY >= aa && scrollY < bb){
        console.log("1")
        // console.log(boothtypearea.offsetTop)
        test1()
    }
    else if(scrollY >= bb && scrollY < cc){
        console.log("2")

        // console.log(boothtypearea.offsetTop)
        test2()
    }
    else if(scrollY >= cc){
        console.log("3")

        // console.log(boothtypearea.offsetTop)
        test3()
    }
    

    if(scrollY >= aaa && scrollY < bbb){
        
        gnb1.classList.remove("test")
        gnb2.classList.remove("test")
        gnb3.classList.remove("test")
        gnb4.classList.remove("test")
        gnb5.classList.remove("test")
        gnb6.classList.remove("test")
        gnb1.classList.add("test")
        
    }
    else if(scrollY >= bbb && scrollY < ccc){
        gnb1.classList.remove("test")
        gnb2.classList.remove("test")
        gnb3.classList.remove("test")
        gnb4.classList.remove("test")
        gnb5.classList.remove("test")
        gnb6.classList.remove("test")
        gnb2.classList.add("test")
    }
    else if(scrollY >= ccc && scrollY < ddd){
        gnb1.classList.remove("test")
        gnb2.classList.remove("test")
        gnb3.classList.remove("test")
        gnb4.classList.remove("test")
        gnb5.classList.remove("test")
        gnb6.classList.remove("test")
        gnb3.classList.add("test")
    }
    else if(scrollY >= ddd && scrollY < eee){
        gnb1.classList.remove("test")
        gnb2.classList.remove("test")
        gnb3.classList.remove("test")
        gnb4.classList.remove("test")
        gnb5.classList.remove("test")
        gnb6.classList.remove("test")
        gnb4.classList.add("test")
    }
    else if(scrollY >= eee && scrollY < fff){
        gnb1.classList.remove("test")
        gnb2.classList.remove("test")
        gnb3.classList.remove("test")
        gnb4.classList.remove("test")
        gnb5.classList.remove("test")
        gnb6.classList.remove("test")
        gnb5.classList.add("test")
    }
    else if(scrollY >= fff){
        gnb1.classList.remove("test")
        gnb2.classList.remove("test")
        gnb3.classList.remove("test")
        gnb4.classList.remove("test")
        gnb5.classList.remove("test")
        gnb6.classList.remove("test")
        gnb6.classList.add("test")
    }

})

function pretest(){
    pretest1()
    pretest2()
    pretest3()
}