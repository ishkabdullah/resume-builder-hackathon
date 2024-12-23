function buildResume(): void {
    const name: string = (document.getElementById("name") as HTMLInputElement).value;
    const email: string = (document.getElementById("email") as HTMLInputElement).value;
    const phone: string = (document.getElementById("phone") as HTMLInputElement).value;
    const address: string = (document.getElementById("address") as HTMLInputElement).value;
    const dob: string = (document.getElementById("dob") as HTMLInputElement).value;
    const nationality: string = (document.getElementById("nationality") as HTMLInputElement).value;
    const gender: string = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value;
    const education: string = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience: string = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills: string = (document.getElementById("skills") as HTMLTextAreaElement).value;
  
    // Handle profile picture
    const profilePicInput: HTMLInputElement = document.getElementById("profilePic") as HTMLInputElement;
    const resumePic: HTMLImageElement = document.createElement("img");
    resumePic.style.width = "150px";
    resumePic.style.height = "auto";
    resumePic.style.borderRadius = "50%";
    resumePic.style.marginBottom = "10px";
    resumePic.style.objectFit = "cover";
  
    if (profilePicInput.files && profilePicInput.files[0]) {
        const reader: FileReader = new FileReader();
        reader.onload = function (e: ProgressEvent<FileReader>) {
            resumePic.src = e.target!.result as string;
            document.getElementById("resume")!.prepend(resumePic);
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        resumePic.style.display = "none";
    }
  
    const resumeHTML: string = `
    <h2 contenteditable="true" id="resumeName">${name}</h2>
    <p><strong>Email:</strong> <span contenteditable="true" id="resumeEmail">${email}</span></p>
    <p><strong>Phone:</strong> <span contenteditable="true" id="resumePhone">${phone}</span></p>
    <p><strong>Address:</strong> <span contenteditable="true" id="resumeAddress">${address}</span></p>
    <p><strong>Date of Birth:</strong> <span contenteditable="true" id="resumeDob">${dob}</span></p>
    <p><strong>Nationality:</strong> <span contenteditable="true" id="resumeNationality">${nationality}</span></p>
    <p><strong>Gender:</strong> <span contenteditable="true" id="resumeGender">${gender}</span></p>
    <h3 contenteditable="true" id="resumeEducation">Education</h3>
    <p contenteditable="true" id="resumeEducationContent">${education}</p>
    <h3 contenteditable="true" id="resumeExperience">Experience</h3>
    <p contenteditable="true" id="resumeExperienceContent">${experience}</p>
    <h3 contenteditable="true" id="resumeSkills">Skills</h3>
    <p contenteditable="true" id="resumeSkillsContent">${skills}</p>
  `;
  
  const resumeDiv = document.getElementById("resume") as HTMLElement;
  resumeDiv.innerHTML = resumeHTML;
  
  
  const editableElements = document.querySelectorAll('[contenteditable="true"]');
  editableElements.forEach(element => {
      element.addEventListener('blur', (event: Event) => {
          const target = event.target as HTMLElement;
          
      });
  });
  }