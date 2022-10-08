const spnText = document.querySelector('.text');
const spnKursor = document.querySelector('.kursor');
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint possimus temporibus minus asperiores aliquam. KONIEC";
const kursor = "|"
let indexText = 0;
const time = 40;
const addLetter = () => {
    spnText.textContent += text[indexText];
    indexText++;
    if (indexText === text.length) clearInterval(indexInterval);
}
const indexInterval = setInterval(addLetter, time);

const addKursor = () => {
    spnKursor.kursorContent = kursor;

}

spnKursor = setInterval(addKursor, time);