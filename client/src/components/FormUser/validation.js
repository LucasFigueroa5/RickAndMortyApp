export default function validation(inputs){
    const errors = {}
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp("[0-9]");

    if(!regexEmail.test(inputs.username)) {
        errors.username = "Debe ingresar un email válido!";
    }
    if(!inputs.username) {
        errors.username = "Debe ingresar un nombre!";
    }
    if(inputs.username.length > 35) {
        errors.username = "No mayor a 35 caracteres!"
    }
    if(!regexPassword.test(inputs.password)) {
        errors.password = "Al menos un número!";
    }
    if(inputs.password.length < 6 || inputs.password.length > 10) {
        errors.password = "Entre 6 y 10 caracteres!"
    }
  return errors;
}
