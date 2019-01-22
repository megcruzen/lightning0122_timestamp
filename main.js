// 1) This application should display the current date & time on the DOM
// 2) There should be a button that when clicked, updates the current date & time on the DOM


let output = document.querySelector("#output");
let dateContainer = document.createElement("div");

function getTimeDisplay() {

    let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let d = new Date();
    let month = d.getMonth();
    let date = d.getDate();
    let year = d.getFullYear();
    let hour = d.getHours();
    let minutes = ("0" + d.getMinutes()).slice(-2);
    let seconds = ("0" + d.getSeconds()).slice(-2);
    let timestamp = "It is currently: " + hour + ":" + minutes + ":" + seconds + " on " + months[month] + "/" + date + "/" + year;
    dateContainer.innerHTML = timestamp;

}

output.appendChild(dateContainer);
getTimeDisplay();

let button = document.createElement("button");
button.innerHTML = "Update Time";
output.appendChild(button);

button.addEventListener("click", getTimeDisplay);