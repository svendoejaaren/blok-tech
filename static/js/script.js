const guitarHeader = document.querySelector("section h2:first-of-type");
const guitarList = document.querySelector("div:first-of-type");

guitarHeader.addEventListener('click', () => {
    guitarList.classList.toggle("showing");
    guitarHeader.classList.toggle("plusSign");
})