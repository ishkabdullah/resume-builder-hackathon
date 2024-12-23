function buildResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    var nationality = document.getElementById("nationality").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Handle profile picture
    var profilePicInput = document.getElementById("profilePic");
    var resumePic = document.createElement("img");
    resumePic.style.width = "150px";
    resumePic.style.height = "auto";
    resumePic.style.borderRadius = "50%";
    resumePic.style.marginBottom = "10px";
    resumePic.style.objectFit = "cover";
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            resumePic.src = e.target.result;
            document.getElementById("resume").prepend(resumePic);
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    else {
        resumePic.style.display = "none";
    }
    var resumeHTML = "\n      <h2>".concat(name, "</h2>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <p><strong>Address:</strong> ").concat(address, "</p>\n      <p><strong>Date of Birth:</strong> ").concat(dob, "</p>\n      <p><strong>Nationality:</strong> ").concat(nationality, "</p>\n      <p><strong>Gender:</strong> ").concat(gender, "</p>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    ");
    document.getElementById("resume").innerHTML = resumeHTML;
}
