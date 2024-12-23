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
    var resumeHTML = "\n    <h2 contenteditable=\"true\" id=\"resumeName\">".concat(name, "</h2>\n    <p><strong>Email:</strong> <span contenteditable=\"true\" id=\"resumeEmail\">").concat(email, "</span></p>\n    <p><strong>Phone:</strong> <span contenteditable=\"true\" id=\"resumePhone\">").concat(phone, "</span></p>\n    <p><strong>Address:</strong> <span contenteditable=\"true\" id=\"resumeAddress\">").concat(address, "</span></p>\n    <p><strong>Date of Birth:</strong> <span contenteditable=\"true\" id=\"resumeDob\">").concat(dob, "</span></p>\n    <p><strong>Nationality:</strong> <span contenteditable=\"true\" id=\"resumeNationality\">").concat(nationality, "</span></p>\n    <p><strong>Gender:</strong> <span contenteditable=\"true\" id=\"resumeGender\">").concat(gender, "</span></p>\n    <h3 contenteditable=\"true\" id=\"resumeEducation\">Education</h3>\n    <p contenteditable=\"true\" id=\"resumeEducationContent\">").concat(education, "</p>\n    <h3 contenteditable=\"true\" id=\"resumeExperience\">Experience</h3>\n    <p contenteditable=\"true\" id=\"resumeExperienceContent\">").concat(experience, "</p>\n    <h3 contenteditable=\"true\" id=\"resumeSkills\">Skills</h3>\n    <p contenteditable=\"true\" id=\"resumeSkillsContent\">").concat(skills, "</p>\n  ");
    var resumeDiv = document.getElementById("resume");
    resumeDiv.innerHTML = resumeHTML;
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (element) {
        element.addEventListener('blur', function (event) {
            var target = event.target;
        });
    });
}
