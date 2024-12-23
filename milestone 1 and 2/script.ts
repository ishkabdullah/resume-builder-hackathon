// Using type assertions directly in the constant assignment
var toggleSkillsButton = document.getElementById("toggleSkillsButton") as HTMLButtonElement;
var skillsSection = document.getElementById("skillsSection") as HTMLElement;
var toggleExperienceButton = document.getElementById("toggleExperienceButton") as HTMLButtonElement;
var experienceSection = document.getElementById("experienceSection") as HTMLElement;

// Check if elements are not null before adding event listeners
if (toggleExperienceButton && experienceSection) {
  toggleExperienceButton.addEventListener("click", () => {
    experienceSection.style.display = experienceSection.style.display === "none" ? "block" : "none";
  });
}

if (toggleSkillsButton && skillsSection) {
  toggleSkillsButton.addEventListener("click", () => {
    skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
  });
}
