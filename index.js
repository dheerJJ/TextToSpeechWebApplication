const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener('click', function () {
    const speechSynch = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelector('.error-para');

    if (!speechSynch.speaking && !enteredText.trim().length) {
        error.textContent = "Nothing to Convert!!! Enter text in the text area...";
        return;
    }

    if (!speechSynch.speaking && enteredText.trim().length) {
        error.textContent = "";
        const newUtter = new SpeechSynthesisUtterance(enteredText);

        convertBtn.textContent = "...";

        speechSynch.speak(newUtter);

        newUtter.onend = function () {
            convertBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        };

        newUtter.onerror = function () {
            convertBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        };
    }
});