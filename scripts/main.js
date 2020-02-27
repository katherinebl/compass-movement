'use strict'

const arrow = document.querySelector(".arrow");
const arrowRects = arrow.getBoundingClientRect();
const arrowX = arrowRects.left + arrowRects.width / 2;
const arrowY = arrowRects.top + arrowRects.height / 2;

document.addEventListener("mousemove", function(event) {
    arrow.style.transform = "rotate(" + Math.atan2(event.clientY - arrowY, event.clientX - arrowX) + "rad)";
});