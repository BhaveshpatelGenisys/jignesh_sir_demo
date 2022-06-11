function velidateRegistrationForm() {
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let gender = $("#gender").val();
    let email = $("#email").val();
    let mobile = $("#mobile").val();
    let professions = $("#professions").val();
    let dateOfBirth = $("#dateOfBirth").val();

    console.log("cheking data  before send", { firstName, lastName, gender, email, mobile, professions, dateOfBirth });

    console.log("cheking data a");
    alert("chekjing data ");
    return false;
}