document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("chocolate-container");

    const createChocolate = () => {
        const chocolate = document.createElement("img");
        chocolate.src = "./img/bar.png";
        chocolate.style.position = "absolute";
        chocolate.style.width = "50px";
        chocolate.style.top = "-50px";
        chocolate.style.left = `${Math.random() * window.innerWidth}px`;
        chocolate.style.zIndex = "1000";
        container.appendChild(chocolate);

        let topPosition = -50;
        const fallInterval = setInterval(() => {
            if (topPosition > window.innerHeight) {
                clearInterval(fallInterval);
                chocolate.remove();
            } else {
                topPosition += 5;
                chocolate.style.top = `${topPosition}px`;
            }
        }, 30);
    };

    const chocolateInterval = setInterval(() => {
        createChocolate();
    }, 500);

    setTimeout(() => {
        clearInterval(chocolateInterval);
    }, 10000);
});
