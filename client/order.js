let getData=()=>{
request.open("GET","http://localhost:8081/note/");
request.send();
request.onload=()=>{
    let data =JSON.parse(request.response);
    let list =document.getElementById("order");
    list.innerText="";

    for(let order of data){
        let listItem = document.createElement("li");
        let div =document.createElement("div");
        
    }
}
}