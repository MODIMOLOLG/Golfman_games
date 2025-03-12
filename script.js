document.addEventListener("click", () => {
    // Play music
    const audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Autoplay blocked:", error));

    // Fade to green, then fade out
    const overlay = document.getElementById("overlay");

    // First, change the background to green
    overlay.style.backgroundColor = "green";

    // Then, after 1 second (green fade), start fading out
    setTimeout(() => {
        overlay.style.opacity = "0";  // Start fading out
    }, 1700); // 1s before starting the fade out

    // Remove overlay after fade-out
    setTimeout(() => {
        overlay.style.display = "none";  // Hide overlay after fade out
    }, 2200);  // 1.5s to match the total duration
}, { once: true });

