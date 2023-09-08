export default function validation(input) {
    // input = { email, password}
    /*
    {   
        email: "Debe ingresar un email válido!!!"
        password: "Error correspondiente..."
    }
    */

    const error = {};
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp("[0-9]");

    if(!regexEmail.test(input.email)) {
        error.email = "Debe ingresar un email válido!!!";
    }
    if(!input.email) {
        error.email = "Debe ingresar un email!!!";
    }
    if(input.email > 35) {
        error.email = "Email no mayor a 35 caracteres!!!";
    }
    
    if(!regexPassword.test(input.password)) {
        error.password = "Debe contener al menos un número!!!";
    }
    if(input.password.length < 6 || input.password.length > 10) {
        error.password = "Contraseña entre 6 y 10 caracteres"
    }
        
    return error;
}