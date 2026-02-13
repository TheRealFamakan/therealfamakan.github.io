/* ============ style switcher is now integrated into header =============== */
// Side panel toggle logic removed as it's no longer needed

/* ============== Theme color =================*/

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

/* ============== Theme light and dark mode =================*/
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    // Activer le mode sombre par défaut
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.add("fa-sun");
});
