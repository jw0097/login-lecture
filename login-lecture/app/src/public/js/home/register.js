const id = document.querySelector("#id");
const name = document.querySelector("#name");
const psword = document.querySelector('#psword');
const confirmPsword = document.querySelector('#confirm-psword');
const registerBtn = document.querySelector('#save-button');

registerBtn.addEventListener('click', register);

function register(){
    if (!id.value) return alert("아이디를 입력해주십시오.");
    if (psword.value !== confirmPsword.value)
        return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };

    fetch('/register', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",            
        },
        body: JSON.stringify(req)
    }).then(function(res){
        return res.json();
    }).then(function(res){
        if(res.success){
            location.href = '/login'
        } else {
            alert(res.msg);
        }
    });
}
