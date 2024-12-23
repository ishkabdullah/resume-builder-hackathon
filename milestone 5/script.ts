// Import html2pdf with 'any' type as the library lacks types
declare const html2pdf: any;

function buildResume(): void {
  const username: string = (document.getElementById("name") as HTMLInputElement).value;
  const email: string = (document.getElementById("email") as HTMLInputElement).value;
  const phone: string = (document.getElementById("phone") as HTMLInputElement).value;
  const address: string = (document.getElementById("address") as HTMLInputElement).value;
  const dob: string = (document.getElementById("dob") as HTMLInputElement).value;
  const nationality: string = (document.getElementById("nationality") as HTMLInputElement).value;
  const gender: string = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value || "Not specified";
  const education: string = (document.getElementById("education") as HTMLTextAreaElement).value;
  const experience: string = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const skills: string = (document.getElementById("skills") as HTMLTextAreaElement).value;

  // Handle profile picture
  const profilePicInput: HTMLInputElement = document.getElementById("profilePic") as HTMLInputElement;
  const resumeDiv = document.getElementById("resume") as HTMLElement;

  // Clear any previously added content
  resumeDiv.innerHTML = "";

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
      resumeDiv.prepend(resumePic);
    };
    reader.readAsDataURL(profilePicInput.files[0]);
  }

  // Resume content
  const resumeHTML: string = `
    <h2>${username || "No Name Provided"}</h2>
    <p><strong>Email:</strong> ${email || "Not Provided"}</p>
    <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
    <p><strong>Address:</strong> ${address || "Not Provided"}</p>
    <p><strong>Date of Birth:</strong> ${dob || "Not Provided"}</p>
    <p><strong>Nationality:</strong> ${nationality || "Not Provided"}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <h3>Education</h3>
    <p>${education || "No Education Provided"}</p>
    <h3>Experience</h3>
    <p>${experience || "No Experience Provided"}</p>
    <h3>Skills</h3>
    <p>${skills || "No Skills Provided"}</p>
  `;

  // Append resume content to the resume container
  resumeDiv.innerHTML += resumeHTML;

  // Add Download PDF Button Event Listener
  document.getElementById("downloadPDF")?.addEventListener("click", function () {
    if (!resumeDiv.innerHTML.trim()) {
      alert("Please generate the resume first!");
      return;
    }

    // Generate PDF using html2pdf
    (html2pdf as any)()
      .from(resumeDiv)
      .save(`${username || "Generated"}_Resume.pdf`);
  });
}
