/* ================== typing animation ================= */
const typingElement = document.querySelector(".typing");
if (typingElement) {
    var typed = new Typed(".typing", {
        strings: ["", "Student", "Data Engineer", "FullStack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}

/* ===================== Navbar / Aside ================= */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    allSection = document.querySelectorAll(".section");

// Handle Navigation Clicks with Smooth Scroll
navList.forEach(li => {
    const a = li.querySelector("a");
    a.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
        }

        // Close mobile nav-menu if open
        if (window.innerWidth < 991) {
            asideSectionTogglerBtn();
        }
    });
});

// Robust Scroll Spy logic
function updateActiveNavLink() {
    const scrollPos = window.scrollY + 200; // Add offset for better detection

    let currentSection = null;

    // Find which section we're currently in
    allSection.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    // If no section found (at very top), default to home
    if (!currentSection) {
        currentSection = "home";
    }

    // Update active class
    navList.forEach(li => {
        const a = li.querySelector("a");
        const href = a.getAttribute("href");

        if (href === "#" + currentSection) {
            a.classList.add("active");
        } else {
            a.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNavLink);
window.addEventListener("load", updateActiveNavLink);

// ==================== Bouton "Hire Me" =====================
document.querySelector(".hire-me")?.addEventListener("click", function (e) {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        window.scrollTo({
            top: contactSection.offsetTop - 60,
            behavior: "smooth"
        });
    }
});

// ==================== Mobile Menu Toggler =====================
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".nav-menu");

navTogglerBtn?.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}
