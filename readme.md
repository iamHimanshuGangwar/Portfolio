# Portfolio -  Himanshu Gangwar

A modern, responsive personal portfolio website built with HTML, Tailwind CSS, and JavaScript.

## Features
- Responsive design for all devices
- Light and dark theme toggle (with localStorage persistence)
- Animated elements (e.g., spinning circular text)
- Services, work/projects, and contact sections
- fonts (Ovo, Outfit)


## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) and npm installed

### Setup
1. **Install dependencies:**
   ```sh
   npm install tailwindcss
   ``` 
2. **Create Tailwind input file:**
   ```css
   /* input.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
3. **Build Tailwind CSS:**
   ```sh
   npx tailwindcss -i ./input.css -o ./output.css --watch
   ```
4. **Start the project:**
   - Open `index.html` in your browser, or use a local server (e.g., Live Server extension in VS Code).

## Customization
- **Dark Mode:**
  - Click the moon icon in the navbar to toggle dark mode.
  - Dark mode is enabled via Tailwind's `darkMode: 'class'` setting.
- **Fonts:**
  - Uses Google Fonts Ovo and Outfit for a clean, modern look.
- **Animations:**
  - The circular text image in the About section uses a custom slow spin animation.

## Folder Structure
```
/Portfolio
├── images/           # All image assets
├── index.html        # Main HTML file
├── script.js         # JavaScript for interactivity
├── tailwind.config.js# Tailwind CSS configuration
├── input.css         # Tailwind CSS input file
├── output.css        # Generated CSS (do not edit manually)
└── readme.md         # Project documentation
```

## Credits
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Fonts](https://fonts.google.com/)
- Icons and images: your own or from free resources
