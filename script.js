document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("animated-border");

    paragraph.style.border = "5px solid";
    paragraph.style.borderImage = "linear-gradient(45deg, #ff00ff, #00ff00, #00ccff, #ff00ff) 1";
    paragraph.style.borderImageSlice = 1;
    paragraph.style.animation = "borderAnimation 5s infinite";
    paragraph.style.borderRadius = "50px"; // Ajustar la curvatura a un valor más razonable
    paragraph.style.padding = "20px"; // Añadir más separación con el texto

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes borderAnimation {
            0% {
                border-image-source: linear-gradient(45deg, #ff00ff, #00ff00, #00ccff, #ff00ff);
            }
            50% {
                border-image-source: linear-gradient(45deg, #00ccff, #ff00ff, #00ff00, #00ccff);
            }
            100% {
                border-image-source: linear-gradient(45deg, #ff00ff, #00ff00, #00ccff, #ff00ff);
            }
        }
    `;
    document.head.appendChild(style);
});