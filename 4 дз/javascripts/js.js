document.addEventListener("DOMContentLoaded", function() {
    const chtot = document.getElementById("murmur");
    document.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;

    murmurs.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    if (x > 500 || y > 500) {
        murmurs.style.color = "white";
    } else {
        murmurs.style.color = "pink";
    }
    });
});