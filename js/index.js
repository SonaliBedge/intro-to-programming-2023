// Sonali Bedge

// Insert Copyright Text in Footer
let today = new Date();
let thisYear = today.getFullYear();
const footer = document.querySelector('.footer1');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Sonali Bedge ${thisYear}`;
footer.appendChild(copyright);

// Creating List of Skills
const skills = ["JavaScript","HTML","CSS","SQL Server","Python","Git and GitHub","Java","Asp.net"];
const skillsSection = document.querySelector('.skills');
const skillsList = skillsSection.querySelector('ul');
for(let i = 0; i < skills.length; i++){
    const li = document.createElement('li');
    li.innerHTML = skills[i];
    skillsList.appendChild(li);
}


const messageSection = document.querySelector("#messages");
messageSection.style.display = "none";

// Handling Message Form Submit
const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const users_name = e.target.usersName;
    const users_email = e.target.usersEmail;
    const users_message =e.target.usersMessage;
  
    console.log(users_name.value);
    console.log(users_email.value);
    console.log(users_message.value);

    //Stretch Goals
    if(messageSection.style.display === "none"){
        messageSection.style.display = "block";
    } 

    //Display Messages in List
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${users_email.value}">${users_name.value} </a>wrote: <span>${users_message.value} </span>`;
    const removeButton = document.createElement('button');
    const editButton = document.createElement('button');
    removeButton.innerHTML = 'remove';
    editButton.innerHTML = 'edit';
    removeButton.type = "button";
    editButton.type = "button";
    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);

    removeButton.addEventListener("click", (event) => {
        if(event.target.tagName === 'BUTTON'){
            const entry = event.target.parentNode;
            const ul = entry.parentNode;
            ul.removeChild(entry);
            if(messageList.innerHTML.trim() === ""){
                messageSection.style.display = "none";
           } else {
                messageSection.style.display = "block";
            } 
        }
    });

    editButton.addEventListener("click", (event) => {
        if(event.target.tagName === 'BUTTON'){
            const button = event.target;
            const li = button.parentNode;
            users_email.value = li.childNodes[0].href.substr(7,);
            users_name.value = li.childNodes[0].textContent;
            users_message.value =li.childNodes[2].textContent;
            const entry = event.target.parentNode;
            const ul = entry.parentNode;
            ul.removeChild(entry);
            if(messageList.innerHTML.trim() === ""){
                messageSection.style.display = "none";
           } else {
                messageSection.style.display = "block";
            } 
        }
    });
    messageForm.reset();
});

// Fetch GitHub Repositories using Fetch API 
fetch('https://api.github.com/users/SonaliBedge/repos')
.then(response => { 
    if(!response.ok){
        throw new Error('Network response was not ok')
    }
    return response.json(); } )
.then(response => {
    
    //Display Repositories in List
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');
    
    for(var i = 0; i < response.length; i++){
        const project = document.createElement('li');
        project.style.color = "red";
        project.style.fontWeight = "bold";
        project.innerHTML = `<a href='${response[i]['html_url']}' target="_blank">${response[i]['name']}</a> ${response[i]['description']} ${response[i]['created_at']}`;
        projectList.appendChild(project);
    }
})
.catch(function(error){
    console.error('Error during fetch operation:', error);
});


// //Fetch GitHub Repositories
// var githubRequest = new XMLHttpRequest();
// githubRequest.open('GET','https://api.github.com/users/SonaliBedge/repos');
// githubRequest.send();

// // Handle Response from Server
// githubRequest.addEventListener('load', function(event) {
//     var repositories = JSON.parse(this.response);
//     console.log(repositories);
//     //Display Repositories in List
//     const projectSection = document.getElementById('projects');
//     const projectList = projectSection.querySelector('ul');
//     // console.log(projectList);
//     for(var i = 0; i < repositories.length; i++){
//         const project = document.createElement('li');
//         project.style.color = "red";
//         project.style.fontWeight = "bold";
//         project.innerHTML = `<a href='${repositories[i]['html_url']}' target="_blank">${repositories[i]['name']}</a> ${repositories[i]['description']} ${repositories[i]['created_at']}`;
//         projectList.appendChild(project);
//     }
// });

