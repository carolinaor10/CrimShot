let identificacion = localStorage.getItem("email");

//referencias al html
const btn_submit = document.querySelector("#btn-submit");
const tikTok = document.querySelector("#tikTok");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const myCheck = document.querySelector("#myCheck");

let cantact_list = [];


function empy_data(){
    let requirement_data = document.querySelectorAll("#frm-Contact [required]");
    let error = false;
    for (let i = 0; i < requirement_data.length; i++) {
        if (requirement_data[i].value == "") {
            requirement_data[i].classList.add("error");
            error = true;
        } else {
            requirement_data[i].classList.remove("error");
        }
    }
    return error;
};


function email_validatio() {
    let email = email.value;
    let error = false;
    let expresion = /^[a-zA-Z0-9.]+\@*[a-zA-Z0-9]*\@{1}[a-zA-Z]+.com$/;
    if (expresion.test(email) == false) {
        email.classList.add("error");
        error = true;
    } else {
        email.classList.remove("error");

    }
    return error;
};

function data_cleaner() {
    email.value = "";
    myCheck.value = "";
}

function data_obtain(){
    let empty_spaces = empy_data();
    let error_email = email_validation();
    if (empty_spaces) {
        Swal.fire({
            icon: "warning",
            title: "Checkbox Error",
            text: "Check approvement checkbox to continue",
        });
    } else if (error_email) {
        Swal.fire({
            icon: "warning",
            title: "Email Error",
            text: "Check your email",
        });
    } else {
        let tikTok = tikTok.value;
        let email = email.value;
        let message = message.value;
        let myCheck = myCheck.value;
        localStorage.setItem("email", email);
        contactRegister(tikTok, email, message);
        
        data_cleaner();
    }
};

btn_submit.addEventListener("click", data_obtain)

