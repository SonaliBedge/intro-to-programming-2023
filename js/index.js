// Sonali Bedge
// Insert Copyright Text in Footer
let today = new Date();
let thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Sonali Bedge ${thisYear}`;
footer.appendChild(copyright);

// Creating List of Skills
const skills = ["JavaScript","HTML","CSS","SQL","Python"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for(let i = 0; i < skills.length; i++){
    const li = document.createElement('li');
    li.innerHTML = skills[i];
    skillsList.appendChild(li);
}
