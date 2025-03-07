// const fontImages = {};
// const imageFolder = "./images/";
// const invalidInputGif = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmtkdnJhMXY4Njd1cXR3MTM3MW1nMzZ1NXNhNHlhOHA0MWF2dDUzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13dRJkj5wgKq9q/giphy.gif";

// Generate font image paths for A-Z and numbers 1-9
// for (let i = 65; i <= 90; i++) { 
//     const letter = String.fromCharCode(i);  
//     for (let num = 1; num <= 9; num++) { 
//         fontImages[`${letter}${num}`] = `${imageFolder}${letter}${num}.png`;
//     }
// }

const fontImages = {};
const imageFolder = "./images/"; 
const invalidInputGif = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmtkdnJhMXY4Njd1cXR3MTM3MW1nMzZ1NXNhNHlhOHA0MWF2dDUzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13dRJkj5wgKq9q/giphy.gif";


for (let i = 65; i <= 90; i++) { 
    const letter = String.fromCharCode(i); 
    fontImages[letter] = `${imageFolder}${letter}.png`; 
}
function displayImage() {
    const input = document.getElementById("charInput").value.toUpperCase();
    const imgElement = document.getElementById("displayedImage");

    if (/^[A-Z]$/.test(input)) {
        let img = new Image();
        img.src = fontImages[input];

        img.onload = function () {
            imgElement.src = fontImages[input];
            imgElement.style.display = "block";
        };
    img.onerror = function () {
        imgElement.src = invalidInputGif; 
        imgElement.style.display = "block";
    };
} else {
    imgElement.src = invalidInputGif; 
    imgElement.style.display = "block";
}
}

// function displayImage() {
//     const letterInput = document.getElementById("charInput").value.toUpperCase();
//     const numberInput = document.getElementById("numInput").value;
//     const imgElement = document.getElementById("displayedImage");

//     const fontKey = letterInput + numberInput;

//     if (/^[A-Z]$/.test(letterInput) && /^[1-9]$/.test(numberInput)) {
//         let filePath = fontImages[fontKey];

//         let img = new Image();
//         img.src = filePath;
//         img.onload = function () {
//             imgElement.src = filePath;
//             imgElement.style.display = "block";
//         };
//         img.onerror = function () {
//             imgElement.src = invalidInputGif;
//             imgElement.style.display = "block";
//         };
//     } else {
//         imgElement.src = invalidInputGif;
//         imgElement.style.display = "block";
//     }
// }

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup-card");
    const closePopup = document.getElementById("close-popup");

    popup.addEventListener("click", function () {
        popup.style.transform = "scale(1.1)"; 
        popup.style.boxShadow = "10px 10px 0px black"; 

        setTimeout(() => {
            popup.style.opacity = "0";
            setTimeout(() => popup.style.display = "none", 300);
        }, 200);
    });

    closePopup.addEventListener("click", function () {
        popup.style.opacity = "0";
        setTimeout(() => popup.style.display = "none", 300);
    });
});
const typeSlider = document.getElementById("type-slider");
const typefaceName = document.getElementById("typeface-name");

const typefaces = {
    1: "Serif",
    2: "Sans Serif",
    3: "Slab Serif",
    4: "Monospace",
    5: "Script",
    6: "Display",
    7: "Handwriting",
    8: "Gothic",
    9: "Decorative"
};

typeSlider.addEventListener("input", function() {
    const value = this.value;
    typefaceName.textContent = typefaces[value];
    typefaceName.style.visibility = "visible";
});