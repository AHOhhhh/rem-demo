let documentElement = document.documentElement;

function updateFontSize() {
    let clientWidth = documentElement.clientWidth;
    clientWidth = clientWidth < 640 ? clientWidth : 640;
    documentElement.style.fontSize = `${clientWidth / 640 * 100}px`;
    console.log(clientWidth);
}

document.addEventListener('DOMContentLoaded', updateFontSize);
window.addEventListener('orientationchange', updateFontSize);
window.addEventListener('resize', updateFontSize);