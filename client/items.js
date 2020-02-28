
let itemcreate = () => {
document.getElementById("items");
let heading = document.createElement("h3");
heading.setAttribute(name());
heading.innerText = cost();
DataTransferItemList.append(heading);

}

// let name = () => {
    
// }

let getData = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://35.246.69.64:8081/item/all/");
    request.send();
    request.onload = () => {
        let data = JSON.parse(request.response);
        console.log(data);
        let list = document.getElementById("items");
        list.innerText="";
        for(let items of data) {
            let div = document.createElement("div");
            let listItem = document.createElement("li");
            listItem.innerText = items.name + " price: " + items.price;
            let image = document.createElement("img");
            //......
            let button = document.createElement("button");
            button.className = "btn btn-danger";
            button.innerText = "Delete"
            button.addEventListener("click", () => {
                deleteData(items.id);
            })
            div.appendChild(button);
            //... append image
            listItem.appendChild(div);
            list.appendChild(listItem);
        }
    }

}
getData();

let postData = (event) => {
    event.preventDefault();
    let form = event.target;
    let obj = {};
    console.log(event.target)
   for (let inputs of form) {
        if (inputs.name) {
            console.log(inputs) 
            console.log(inputs.name) 
             
            obj[inputs.name] = inputs.value;
        }
    }
    let request = new XMLHttpRequest();
    request.open("POST", "http://35.246.69.64:8081/item/");
    request.setRequestHeader("Content-Type", "application/json")
    let body = JSON.stringify(obj);
    console.log(body);
    request.send(body);
    request.onload = () => {
        getData();
    }
}
let deleteData = (id) => {
    console.log(id);
    let request = new XMLHttpRequest();
    request.open("DELETE", "http://35.246.69.64:8081/item/" + id);
    request.send();
    request.onload = () => {
        getData(id);
    }
}
