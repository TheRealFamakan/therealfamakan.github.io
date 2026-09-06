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

/* ============== Theme light, dark, and system mode =================*/
const themeModeButtons = document.querySelectorAll(".theme-mode-button");
const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyThemeMode(mode) {
    const isDark = mode === "dark" || (mode === "system" && systemThemeQuery.matches);
    document.body.classList.toggle("dark", isDark);
    themeModeButtons.forEach((button) => {
        const isActive = button.dataset.themeMode === mode;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

function setThemeMode(mode) {
    const selectedMode = ["light", "dark", "system"].includes(mode) ? mode : "system";
    localStorage.setItem("portfolio-theme-mode", selectedMode);
    applyThemeMode(selectedMode);
}

themeModeButtons.forEach((button) => {
    button.addEventListener("click", () => setThemeMode(button.dataset.themeMode));
});

systemThemeQuery.addEventListener("change", () => {
    if (localStorage.getItem("portfolio-theme-mode") === "system") applyThemeMode("system");
});

setThemeMode(localStorage.getItem("portfolio-theme-mode") || "system");
