function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    ev.preventDefault();
    const data = event.dataTransfer.getData("text");
    ev.target.appendcChild(document.getElementById(data));
}

function addTask() {
    const position = "beforeend"

    const newCard = `<div taskname="${NewTask}">
    <div class="card-header">
        <h5>TASK</h5>
    </div>
        <ul class="list-group list-group-flush card-space">
            <li class="list-group-item"><span class="card-ref">Name: </span>${taskArray.name}</li>
            </ul>
    </div>`

    let taskBoard = document.querySelector(".Taskboard-List");
    taskBoard.insertAdjacentHTML(position, newCard);
};