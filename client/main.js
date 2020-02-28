

let getData = () => {
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
getData();