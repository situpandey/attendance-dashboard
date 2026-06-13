function updateDateTime(){

const now = new Date();

const dateOptions = {
weekday:'long',
year:'numeric',
month:'long',
day:'numeric'
};

document.getElementById("date").innerHTML =
now.toLocaleDateString("en-US",dateOptions);

document.getElementById("time").innerHTML =
now.toLocaleTimeString();

}

updateDateTime();

setInterval(updateDateTime,1000);
