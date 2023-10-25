// window.addEventListener("mousemove", (e) => {
//     // cursor.style.top = e.y + "px";
//     // cursor.style.left = e.x + "px";

//     cursor2.style.top = e.pageY + "px";
//     cursor2.style.left = e.pageX + "px";

//     // cursor3.style.top = e.y + "px";
//     // cursor3.style.left = e.x + "px";
// });

window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY;
    console.log(scroll);
    
    // let mainText = document.getElementsByClassName("main-text").style.transform
    
    if (scroll >= 300) {
        var mainText = document.getElementById("main-text");
        var mainImage = document.getElementById("main-image");

        mainText.style.translate = 0;
        mainImage.style.translate = 0;
    }
});
