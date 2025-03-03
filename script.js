// GSAP Animations
gsap.from(".logo", { duration: 1.2, y: -50, opacity: 0, ease: "bounce.out" });
gsap.from("nav ul li", { duration: 1, y: -50, opacity: 0, stagger: 0.2, delay: 0.5 });
gsap.from(".profile-logo", { duration: 1.5, opacity: 0, scale: 0.5, delay: 0.5 });
gsap.from(".hero h2", { duration: 1.5, opacity: 0, scale: 0.5, delay: 1 });
gsap.from(".hero p", { duration: 1.5, opacity: 0, y: 50, delay: 1.5 });
gsap.from(".profilecard", { duration: 1.5, opacity: 0, y: 50, delay: 2 });

gsap.from(".skills h2", { scrollTrigger: ".skills", duration: 1, opacity: 0, y: 50 });
gsap.from(".skill", { 
    scrollTrigger: ".skills", 
    duration: 1, 
    opacity: 0, 
    y: 50, 
    stagger: 0.2,
    onStart: () => {
        document.querySelectorAll(".progress").forEach(bar => {
            const percentage = bar.getAttribute("data-percentage");
            gsap.to(bar, { width: `${percentage}%`, duration: 2, ease: "power3.out" });
        });
    }
});

gsap.from(".gallery h2", { scrollTrigger: ".gallery", duration: 1, opacity: 0, y: 50 });
gsap.from(".gallery-item", { 
    scrollTrigger: ".gallery", 
    duration: 1.2, 
    opacity: 0, 
    scale: 0.8, 
    stagger: 0.3 
});

gsap.from(".videos h2", { scrollTrigger: ".videos", duration: 1, opacity: 0, y: 50 });
gsap.from(".video-container video", { 
    scrollTrigger: ".videos", 
    duration: 1, 
    opacity: 0, 
    scale: 0.8, 
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from(".connect h2", { scrollTrigger: ".connect", duration: 1, opacity: 0, y: 50 });
gsap.from(".social-links a", { scrollTrigger: ".connect", duration: 1, opacity: 0, x: -50, stagger: 0.2 });

// Typed.js for Auto-Typing
var typed = new Typed(".auto-input", {
    strings: ["Gamer.", "Live Streamer.", "Ethical Hacker.", "Photo Editor.", "Video Editor."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// Interactive Background Particles with Mouse Movement
const bg = document.querySelector(".interactive-bg");
function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    bg.appendChild(particle);
    const size = Math.random() * 12 + 6;
    gsap.set(particle, {
        width: size,
        height: size,
        background: `hsl(${Math.random() * 360}, 100%, 50%)`,
        borderRadius: "50%",
        position: "absolute",
        x: x,
        y: y,
        boxShadow: `0 0 ${size * 2}px hsl(${Math.random() * 360}, 100%, 50%)`
    });
    gsap.to(particle, {
        duration: 3 + Math.random() * 2,
        x: x + (Math.random() - 0.5) * 300,
        y: y + (Math.random() - 0.5) * 300,
        opacity: 0,
        scale: 0,
        ease: "power2.out",
        onComplete: () => particle.remove()
    });
}

document.addEventListener("mousemove", (e) => {
    createParticle(e.clientX, e.clientY);
});

for (let i = 0; i < 20; i++) {
    createParticle(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
}

// Gallery Mouse Rotation Effect
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach(item => {
    item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (mouseY / rect.height) * -20;
        const rotateY = (mouseX / rect.width) * 20;

        gsap.to(item, {
            rotationX: rotateX,
            rotationY: rotateY,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    item.addEventListener("mouseleave", () => {
        gsap.to(item, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});