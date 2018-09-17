const maxWidth = 750;
const gridNumber = 10;
const containerPadding = 30;
let documentElement = document.documentElement;
document.addEventListener('DOMContentLoaded', updateFontSize);
window.addEventListener('orientationchange', updateFontSize);
window.addEventListener('resize', updateFontSize);

function updateFontSize() {
    let width = documentElement.clientWidth;
    width = width < maxWidth ? width : maxWidth;
    documentElement.style.fontSize = `${(width - containerPadding) / gridNumber}px`;
}