let totImages = 0;
let loadedImages = 0;

const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const loadImage = (entry) => {
    const containerDiv = entry.target; //target DIV
    const image = containerDiv.firstChild;
    const url = image.dataset.src;
    image.onload = () => {
        loadedImages += 1;
        logState();
    }
    image.src = url;

    observer.unobserve(containerDiv);
};
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
});

export const registerImage = (image) => {
    observer.observe(image);
    totImages += 1;
    logState();
};

function logState(){
    console.log(`🟨 Total imágenes:    ${totImages}`);
    console.log(`✅ Imágenes cargadas: ${loadedImages}`);
    console.log(`-------------------------`);
}