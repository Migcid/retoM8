const login=document.querySelector("#login")

login.addEventListener("submit",async(event)=>{
    const email=document.querySelector("#email").value
    const contrasena=document.querySelector("#contrasena").value
    
    await fetch('form/login',{
        method:"POST",
        body:JSON.stringify({email,contrasena})
    })
})