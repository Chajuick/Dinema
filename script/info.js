//아이디 검수
const regId = /^[a-zA-Z0-9]{4,12}$/;
const Idcheck = document.getElementById("ID_err_mes");
const Idbtn = document.getElementById("checkerIdBtn");
const ID = document.getElementById("inputID");
ID.addEventListener('change',() => {
  if(ID.value.length === 0){
    Idcheck.innerText = '아이디를 입력해주세요';
    Idcheck.style.color = 'rgb(188, 188, 188)';
    if(Idbtn.classList.contains('act')){
      Idbtn.classList.remove('act');
    }
  } else if (ID.value.length < 4){
    Idcheck.innerText = '아이디가 너무 짧습니다';
    Idcheck.style.color = 'rgb(246, 68, 68)';
    if(Idbtn.classList.contains('act')){
      Idbtn.classList.remove('act');
    }
  } else if (regId.test(ID.value) === true){
    Idcheck.innerText = '아이디 중복확인을 해주세요';
    Idcheck.style.color = 'rgb(150, 204, 150)';
    Idbtn.classList.add('act');
  } else {
    Idcheck.innerText = '사용할 수 없는 아이디입니다';
    Idcheck.style.color = 'rgb(246, 68, 68)';
    if(Idbtn.classList.contains('act')){
      Idbtn.classList.remove('act');
    }
  }
})
//비밀번호 검수
const regPw = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/;
const Pwcheck = document.getElementById("Pw_err_mes");
const Pw = document.getElementById("inputPw");
let PwReactor = 0;
Pw.addEventListener('change',() => {
  if(Pw.value.length === 0){
    Pwcheck.innerText = '비밀번호를 입력해주세요';
    Pwcheck.style.color = 'rgb(188, 188, 188)'
    PwReactor = 0;
    PwRe.disabled = true;
    PWReTest();
  } else if (Pw.value.length < 8){
    Pwcheck.innerText = '비밀번호가 너무 짧습니다';
    Pwcheck.style.color = 'rgb(246, 68, 68)';
    PwReactor = 0;
    PwRe.disabled = true;
    PWReTest();
  } else if (regPw.test(Pw.value) === true){
    Pwcheck.innerText = '사용가능한 비밀번호입니다';
    Pwcheck.style.color = 'rgb(150, 204, 150)';
    PwReactor = 1;
    PwRe.disabled = false;
    PWReTest();
  } else {
    Pwcheck.innerText = '사용할 수 없는 비밀번호입니다';
    Pwcheck.style.color = 'rgb(246, 68, 68)';
    PwReactor = 0;
    PwRe.disabled = true;
    PWReTest();
  }
})
//비밀번호 확인 확인
const PwRe = document.getElementById("inputPwRe");
const PwRecheck = document.getElementById("PwRe_err_mes");
PwRe.addEventListener('change',() => {
  PWReTest();
})
function PWReTest() {
  if (PwReactor == 0){
    PwRecheck.innerText = ' ';
  } else {
      if (Pw.value === PwRe.value){
      PwRecheck.innerText = '비밀번호와 일치합니다';
      PwRecheck.style.color = 'rgb(150, 204, 150)';

    } else if(PwRe.value.length === 0) {
      PwRecheck.innerText = ' ';
    } else{
      PwRecheck.innerText = '비밀번호와 일치하지 않습니다';
      PwRecheck.style.color = 'rgb(246, 68, 68)';
    }
  }
}
//휴대폰 번호 확인
const PhNum = document.getElementById("inputPh");
const PhBtn = document.getElementById("checkerPhBtn");
PhNum.addEventListener('change',() => {
  if(PhNum.value.length === 11){
    PhBtn.classList.add("act");
    PhBtn.disabled = false;
  } else {
    if(PhBtn.classList.contains("act")){
      PhBtn.classList.remove("act");
      PhBtn.disabled = true;
    } 
  }
})

PhBtn.addEventListener('click',() => {
  if(PhBtn.classList.contains("act")){
    alert("인증이 완료되었습니다");
    PhBtn.classList.remove("act");
    PhNum.disabled = true;
    PhBtn.disabled = true;
    PhBtn.classList.add("complete");
    PhBtn.value = "인증완료"
    PhBtn.style.Color = 'white';
  }
})
//메일 확인
const MailId = document.getElementById("inputMail_id");
const MailDomainI = document.getElementById("inputMail_domain");
const MailDomainS = document.getElementById("selectMail_domain");
const Mailcheck = document.getElementById("Mail_err_mes");
const MailBtn= document.getElementById("checkerMail");
const regMail = /^[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const regMailID = /^[A-Za-z0-9_\.\-]{1,}$/;

//이메일 앞 칸 형식 확인
MailId.addEventListener('change',() => {
  if(MailDomainI.value.length === 0){
    Mailcheck.innerText = '';
  } else{
    if(regMailID.test(MailId.value) === true){
      if(regMail.test(MailDomainI.value) === true){
        mailYes();
      } else {
        mailNo();
      }
    } else {
      mailNo();
    }
  }
})
//이메일 뒷 칸 형식 확인
MailDomainS.addEventListener('change',() => {
  if( MailDomainS.value.length === 4 ) {
    MailDomainI.disabled = false;
  } else {
    MailDomainI.disabled = true;
    MailDomainI.value = MailDomainS.value;
    if(regMail.test(MailDomainI.value) === true){
      if(regMailID.test(MailId.value) === true){
        mailYes();
      } else {
        if( MailId.value.length === 0) {
          Mailcheck.innerText = '';
        } else {
          mailNo();
        }
      }
    } else {
        if( MailId.value.length === 0) {
          Mailcheck.innerText = '';
        } else {
          mailNo();
        }
    }
  }
})
MailDomainI.addEventListener('change',() => {
  if(regMail.test(MailDomainI.value) === true){
    if(regMailID.test(MailId.value) === true){
      mailYes();
    } else {
      if( MailId.value.length === 0) {
        Mailcheck.innerText = '';
      } else {
        mailNo();
      }
    }
  } else {
      if( MailId.value.length === 0) {
        Mailcheck.innerText = '';
      } else {
        mailNo();
      }
  }
})

//이메일 형식 옳바름
function mailYes() {
  Mailcheck.innerText = '옳바른 메일 형식';
  Mailcheck.style.color = 'rgb(150, 204, 150)';
  MailBtn.classList.add("act");
  MailBtn.disabled = false;
}
function mailNo() {
  Mailcheck.innerText = '옳바르지 않은 메일 형식';
  Mailcheck.style.color = 'rgb(246, 68, 68)';
  if(MailBtn.classList.contains("act")){
    MailBtn.classList.remove("act");
  }
  MailBtn.disabled = true;
}

