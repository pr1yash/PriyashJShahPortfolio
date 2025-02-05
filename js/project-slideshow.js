// Get all project elements
let projects = document.getElementsByClassName("project");
let slideIndex = 1;

// Hide arrows if only one or no project exists
if (projects.length < 2) {
  let arrows = document.getElementsByClassName("arrow");
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].style.display = "none";
  }
}

// Initialize the project display
showProject(slideIndex);

function showProject(num) {
  // If there are no projects, prevent errors
  if (projects.length === 0) {
    console.warn("No projects to display.");
    return;
  }

  // Ensure slideIndex stays within range
  if (num > projects.length) {
    slideIndex = 1; // Go to first project
  }
  if (num < 1) {
    slideIndex = projects.length; // Go to last project
  }

  // Hide all projects
  for (let i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }

  // Display the current project
  if (projects[slideIndex - 1]) {
    projects[slideIndex - 1].style.display = "flex";
  }
}

function navigateProject(num) {
  if (projects.length === 0) {
    console.warn("No projects available for navigation.");
    return;
  }
  showProject((slideIndex += num));
}
