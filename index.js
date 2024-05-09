// const div= document.getElementById("task-list-item");
// const head= document.getElementById("heading");

// head.textContent="Task-1"

// const head1= document.getElementById("heading-5");
// head1.textContent="Task-2"

// const head2= document.getElementById("heading-6");
// head2.textContent="Task-3"

// const head3= document.getElementById("heading-7");
// head3.textContent="Task-4"


// div.innerHTML="";


// const div1= document.getElementById("task-list-item2");
// div1.innerHTML=""


const taskList= document.getElementById("task-list");
const inputText= document.getElementById("input-field");
const addIcon= document.getElementById("add-icon");
const taskLeft= document.getElementById("task-remaining");

let tasks=0;

taskLeft.textContent=`${tasks} tasks left`;

addIcon.addEventListener("click",()=>
{
    const taskDiv= document.createElement("div");
    taskDiv.setAttribute("id","task-list-item");

    const inputCheckbox= document.createElement("input");
    inputCheckbox.type="checkbox";

    const taskItem= document.createElement("h4");
    taskItem.setAttribute("id","heading");

    const icon= document.createElement("i");
    icon.classList.add("fa-regular" ,"fa-circle-xmark","delete-icon");
    icon.style.color="#fbf0a7";
    

    

    taskItem.textContent=inputText.value;

    taskDiv.appendChild(inputCheckbox);
    taskDiv.appendChild(taskItem);
    taskDiv.appendChild(icon);


    taskList.appendChild(taskDiv);
    tasks++;

    taskLeft.textContent=`${tasks} tasks left`

    inputText.value="";

    icon.addEventListener('click',()=>
    {
        taskDiv.innerHTML="";
        tasks--;

        taskLeft.textContent=`${tasks} tasks left`;
    });
});



