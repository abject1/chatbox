const btnSend = document.getElementById('btnSend');
const textArea = document.getElementById('textArea');
const fenetre = document.getElementById('window');
let a;
let b = 0;
let c = 0;
let d = 0;

const message = [
    "Très bien j'aurais bessoin de plus d'information dans ce cas."
    
]

const message2 = [
    "Pour cette utilisation je vous conseil un I7-9700k ainsi que 16go de ram en 3000Mhz."
]

const message3 = [
    "Aucun soucit je reste a votre disposition pour toute autres question, bonne journée à vous."
]

const getCharacter = async () => {
    try {
        fenetre.innerHTML += `
        <div class="messageBis">
            <img src="./avatar_2.jpg" alt="avatar_2">
            <p>${a}</p>
        </div>
        `
    } catch (error) {
        throw new Error(error.message || error);
    }
}

const sendMessage = async () => {
    try {
        if (b == 1) {
        fenetre.innerHTML += `
        <div class="message">
            <img src="./avatar_1.jpg" alt="avatar_1">
            <p>${message}</p>
        </div>
        `
        }

    } catch (error) {
        throw new Error(error.message || error);
    }
}

const sendMessage2 = async () => {
    try {
        if (c == 2) {
        fenetre.innerHTML += `
        <div class="message">
            <img src="./avatar_1.jpg" alt="avatar_1">
            <p>${message2}</p>
        </div>
        `
        }

    } catch (error) {
        throw new Error(error.message || error);
    }
}

const sendMessage3 = async () => {
    try {
        if (d == 3) {
        fenetre.innerHTML += `
        <div class="message">
            <img src="./avatar_1.jpg" alt="avatar_1">
            <p>${message3}</p>
        </div>
        `
        }

    } catch (error) {
        throw new Error(error.message || error);
    }
}

btnSend.addEventListener('click', () => {
    a = textArea.value
    getCharacter();
    textArea.value = "";
    for (b = 0; b < 1; b++) {
        sendMessage();
        c++;
        d++;
    };
    for (c = 0; c < 2; c++) {
        sendMessage2()
        d++;
    }
    for (d = 3; d < 3; c++) {
        sendMessage3()
    }
})

