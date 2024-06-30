let title = document.getElementById('title');
let content = document.getElementById('content');

function create_list(){
  let title_value = title.value;  
  let content_value = content.value;  

  if(title_value == ""){
    alert('제목을 입력하세요');
    return;
  }else if(content_value == ""){
    alert('내용을 입력하세요');
    return;
  }

  if(!(confirm('정말 작성하시겠습니까?'))){
    title.value = '';
    content.value = '';
    return;
  }

  localStorage.setItem(title_value, content_value);
  location.href ='./member_main.html';
}
