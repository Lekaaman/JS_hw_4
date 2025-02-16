document.addEventListener("mousemove", function (event) {
    let x = event.clientX;
    let y = event.clientY;
  
    x = x.toString().slice(0, 3);
    y = y.toString().slice(0, 3);

    const coordinates = document.getElementById("coordinates");

    coordinates.textContent = `X: ${x}, Y: ${y}`;

    if (x > 500) {
        coordinates.style.color = "red";
    } else {
        coordinates.style.color = "black";
    }
});
