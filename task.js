// what to do //
/* - on clicking the choose what you want to do,the select box should display
- when i click on any of the select box,it should display on the task box div
- the add option should open a box that allow me add my option

- on clicking the task in the task box, the background color should change,then it should indicate due date 
UPDATE: Could not implement most of the things i wanted to do 
*/
// all variables,for easier targetting

const Input= document.querySelector(".todo-input");
const sendButton = document.querySelector(".send");
const taskBox = document.querySelector(".task-box");
/*
const complete = document.getElementsByClassName ("check")
const erase = document.getElementsByClassName("erase") */
const list= document.querySelector(".task");
const dateArea = document.getElementById("render");
// I kept usimg class name for the date,but it did not work. had to change it to ID
//time and date
const today = new Date();
const options = {weekday:"long", month:"short", day:"numeric"};
dateArea.innerHTML = today.toLocaleDateString("en-US", options);


//event listeners, would have wanted more though

sendButton.addEventListener("click", addList);

list.addEventListener("click",deleteList);


// functions
function addList(event) {
    event.preventDefault();
   
   let newDiv= document.createElement("div");
   newDiv.classList.add("task-list");

   let newList= document.createElement("li");
   newList.innerText= Input.value;
   newDiv.appendChild(newList);
   let complete = document.createElement("button");
   complete.innerText="done";
   complete.classList.add("done-btn");
   newList.appendChild(complete);
   let erase= document.createElement("button");
   erase.innerText="del";
   erase.classList.add("del-btn");
   newList.appendChild(erase);
   list.appendChild(newDiv);
   Input.value="";
}

function deleteList (ev){
    let item=ev.target;
    if (item.classList[0]=== "del-btn") {
        let taskdo= item.parentNode;
        taskdo.remove();
    }
    if (item.classList[0]==="done-btn") {
        let taskdo= item.parentElement;
        taskdo.classList.toggle("completed");
        
    }

} 
