function send(){
    if(validateForm()){
        $(".form1").submit();
    }
}

function validateForm(){
    var validate = true;

    if ($("#name").val().trim().length == 0){
        $(".invalid-name").fadeIn();
        $("#name").addClass("borde-rojo");
        validate = false;
    }else{
        $(".invalid-name").fadeOut();
        $("#name").removeClass("borde-rojo");
    }

    if ($("#last_name").val().trim().length == 0){
        $(".last_name_validation").fadeIn();
        $("#last_name").addClass("borde-rojo");
        validate = false;
    }else{
        $(".last_name_validation").fadeOut();
        $("#last_name").removeClass("borde-rojo");
    }

    if ($("#email").val().trim().length == 0 || !validateEmail($("#email").val())){
        $(".email_validation").fadeIn();
        $("#email").attr("placeholder", "Email@example.com");
        $("#email").addClass("borde-rojo place");

        validate = false;
    }
    else{
        $(".email_validation").fadeOut();
        $("#email").removeClass("borde-rojo");
        
    }

    if ($("#password").val().trim().length == 0){
        $(".password_validation").fadeIn();
        $("#password").addClass("borde-rojo");
        validate = false;
    }
    else{
        $(".password_validation").fadeOut();
        $("#password").removeClass("borde-rojo");
    }

    return validate;

}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}