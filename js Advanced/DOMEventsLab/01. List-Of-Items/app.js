function addItem() {

    // capture elements
    let text = document.getElementById("newItemText").value;

    // create element
    let li = document.createElement("li");

    // attach element
    li.appendChild(document.createTextNode(text));
    document.getElementById("items").appendChild(li);

    //clearing input:
    document.getElementById("newItemText").value = "";
}