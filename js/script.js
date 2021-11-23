// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Collego la generazione della griglia al click del button
let buttonPlay = document.getElementById('button');

buttonPlay.addEventListener('click', function() {
    // Seleziono il container
    let mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    // Importo il valore della difficoltà scelta dall'utente
    const userDifficulty = document.getElementById('difficolta').value;
    
    // Con un if divido nei casi possibili
    if( userDifficulty === 'easy') {
        // Se è easy popolo il contenitore con 100 celle
        for (let i = 1; i <= 100; i++) {
            const newBox = document.createElement('div');
            // Aggiungo la classe box e la larghezza
            newBox.classList.add('box');
            // Popolo il box con il numero
            newBox.innerHTML = `<span>${i}</span>`;
            // Popolo il container
            mainContainer.appendChild(newBox);
            // Aggiungo l'evento al box
            newBox.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        }
    } else if ( userDifficulty === 'hard') {
        // Se è hard popolo il contenitore con 81 celle
        for (let i = 1; i <= 81; i++) {
            // Creo l'elemento
            const newBox = document.createElement('div');
            // Aggiungo la classe box e la larghezza
            newBox.classList.add('box','width-9');
            // Popolo il box con il numero
            newBox.innerHTML = `<span>${i}</span>`;
            // Popolo il container
            mainContainer.appendChild(newBox);
            // Aggiungo l'evento al box
            newBox.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        }
    } else if ( userDifficulty === 'crazy') {
        // Se è crazy popolo il contenitore con 49 celle
        for (let i = 1; i <= 49; i++) {
            const newBox = document.createElement('div');
            // Aggiungo la classe box e la larghezza
            newBox.classList.add('box','width-7');
            // Popolo il box con il numero
            newBox.innerHTML = `<span>${i}</span>`;
            // Popolo il container
            mainContainer.appendChild(newBox);
            // Aggiungo l'evento al box
            newBox.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        }
    }
});