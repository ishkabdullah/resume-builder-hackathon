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
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Nationality:</strong> ${nationality}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;
  
    (document.getElementById("resume") as HTMLElement).innerHTML = resumeHTML;
  }