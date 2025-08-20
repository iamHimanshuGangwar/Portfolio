const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul');
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");


function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.forEach(link => {
            link.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50','dark:border', 'dark:border-white/50', 'dark:bg-transparent');
        });
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.forEach(link => {
            link.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50','dark:border', 'dark:border-white/50', 'dark:bg-transparent');
        });
    }
});


// Load saved theme preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  themeIcon.src = "./images/sun_icon.png"; // show sun in dark
} else {
  document.documentElement.classList.remove("dark");
  themeIcon.src = "./images/moon_icon.png"; // show moon in light
}

// Toggle Theme
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
    themeIcon.src = "./images/sun_icon.png";
  } else {
    localStorage.theme = "light";
    themeIcon.src = "./images/moon_icon.png";
  }
});

// Mobile menu toggle

function openMenu() {
  sideMenu.classList.remove("-right-64");
  sideMenu.classList.add("right-0");
}
function closeMenu() {
  sideMenu.classList.remove("right-0");
  sideMenu.classList.add("-right-64");
}
