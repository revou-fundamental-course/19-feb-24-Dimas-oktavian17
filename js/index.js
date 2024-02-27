// // import '../css/index.css'
// // * Object dynamically data
// const NavList = [
//     {
//         name: 'Home',
//     },
//     {
//         name: 'About Our',
//     },
//     {
//         name: 'Our Teacher',
//     },
//     {
//         name: 'Contact Us',
//     },
// ]
// document.querySelector('[aria-label="navList"]').innerHTML = NavList.map(({ name }) => `<li><a href="#${name}" style="color:black;">${name}</a></li>`).join('')

// const createImageElement = (src) => {
//     const img = new Image();
//     img.src = src;
//     return img;
// }
// const Teachers = [
//     {
//         name: 'Jhone',
//         photo: createImageElement('../assets/hero.jpg')
//     },
//     {
//         name: 'Doe',
//         photo: createImageElement('../assets/hero.jpg')
//     },
//     {
//         name: 'Eddie',
//         photo: createImageElement('../assets/hero.jpg')
//     },
// ];
// const ourTeacher = Teachers.map(({ name, photo }) => `
//                 <div class="">
//                     <figure>
//                         <img src="${photo.src}" alt="${name}" class="ourteacherImg" >
//                         <figcaption style="text-align: center; padding-top: 1rem;">
//                             ${name}
//                         </figcaption>
//                     </figure>
//                 </div>
// `).join('')

// let ourTeacherElements = document.querySelector('[aria-label="ourTeacher"]');
// ourTeacherElements.innerHTML = ourTeacher
// // Accessing the photo element
// console.log(Teachers[0].photo);

// function toggleMenu() {
//     const navUl = document.querySelector('nav ul');
//     navUl.classList.toggle('show');
// }

// * form validation
// * checkCase variael
const YourName = /^[a-zA-Z]{5,}$/;
const YourTextArea = /^.{10,}$/;
// *function checking
const validationName = (name) => YourTextArea.test(name)
console.log(validationName('0301381dedakekd'));
// * Handle Submit form
const SubmitForm = document.querySelector('[aria-label="contact-form"]')
SubmitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = document.querySelector('#nameUser').value
    const Dob = document.querySelector('#birth').value
    const MessageUser = document.querySelector('textarea').value
    const errorValidation = document.querySelector('.error-msg')
    // ! Get the selected value of the radio button
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    let selectedGender = null;
    genderInputs.forEach(input => input.checked ? selectedGender = input.value : '');
    const checkName = () => {
        errorValidation.style.display = "block";
        errorValidation.style.visibility = "visible";
    }
    YourTextArea.test(userName) === false ? checkName() : console.log('ok');
    // console.table(userName, Dob, MessageUser, selectedGender);
})
// * footer
const getYear = new Date().getFullYear()
const footerCopy = document.querySelector('#footerCopy')
footerCopy.innerHTML = getYear
