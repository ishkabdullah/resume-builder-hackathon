function buildResume() {
    var _a, _b;
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    var nationality = document.getElementById("nationality").value;
    var gender = ((_a = document.querySelector('input[name="gender"]:checked')) === null || _a === void 0 ? void 0 : _a.value) || "Not specified";
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Handle profile picture
    var profilePicInput = document.getElementById("profilePic");
    var resumeDiv = document.getElementById("resume");
    // Clear any previously added content
    resumeDiv.innerHTML = "";
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
            resumeDiv.prepend(resumePic);
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    // Resume content
    var resumeHTML = "\n    <h2>".concat(username || "No Name Provided", "</h2>\n    <p><strong>Email:</strong> ").concat(email || "Not Provided", "</p>\n    <p><strong>Phone:</strong> ").concat(phone || "Not Provided", "</p>\n    <p><strong>Address:</strong> ").concat(address || "Not Provided", "</p>\n    <p><strong>Date of Birth:</strong> ").concat(dob || "Not Provided", "</p>\n    <p><strong>Nationality:</strong> ").concat(nationality || "Not Provided", "</p>\n    <p><strong>Gender:</strong> ").concat(gender, "</p>\n    <h3>Education</h3>\n    <p>").concat(education || "No Education Provided", "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience || "No Experience Provided", "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills || "No Skills Provided", "</p>\n  ");
    // Append resume content to the resume container
    resumeDiv.innerHTML += resumeHTML;
    // Add Download PDF Button Event Listener
    (_b = document.getElementById("downloadPDF")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        if (!resumeDiv.innerHTML.trim()) {
            alert("Please generate the resume first!");
            return;
        }
        // Generate PDF using html2pdf
        html2pdf()
            .from(resumeDiv)
            .save("".concat(username || "Generated", "_Resume.pdf"));
    });
}
