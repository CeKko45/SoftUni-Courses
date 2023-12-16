function validate() {
    // capture element
    let emailField = document.getElementById("email");
    let email = emailField.value;
    let pattern = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    
    emailField.addEventListener("change", emailCheck);
    
    //email checker
    function emailCheck(event) {
        if(pattern.test(event.target.value)) {
            event.target.removeAttribute("class");
            return;
        }
        event.target.className = "error";
    }
}