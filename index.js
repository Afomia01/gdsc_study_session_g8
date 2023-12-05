const input= document.getElementById("input");
const task= document.getElementById("tasks");
document.getElementById("MyBtn").onclick= function(){
    if(input.value===''){
        alert("Enter TASKS! I'm sure you got a lot to do")
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= input.value;
        task.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    input.value = "";
    saveData();

}
task.addEventListener("click", function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", task.innerHTML);

}
function showTask(){
    task.innerHTML = localStorage.getItem("data")
}
showTask();
