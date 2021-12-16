var btn = document.querySelector("button");
btn.onclick = function() {
    var title = document.querySelector("h1");
    var clas = title.getAttribute("class");
    if(clas === "red")
    {
        title.classList.remove("red");
        title.classList.add("blue");
    } else {
        title.classList.remove("blue");
        title.classList.add("red");
    }
}