const btnSend = document.getElementById('btnSend');
const textArea = document.getElementById('textArea');
const fenetre = document.getElementById('window');
let a;
let b = 0;

const message = [
    "Très bien, j'aurais besoin de plus d'informations dans ce cas.","Pour cette utilisation, je vous conseille un I7-9700k ainsi que 16go de ram en 3000Mhz.","Pas de problème, je reste à votre disposition pour toute autre question, bonne journée à vous."
    
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
        fenetre.innerHTML += `
        <div class="message">
            <img src="./avatar_1.jpg" alt="avatar_1">
            <p>${message[0]}</p>
        </div>
        `
    } catch (error) {
        throw new Error(error.message || error);
    }
}

const sendMessage2 = async () => {
    try {
        fenetre.innerHTML += `
        <div class="message">
            <img src="./avatar_1.jpg" alt="avatar_1">
            <p>${message[1]}</p>
        </div>
        `
    } catch (error) {
        throw new Error(error.message || error);
    }
}
const sendMessage3 = async () => {
    try {
        fenetre.innerHTML += `
        <div class="message">
            <img src="./avatar_1.jpg" alt="avatar_1">
            <p>${message[2]}</p>
        </div>
        `
    } catch (error) {
        throw new Error(error.message || error);
    }
}

btnSend.addEventListener('click', () => {
    a = textArea.value
    getCharacter();
    textArea.value = "";
    b++;
    if (b === 1) {
        sendMessage();
    } else if (b === 2) {
        sendMessage2();
    } else if (b === 3) {
        sendMessage3();
    }
})

