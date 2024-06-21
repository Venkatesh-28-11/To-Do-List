const inputbox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-Container");


function addTask(){
    if(inputbox.value===''){
        alert("You Must Write Somthing!");
    }
    else{
        var li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value= "";
    showdata();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        showdata();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        showdata();
    }

},false);

function showdata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function tasklist(){
    listContainer.innerHTML = localStorage.getItem("data");
}
tasklist();
