

let getDataPlease = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://35.246.69.64:8081/item/all/");
    request.send();
    request.onload = () => {
        let data = JSON.parse(request.response);
        console.log(data);
        for(let items of data) {
            body = document.getElementById("itemlist");
            buttonDiv = document.createElement("div")
            buttonDiv.className = "row";
            button = document.createElement("button");
            button.innerText = items.name + "   Price: = " + items.price;
            button.className = "col-10";
            button.style.height = "40px";
            image = document.createElement("img");
            image.src = items.imageUrl;
            image.style.height = "40px";
            image.className = "col-2";
            body.appendChild(buttonDiv);
            buttonDiv.appendChild(button);
            buttonDiv.appendChild(image);
            
        }
    }
}
getDataPlease();
"use strict";
let getData = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://35.246.69.64:8081/order/4/");
    request.send();
    request.onload = () => {
        let data = JSON.parse(request.response);
        let list = document.getElementById("tasks");
        list.innerText = "";
        $('#my-amazing-modal').modal('show');

        for (let tasks of data) {
            let listItem = document.createElement("li");
            listItem.style = "none";

            let div = document.createElement("div");

            let para = document.createElement("p");
            para.innerText = tasks.text;

            let updateButton = document.createElement("Button");
            updateButton.className = "btn btn-info";
            updateButton.innerText = "Add";

            let updateFunction = (func) => {
                updateButton.removeEventListener("click", updateFunction);
                let modal = document.createElement("modal");
                modal.class = "modal";
                let modalContent = document.createElement("div");
                modalContent.class = "modal-content";
                let form = document.createElement("form");
                form.onsubmit = updateData(event);
                let text = document.createElement("input");
                text.type = "text";
                let submit = document.createElement("input");
                submit.type = "submit";
                form.appendChild(text);
                form.appendChild(submit);
                modalContent.appendChild(form);
                modal.appendChild(modalContent);
                updateButton.appendChild(modal);
            };

            updateButton.addEventListener("click", updateFunction);


            let deleteButton = document.createElement("Button");
            deleteButton.className = "btn btn-danger";
            deleteButton.innerText = "Delete";
            deleteButton.addEventListener("click", () => {
                deleteData(tasks.id);
            });

            div.appendChild(para);
            div.appendChild(updateButton);
            div.appendChild(deleteButton);
            listItem.appendChild(div);
            list.appendChild(listItem);


        }
    }
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function openBasket() {
    $('#openBasketModal').modal('show');

}
function refreshPage() {
    window.location.reload();
}
let addItemToOrder = () => {
    event.preventDefault();

    let request = new XMLHttpRequest();
    request.open("POST", "http://35.246.69.64:8081/order/4/item/5");
    request.setRequestHeader("Content-Type", "application/json")

    let body = JSON.stringify(obj);
    console.log(body);
    request.send(body);

    request.onload = () => {
        getData();
    }
}
let postData = (event) => {
    event.preventDefault();
    let form = event.target;
    let obj = {};
    for (let input of form) {
        if (input.name) {
            obj[input.name] = input.value;
        }
    }

    let request = new XMLHttpRequest();
    request.open("POST", "http://35.246.69.64:8081/order/");
    request.setRequestHeader("Content-Type", "application/json")

    let body = JSON.stringify(obj);
    console.log(body);
    request.send(body);

    request.onload = () => {
        getData();
    }
}
