const api_key = 'NCSJTUHVWWQ0EWKT' 
const api_secret = 'AU16IKRS7CVUPXXWOWP3ECGMEFBB7VCQ'

function getAuthorization(){
    let salt = getSalt();
    let date = getDate();
    let value = date + salt;
    let signature = getSignature(value, api_secret);
    let authoriztion = 'HMAC-SHA256 apiKey='+api_key+', date='+date+', salt='+salt+', signature='+signature;
    return authoriztion;
}

// salt를 활용하여  원본 데이터를 암호화 하는 과정
function getSalt(){
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // 
    var charactersLength = characters.length;
    for ( var i = 0; i < 30; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
// date를 생성하는 함수
function getDate(){
    let today = new Date();
    return today.toISOString(); // date를 ISO규정에 맞게 수정하는 과정
}

//Signature을 암호화 하는 과정
function getSignature(value, key){
    let signature = CryptoJS.HmacSHA256(value, key);
    return signature;
}

// requst 선언
var request;

// 순서대로 이름, 전화번호, 버튼url, id, 템플릿 받음
function sendMessage(reservationNumber, name, phonenumber, companyname, email, boothType, pfId, templateId, btn_url1, btn_url2, btn_url3){
    let url = 'https://api.solapi.com/messages/v4/send';

    request = new XMLHttpRequest();
  // 예외 처리 requset의 값이 없을 경우 알림
    if(!request){
        alert('request create fail');
        return;
    }
    // authoriztion 생성함수 호출 후 값 할당
    let authoriztion = getAuthorization();

    request.onreadystatechange = requestResult;
    request.open('POST', url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", authoriztion);
    
    // 줄바꾸기 : \n (br 아님)
    // 문구 수정 해야함
     // 객체임 이후 JSON으로 변환해야함
    var message = {"message":{
        "to": phonenumber,
        "from":"01033528779",
        "text":`[JUNiX Exhibition]\n${name}님 안녕하세요.\n상담 예약이 접수되었습니다.\n\n▶ 예약번호 : ${reservationNumber}\n▶ 성명 : ${name}\n▶ 회사명 : ${companyname}\n▶ 전화번호 : ${phonenumber}\n▶ 이메일 : ${email}\n▶ 부스타입 : ${boothType}`,
        "type":"ATA",
        "kakaoOptions":{
            "pfId":pfId,
            "templateId":templateId,
            "buttons":[{
                "buttonType":"WL",
                "buttonName":"상담예약 조회 및 변경",
                "linkPc":`http://${btn_url1}`,
                "linkMo":`http://${btn_url1}`},
                {
                    "buttonType":"WL",
                    "buttonName":"샘플 페이지 바로가기",
                    "linkPc":`http://${btn_url2}`,
                    "linkMo":`http://${btn_url2}`},
                {"buttonType":"WL",
                "buttonName":"홈페이지 바로가기",
                "linkPc":`http://${btn_url3}`,
                "linkMo":`http://${btn_url3}`}]}}}; 
                message = JSON.stringify(message)
                console.log(pfId)
                console.log(message)
    request.send(message);
    return;
}

function requestResult(){
    if(request.readyState == XMLHttpRequest.DONE){
        alert(request.responseText);
    }
}

function newReservationNumber(){
  //YYMMDDxxx001
    let reservationDay = getDate().replace("-","").substring(0,6);
    let count = 1;
    count++ 
    // count의 글자 수를 파악해서 앞의 0 붙히기
    let reservationNumber = reservationDay.toString() + count.toString()
    return reservationNumber
}   

function evaluateBoothtype(){
let input1 = document.querySelector("#Type1").checked
let input2 = document.querySelector("#Type2").checked
let input3 = document.querySelector("#Type3").checked

console.log(input1)
console.log(input2)
console.log(input3)

let evaluateBooth = null;

if(input1){ evaluateBooth = "일반형";}
else if(input2){evaluateBooth = "고급형";}
else if(input3){evaluateBooth = "프리미엄형";}
else{evaluateBooth = "미선택"}

return evaluateBooth;
}

  // 정보 입력
  function btn_sendMessage(){
    let reservationNumber = newReservationNumber();
    let name = document.getElementById('Name').value;
    let phonenumber = document.getElementById('Tel').value;
    let companyname = document.getElementById('Com').value;
    let email = document.getElementById('Mail').value;
    // let boothType = "테스트용";
    let boothType = evaluateBoothtype();
    let pfId = "KA01PF22041206411o33TFWW9Sl71Ppp" // 카카오톡 채널별로 변경해줘야함 
    let templateId = "KA01TP220506060400904ek1PKiJvzhD" // 탬플릿 별로 변경해줘야함
    let btn_url1 = "localhost:8080/index_subpage.html" // 상담예약 및 조회 및 변경
    let btn_url2 = "juniklee.github.io/test-git/" // 샘플 페이지 바로가기
    let btn_url3 = "localhost:8080/index_dummy.html" // 홈페이지 바로가기 

    console.log(reservationNumber);
    console.log(name);
    console.log(phonenumber);
    console.log(companyname);
    console.log(email);
    console.log(boothType);

    sendMessage(reservationNumber, name, phonenumber, companyname, email, boothType, pfId, templateId, btn_url1, btn_url2, btn_url3);
}