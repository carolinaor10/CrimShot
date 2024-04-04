<<<<<<< HEAD
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

=======
//Vincular los objetos del DOM

const btnEnviar = document.getElementById('btn-submit');
const tikTok = document.getElementById('tikTok');
const email = document.getElementById('email');
const message = document.getElementById('message');
const myCheck = document.getElementById('myCheck');



//crear una función para validar campos vacíos
function validar_campos_vacios(){
    let error = false;//asumir que al inicio no hay errores
    let campos_requeridos = document.querySelectorAll("#frm-contact [required]")
    for(let i=0; i< campos_requeridos.length;i++){
        if(campos_requeridos[i].value === ""){ 
            campos_requeridos[i].classList.add("error");
            error = true;
        }else{
            campos_requeridos[i].classList.remove("error");
        }
    }
    return error;//retornando un true o un false
}


function validar_correo(){

    let error = false;
    let texto = email.value;
    let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    if(regex.test(texto)===false){
        email.classList.add("error");
        error = true;
    }else{
        email.classList.remove("error");
    }

    return error;

}

function limpiar_campos(){
    tikTok.value = " ";
    email.value = " ";
    message.value = " ";
    myCheck.value = " ";

}


function enviar_datos() {
    let error_campos_vacios = validar_campos_vacios();
    let error_correo = validar_correo();

    if(error_campos_vacios){
        Swal.fire({
            icon:"warning",
            title:"Empty data",
            text:"Please fill out the requirement fields"
        })
    }else if(error_correo){
        Swal.fire({
            icon:"warning",
            title:"Email Error",
            text:"Enter a valid email"
        })
    }
    else{
        
        Swal.fire({
            icon:"success",
            title:"Validated information",
            text:"We will contact you as the case may be."
        })
    }

    limpiar_campos();


}

//asociar un evento al botón
btnEnviar.addEventListener('click',enviar_datos);
>>>>>>> fcc6cdac599b2392cf0ae8b7b390e74fc1e93bdf
