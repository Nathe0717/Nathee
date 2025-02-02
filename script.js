const messages = [
    "lah?",
    "ayaw mo?",
    "too bad i dont accept no's",
    "dont you love me?",
    "BB",
    "STOP PRESSING NO",
    "bala ka magtatampo aq",
    "joke lang",
    "ok titigil na ko.",
    "SIKE"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
