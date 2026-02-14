/* Typing Effect */
const text = "Bhavi ❤️";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 150);
    }
}
typing();

/* NO button moves ONLY when clicked 😈 */
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", function (e) {
    e.preventDefault(); // stop click

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
});

/* YES works normally ❤️ */
document.getElementById("yesBtn").addEventListener("click", () => {
    document.querySelector(".question").style.display = "none";
    document.getElementById("result").classList.remove("hidden");
});

/* Start music on first click */
document.addEventListener("click", function () {
    const music = document.getElementById("bgMusic");
    music.play();
}, { once: true });
