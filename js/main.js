light = (sw) => {
    let pic;
    if (sw == 0) {
        pic = "./images/bulb-off.png";
    } else {
        pic = "./images/bulb-on.png";
    }
     document.getElementById("demo").src = pic;
}