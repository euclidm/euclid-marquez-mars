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

// [3] Message Form Stuff
const messageForm = document.querySelector(`form[name="leave_message"]`); // Dom Selection

// [3.1.1] Message List Helper
function toggleMessageList(){
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");

    if (messageList.children.length === 0){messageSection.style.display = "none"}
    else {messageSection.style.display = "block"};
};

toggleMessageList();

messageForm.addEventListener("submit", (event) => {

    // [3.2.1] Submit Button Handler
    event.preventDefault(); // Stop Refresh

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(`Submitted Info: From: ${usersName} - @${usersName} - Message: ${usersMessage}`);

    // [3.2.2] Display Message via Message List
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>
                            <span>: ${usersMessage}</span>`;

    // [3.2.3] Remove Button Handler
    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", (event) => {
        const entry = event.target.parentNode;
        entry.remove();
        toggleMessageList();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    toggleMessageList();

    // [3.2.4] Restart Form
    messageForm.reset(); // Resets & Leaves the Input Box Blank after Submitting!
});