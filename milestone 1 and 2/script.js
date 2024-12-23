// Using type assertions directly in the constant assignment
var toggleSkillsButton = document.getElementById("toggleSkillsButton");
var skillsSection = document.getElementById("skillsSection");
var toggleExperienceButton = document.getElementById("toggleExperienceButton");
var experienceSection = document.getElementById("experienceSection");
// Check if elements are not null before adding event listeners
if (toggleExperienceButton && experienceSection) {
    toggleExperienceButton.addEventListener("click", function () {
        experienceSection.style.display = experienceSection.style.display === "none" ? "block" : "none";
    });
}
if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton.addEventListener("click", function () {
        skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
    });
}
