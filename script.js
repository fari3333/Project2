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