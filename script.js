document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("animated-border");

    paragraph.style.border = "5px solid";
    paragraph.style.borderImage = "linear-gradient(45deg, #ff00ff, #00ff00, #00ccff, #ff00ff) 1";
    paragraph.style.borderImageSlice = 1;
    
    // Añadiendo múltiples animaciones
    paragraph.style.animation = "borderAnimation 5s linear infinite, rotate 10s linear infinite, pulse 2s ease-in-out infinite";
    
    paragraph.style.borderRadius = "50px"; // Manteniendo la curvatura
    paragraph.style.padding = "20px"; // Manteniendo el padding
    paragraph.style.transition = "all 0.3s ease"; // Para transiciones suaves al cambiar propiedades

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
        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
});