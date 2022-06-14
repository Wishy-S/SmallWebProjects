function validate(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    // console.log(username+email);
    checkusername(username);
    checkemail(email);
    checkpassword(password);
    checkpasswordsmatch(password,cpassword);
}
function checkusername(username){
    
    if(username.length > 7){
        if(document.getElementById('username').classList.contains('error')){
            document.getElementById('username').classList.replace('error','success')
        }else {
        document.getElementById('username').classList.add('success')
        }
        document.getElementById('username_error').innerHTML = null;
        console.log(username);
    }else{
        if(document.getElementById('username').classList.contains('success')){
            document.getElementById('username').classList.replace('success','error')
        }else{ 
        document.getElementById('username').classList.add('error')
        }
        document.getElementById('username_error').innerText = "username must be 8 letters long";
    }
}
function checkemail(email){
    if(email.length > 8 && email.includes('@gmail')){
        if(document.getElementById('email').classList.contains('error')){
            document.getElementById('email').classList.replace('error','success')
        }else {
        document.getElementById('email').classList.add('success')
        }
        document.getElementById('email_error').innerHTML = null;
        console.log(username);
    }else{
        if(document.getElementById('email').classList.contains('success')){
            document.getElementById('email').classList.replace('success','error')
        }else{ 
        document.getElementById('email').classList.add('error')
        }
        document.getElementById('email_error').innerText = "email must include @gmail ,8 letters long";
    }
}
function checkpassword(pwd){
    if(pwd.length > 7 && pwd.includes('.')){
        if(document.getElementById('password').classList.contains('error')){
            document.getElementById('password').classList.replace('error','success')
        }else {
        document.getElementById('password').classList.add('success')
        }
        document.getElementById('password_error').innerHTML = null;
        console.log(username);
    }else{
        if(document.getElementById('password').classList.contains('success')){
            document.getElementById('password').classList.replace('success','error')
        }else{ 
        document.getElementById('password').classList.add('error')
        }
        document.getElementById('password_error').innerText = "password must be 8 letters long and should include .";
    }
}
function checkpasswordsmatch(p1,p2){
    if(p1!="" && p2!="" && p1 == p2){
        if(document.getElementById('cpassword').classList.contains('error')){
            document.getElementById('cpassword').classList.replace('error','success')
        }else {
        document.getElementById('cpassword').classList.add('success')
        }
        document.getElementById('cpassword_error').innerHTML = null;
        console.log(username);
    }else{
        if(document.getElementById('cpassword').classList.contains('success')){
            document.getElementById('cpassword').classList.replace('success','error')
        }else{ 
        document.getElementById('cpassword').classList.add('error')
        }
        document.getElementById('cpassword_error').innerText = "passwords not matched";
    }
}