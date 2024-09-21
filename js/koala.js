function browseImages() {
    let img = document.getElementById("image");
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        img.src = "img/koala.png";
    } else if (choice === 1) {
        img.src = "img/koala1.jpg";
    } else {
        img.src = "img/koala2.png";
    }
}