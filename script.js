function updateDateTime() {

const now = new Date();

const dateOptions = {
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric'
};

document.getElementById("date").innerHTML =
now.toLocaleDateString("en-US", dateOptions);

document.getElementById("time").innerHTML =
now.toLocaleTimeString();

}

updateDateTime();

setInterval(updateDateTime, 1000);


function login(){

let empid =
document.getElementById("empid").value;

let password =
document.getElementById("password").value;

if(empid==="TM-001" && password==="12345"){

window.location.href="dashboard.html";

}

else{

alert("Invalid Employee ID or Password");

}

}


function checkIn(){

alert("✅ Attendance Marked Successfully");

}


function checkOut(){

alert("❌ Checked Out Successfully");

}
