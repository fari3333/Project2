const fontImages = {};
const imageFolder = "./IMAGES/";
const invalidInputGif = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmtkdnJhMXY4Njd1cXR3MTM3MW1nMzZ1NXNhNHlhOHA0MWF2dDUzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13dRJkj5wgKq9q/giphy.gif";


for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    for (let num = 1; num <= 6; num++) { 
        fontImages[`${letter}${num}`] = `${imageFolder}${letter}${num}.png`;
    }
}

function updateFontDisplay() {
    const letterInput = document.getElementById("charInput").value.toUpperCase();
    const sliderValue = document.getElementById("type-slider").value;
    const imgElement = document.getElementById("displayedImage");
    const fontKey = letterInput + sliderValue;
    
    if (/^[A-Z]$/.test(letterInput)) {
        let filePath = fontImages[fontKey] || invalidInputGif;

        let img = new Image();
        img.src = filePath;
        img.onload = function () {
            imgElement.src = filePath;
            imgElement.style.display = "block";
        };
        img.onerror = function () {
            imgElement.src = invalidInputGif;
            imgElement.style.display = "block";
        };

        document.getElementById("typeface-name").textContent = fontCategories[sliderValue];
        document.getElementById("typeface-name").style.visibility = "visible";
    } else {
        imgElement.src = invalidInputGif;
        imgElement.style.display = "block";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup-card");
    const closePopup = document.getElementById("close-popup");

    popup.addEventListener("click", function () {
        popup.style.transform = "scale(1.1)"; 
        popup.style.boxShadow = "10px 10px 10px black"; 

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
document.getElementById("submitButton").addEventListener("click", function () {
    this.style.transform = "scale(0.9)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 150);
});
const submitButton = document.getElementById('submitButton');
const displayedImage = document.getElementById('displayedImage');

submitButton.addEventListener('click', function() {
    displayedImage.classList.remove('show', 'shadow-effect');

    
    void displayedImage.offsetWidth; 
    displayedImage.classList.add('show');

   
    setTimeout(() => {
        displayedImage.classList.add('shadow-effect');
    }, 300); 
});


const typeSlider = document.getElementById("type-slider");
const typefaceName = document.getElementById("typeface-name");

const fontCategories = {
    1: "Serif",
    2: "Sans Serif",
    3: "Decorative",
    4: "Monospace",
    5: "Script",
    6: "Display",

};

typeSlider.addEventListener("input", function() {
    const value = this.value;
    typefaceName.textContent = fontCategories[value];
    typefaceName.style.visibility = "visible";
});
