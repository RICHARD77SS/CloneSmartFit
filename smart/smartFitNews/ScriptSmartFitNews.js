let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll(".imgRot")
max = images.length;

function nextImage() {
    images[currentImageIndex]
    .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0
        
    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)

//Adiciona a class "change" aos elementos
function onClickMenu() {
    document.getElementById("pesquisa").classList.toggle("change");
    
}