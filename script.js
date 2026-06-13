function login(){

let empid =
document.getElementById("empid").value;

let password =
document.getElementById("password").value;


if(
empid==="TM-001"
&&
password==="12345"
){

window.location.href=
"dashboard.html";

}

else{

alert(
"Invalid Employee ID or Password"
);

}

}
function checkIn(){

alert("✅ Attendance Marked Successfully");

}

function checkOut(){

alert("❌ Checked Out Successfully");

}
