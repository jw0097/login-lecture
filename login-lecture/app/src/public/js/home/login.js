const id = document.querySelector("#id");
const psword = document.querySelector('#psword');
const loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);

    fetch('/login', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",            
        },
        body: JSON.stringify(req)
    }).then(function(res){
        return res.json();
    }).then(function(res){
        if(res.success){
            location.href = '/'
        } else {
            alert(res.msg);
        }
    });
}
