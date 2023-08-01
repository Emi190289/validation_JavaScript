const form = document.querySelector('#form')
const user = document.querySelector('.input-user');
const email = document.querySelector(".input-email");
const pwd = document.querySelector(".input-pwd");
const cpwd = document.querySelector(".input-Cpwd");


form.addEventListener('submit',(e)=>{
    
    if(!validateInput()){
        e.preventDefault();
    }
})

function validateInput()
{
    const Username = user.value.trim();
    const Email = email.value.trim();
    const Pwd = pwd.value.trim();
    const CPwd = cpwd.value.trim();
    let success = true
    if(Username===''){
        success=false;
        setError(user,"UserName is required")
    }
    else{
        setSuccess(user)
    }
    if(Email===''){
        success=false;
        setError(email,"Email is required")
    }
    else{
        setSuccess(email)
    }
    if(Pwd ===''){
        success=false;
        setError(pwd,"Password is required")
    }
    else if(Pwd.length<8){
        success=false;
        setError(pwd,"Password should be atleast 8 Characters")
    }
    else{
        setSuccess(pwd)
    }
    if(CPwd===''){
        success=false;
        setError(cpwd,"Confirm Password is required")
    }
    else if(CPwd!==Pwd){
        success=false;
        setError(cpwd,"Password does not match")
    }
    else{
        setSuccess(cpwd)
    }
    return success
}

function setError(element,message){
        const Input = element.parentElement;
        const errorElement = Input.querySelector(".error");
        errorElement.innerText=message;
        Input.classList.add('error')
        Input.classList.remove('success')
}

function setSuccess(element){
    const Input = element.parentElement;
    const errorElement = Input.querySelector(".error");
    errorElement.innerText='';
    Input.classList.add('success')
    Input.classList.remove('error')
}