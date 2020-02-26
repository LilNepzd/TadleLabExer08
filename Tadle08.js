function input() {

    var lastName = document.getElementById("LastName").value;
    var firstName = document.getElementById("Gender").value;
    var gender = document.getElementById("Gender").value;
    var email = document.getElementById("Email").value;
    var origin = document.getElementById("Origin").value;
    var destination = document.getElementById("Destination").value;
    var departure = document.getElementById("Departure").value;
    var returndate = document.getElementById("Return").value;

    lastName = lastName.trim();
    firstName = firstName.trim();
    email = email.trim();
    origin = origin.trim();
    destination = destination.trim();
    
    if (!lastName || !firstName || !email || !origin || !destination || !departure || !returndate || gender.value == "Select") {
        alert("Fill up all fields first.");
    } else if (email.includes("@") == false) {
        alert("Email must include @.");
    } else if (departure >= returndate) {
        alert("Make sure both date fields are filled up, and the return date is later than the departure date.");
    } else {
        document.getElementById("display").innerHTML = "Data Submitted Successfully.";
    }

}
