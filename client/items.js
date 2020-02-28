
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
            let button = document.createElement("button");
            button.className = "btn btn-danger";
            button.innerText = "Delete"
            button.addEventListener("click", () => {
                deleteData(items.id);
            })
            div.appendChild(button);
            listItem.appendChild(div);
            list.appendChild(listItem);
        }
    }
}
getData();
let deleteData = (id) => {
    console.log(id);
    let request = new XMLHttpRequest();
    request.open("DELETE", "http://35.246.69.64:8081/swagger-ui.html/item/" + id);
    request.send();
    request.onload = () => {
        getData(id);
    }
}