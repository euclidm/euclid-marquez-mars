// Body
const body = document.body; // Website Body

//  [1] Footer
const footerElement = document.createElement('footer'); // Footer Element
body.appendChild(footerElement);

const currentDate = new Date(); // Date
const currentYear = currentDate.getFullYear();

const footer = document.querySelector("footer"); // DOM Selection

const copyright = document.createElement('p'); // Copyright
copyright.innerHTML =`© Euclid Marquez ${currentYear}`;
footer.appendChild(copyright);

//  [2] Skills
// const tools = ["Figma", "Procreate", "Canva", "Framer", "Roblox Studio", "Unity", "Wordpress", "GitHub"];
const skills = ["Visual Design", "UX Design", "UI Design", "Web Design", "JavaScript", "HTML", "CSS", 
                "Prototyping", "Style Guides", "Wireframing", "User Flows", "Playtesting", "User Interviews",
                "Figma", "Procreate", "Canva", "Framer", "Roblox Studio", "Unity", "Wordpress", "GitHub"];

const skillsSelection = document.querySelector("#skills");
const skillsList = skillsSelection.querySelector("ul");

for (let i = 0; i < skills.length; i++){
    const skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
};
