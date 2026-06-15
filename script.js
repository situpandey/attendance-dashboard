
function updateClock(){

const now=new Date();

document.getElementById("date").innerHTML=

now.toDateString();

document.getElementById("time").innerHTML=

now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();



async function login(){

let empid=

document.getElementById("empid").value.trim();

let password=

document.getElementById("password").value.trim();

if(empid=="" || password==""){

alert("Please fill all fields");

return;

}


try{

const doc=

await db.collection("employees")

.doc(empid)

.get();


if(doc.exists){

let data=doc.data();


if(data.password===password){

localStorage.setItem(

"user",

JSON.stringify(data)

);


window.location.href=

"dashboard.html";

}

else{

alert("Wrong Password");

}

}

else{

alert("Employee Not Found");

}

}

catch(error){

console.log(error);

alert(error.message);

}

}
