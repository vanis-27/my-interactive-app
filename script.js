function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const noBtn = document.getElementById("noButton");
    const x = Math.floor(Math.random() * 300);
    const y = Math.floor(Math.random() * 300);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
