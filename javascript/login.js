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
  let id = document.getElementById('nick').value;
  let passwd = document.getElementById('pw').value;

  //if(!(check_sum(email, id, passwd))) return;

  window.localStorage.setItem("email", email);
  window.localStorage.setItem('nick', id);
  window.localStorage.setItem('passwd', passwd);

  form.submit();
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

//function check_sum(email, nick, passwd){}