let sendernameEl = document.getElementById("sendername");
let emailEl = document.getElementById("email");
let messageEl = document.getElementById("message");
let paraEl = document.getElementById("para");
let paraMailEl = document.getElementById("paraMail");
let paraMessageEl = document.getElementById("paraMessage");
let managerNameEl = document.getElementById("managerName");
let managerParaEl = document.getElementById("managerPara");
let managerPasswordEl = document.getElementById("managerPassword");
let managerPasswordParaEl = document.getElementById("managerPasswordPara");
let loginButtonEl = document.getElementById("loginButton");
let finalMessageEl = document.getElementById("finalMessage");
let dateOfBirthEl = document.getElementById("dateOfBirth");
let paraDobEl = document.getElementById("paraDob");
let FilePasswordEl = document.getElementById("FilePassword");
let FileParaEl = document.getElementById("FilePara");
let timerParaEl = document.getElementById("timerPara");
let fileFinalMessageEl = document.getElementById("fileFinalMessage");

let countdown = 15;
let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerParaEl.textContent = countdown;
    if (countdown === 0) {
        fileFinalMessageEl.textContent = "You can't access the privacy files";
        fileFinalMessageEl.style.color = "red";
        clearInterval(intervalId);
    }
}, 1000);
FilePasswordEl.addEventListener("keydown", function(event) {
    let password = FilePasswordEl.value;
    if (event.key === "Enter" && password === "coapps.ai" && countdown !== 0) {
        fileFinalMessageEl.textContent = "Entered correct password. You can access the files";
        clearInterval(intervalId);
    }
})

FilePasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        FileParaEl.textContent = "Required*";
        FileParaEl.classList.add("para-style");
    } else {
        FileParaEl.textContent = "";
    }
});

managerPasswordEl.addEventListener("keydown", function(event) {
    let passwordText = managerPasswordEl.value;
    if (event.key === "Enter" && passwordText === "coapps@123") {
        finalMessageEl.textContent = "Logged in successfully!!";
        finalMessageEl.classList.add("login-message");
    } else if (event.key === "Enter" && passwordText !== "coapps") {
        finalMessageEl.textContent = "wrong Password... Try again!";
        finalMessageEl.style.color = "red";
    }
});


dateOfBirthEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        paraDobEl.textContent = "Required*";
        paraDobEl.classList.add("para-style");
    } else {
        paraDobEl.textContent = "";
    }
});

sendernameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        paraEl.textContent = "Name can't be empty*";
        paraEl.classList.add("para-style");
    } else {
        paraEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        paraMailEl.textContent = "email can't be empty*";
        paraMailEl.classList.add("para-style");
    } else {
        paraMailEl.textContent = "";
    }
});

messageEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        paraMessageEl.textContent = "Please write something!!";
        paraMessageEl.classList.add("para-style");
    } else {
        paraMessageEl.textContent = "";
    }
});

managerNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        managerParaEl.textContent = "Required*";
        managerParaEl.classList.add("para-style");
    } else {
        managerParaEl.textContent = "";
    }
});

managerPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        managerPasswordParaEl.textContent = "Enter the correct password*";
        managerPasswordParaEl.classList.add("para-style");
    } else {
        managerPasswordParaEl.textContent = "";
    }
});