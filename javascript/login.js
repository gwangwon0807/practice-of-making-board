//이메일, 아이디, 비밀번호 value 지워줌 -> 비밀번호의 경우 type = text -> password로 변경
function remove_origin_val(target){
  target.value = "";
  target.onclick ="";

  if(target.id == "pw")
    {
      target.type = "password";
    }
}

//회원가입 작성한 email, nickname, password를 local storage에 추가
function saveInStorage(){
  let form = document.querySelector('form');

  let email = document.getElementById('eMail').value;
  let nick = document.getElementById('nick').value;
  let passwd = document.getElementById('pw').value;

  if(!(check_sum(email, nick, passwd))){
    return 0;
  }

  window.localStorage.setItem("email", email);
  window.localStorage.setItem('nick', nick);
  window.localStorage.setItem('passwd', passwd);

  form.setAttribute('action', './signin.html');
}

//local storage에 있는 내용을 비교 알맞은 정보 입력시 해당 페이지로 이동
function check_info(){
  let form = document.querySelector('form');

  let input_email = document.getElementById('eMail').value;
  let input_passwd = document.getElementById('pw').value;

  let email =  window.localStorage.getItem("email");
  let passwd = window.localStorage.getItem("passwd");

  if(input_email != email){
    alert('email이 다릅니다');
    return;
  }
  else if(input_passwd != passwd){
    alert('비밀번호가 다릅니다');
    return;
  }

  form.submit();
}

function check_sum(email, nick, passwd){
  // '@'가 포함 .ac.kr 도 가능하게끔
  const check_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
  
  //영문자 시작 8글자 이하
  const check_nick = /^[a-zA-Z][a-zA-Z0-9]{0,7}$/ 

  //8~15까지 특수문자 반드시 필수
  const check_passwd = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/

  if(!(check_email.test(email))){
    alert('이메일 형식이 잘못되었습니다.');
    return 0;
  }
  else if(!(check_nick.test(nick))){
    alert('닉네임은 8글자 이하 영어로 시작하고 특수문자 없이 작성해주세요');
    return 0;
  }
  else if(!(check_passwd.test(passwd))){
    alert('비밀번호는 8 ~ 15 글자 사이 특수문자가 들어가도록 작성해주세요');
    return 0;
  }
  return 1;
}