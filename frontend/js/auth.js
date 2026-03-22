const BASE="http://localhost:8080/api";

function login(){
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

fetch(BASE+"/users/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({email,password})
})
.then(res=>res.json())
.then(user=>{
if(user && user.id){
localStorage.setItem("role",user.role);
localStorage.setItem("userId",user.id);
globalThis.location.href="dashboard.html";
}else{
alert("Invalid Login");
}
});
}