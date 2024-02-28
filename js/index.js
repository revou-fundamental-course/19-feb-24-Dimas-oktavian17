// * home page promot
let nameInput = prompt("Masukan nama Anda sebelum akses.");
let nameUser = ''
nameInput === null || nameInput.trim() === "" ? nameUser = "Kamu" : nameUser = nameInput;
document.getElementById("IdUser").textContent = nameUser;
// * form validation
const SubmitForm = document.querySelector('[aria-label="contact-form"]')
SubmitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.querySelector('#nameUser').value;
    const Dob = document.querySelector('#birth').value;
    const MessageUser = document.querySelector('textarea').value;
    const errorValidation = document.querySelector('.error-msg');
    // Get the selected value of the radio button
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    let selectedGender = null;
    genderInputs.forEach(input => input.checked ? selectedGender = input.value : '');

    const isValidName = /^[a-zA-Z\s]+$/.test(userName);
    const isValidDob = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(Dob);
    const isValidMessage = MessageUser.trim() !== '';
    const isValidGender = selectedGender !== null;

    // Reverse the order of day, month, and year for display

    !isValidName || !isValidDob || !isValidMessage || !isValidGender ? checkName() : succesValidation(userName, Dob, selectedGender, MessageUser)
    SubmitForm.reset()
});

function checkName() {
    const errorValidation = document.querySelectorAll('.error-msg');
    errorValidation.forEach(item => {
        item.style.display = "block";
        item.style.visibility = "visible";
    })
}
function succesValidation(userName, Dob, selectedGender, MessageUser) {
    const errorValidation = document.querySelectorAll('.error-msg');
    errorValidation.forEach(item => {
        item.style.display = "none";
        item.style.visibility = "invisible";
    })
    document.getElementById('YourName').textContent = userName
    document.getElementById('IdUser').textContent = userName
    document.getElementById('Yourbirth').textContent = reverseDob(Dob);
    document.getElementById('Yourgender').textContent = selectedGender
    document.getElementById('Yourmessage').textContent = MessageUser // Display current date and time
    const currentDate = new Date();
    document.getElementById('currentTime').textContent = currentDate.toString();
}

function reverseDob(originalDob) {
    const [year, month, day] = originalDob.split("-");
    return `${day}-${month}-${year}`;
}

function Todays() {
    return Date.toString()
}

// * hamburger

const toggleMenuButton = () => document.getElementById("menu-list").classList.toggle("show");
document.querySelector('.menu-button').addEventListener('click', toggleMenuButton)
document.querySelector('#menu-list').addEventListener('click', toggleMenuButton)
// * footer
const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const backtoTop = document.querySelector('[aria-label="toTop"]')
const getYear = new Date().getFullYear()
const footerCopy = document.querySelector('#footerCopy')
footerCopy.innerHTML = getYear
backtoTop.addEventListener('click', toTop)
