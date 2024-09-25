function browseImages() {
    let img = document.getElementById("image");
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        img.src = "img/giraffe.jpg";
    } else if (choice === 1) {
        img.src = "img/giraffe1.jpg";
    } else {
        img.src = "img/giraffe2.jpg";
    }
}