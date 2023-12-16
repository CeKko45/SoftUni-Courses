function echoType(parameter) {
    console.log(typeof parameter);
    if (typeof parameter === "object") {
        console.log('Parameter is not suitable for printing');
    } else {
        console.log(parameter);
    }

}
echoType('Hello, JavaScript')
echoType(18)
echoType(null)