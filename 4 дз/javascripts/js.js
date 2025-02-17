document.addEventListener("DOMContentLoaded", function() {
    const pay = document.getElementById("murmur");
    document.addEventListener("mousemove", function (event) {
        const x = event.clientX;
        const y = event.clientY;

        pay.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
        if (x > 500 || y > 500) {
            pay.style.color = "blue";
        } else {
            pay.style.color = "pink";
        }
    });
});
