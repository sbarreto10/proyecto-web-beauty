let btnSend = document.querySelector("#btn-send");

//ESCUCHAR UN EVENTO
btnSend.addEventListener('click',function(){
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    let telephone = document.querySelector("#telephone");
    let comment = document.querySelector("#comment"); 
    //Expresiones regulares
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^\d{7,13}$/;


    //console.log(firstname.value.trim().length);
    if(firstname.value.trim()==''){
        document.querySelector("#error-firstname").innerHTML ="Debes completar el campo Nombre";
        // alert('ERROR! Debes completar el campo Nombre');
    }
    if(firstname.value.trim().length < 3){
        document.querySelector("#error-firstname").innerHTML ="El nombre no puede tener menos de 3 carecteres";
        // alert('ERROR! Debes completar el campo Nombre');
    }

    if(lastname.value.trim()==''){
        document.querySelector("#error-lastname").innerHTML ="Debes completar el campo Apellido";
        // alert('ERROR! Debes completar el campo Apellido');
    }
    if(lastname.value.trim().length < 3){
        document.querySelector("#error-lastname").innerHTML ="El apellido no puede tener menos de 3 carecteres";
    }    

    if(!emailRegex.test(email.value)){
        document.querySelector("#error-email").innerHTML ="El email no tiene un formato valido.";
        // alert('ERROR! Debes completar el campo Apellido');
    }

    if(!phoneRegex.test(telephone.value)){
        document.querySelector("#error-telephone").innerHTML ="El teléfono no tiene un formato valido.";
    }

    if (comment.value.trim() = '') {
        document.querySelector("#error-comment").innerHTML = 'El mensaje no puede estar vacío.';
    }

    if (comment.value.trim().length < 10) {
        document.querySelector("#error-comment").innerHTML = 'El mensaje debe contener al menos 10 caracteres.';
    }

});