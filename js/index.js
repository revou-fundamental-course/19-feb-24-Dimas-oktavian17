// import '../css/index.css'
// * Object dynamically data
const NavList = [
    {
        name: 'Home',
    },
    {
        name: 'About Our',
    },
    {
        name: 'Our Teacher',
    },
    {
        name: 'Contact Us',
    },
]
document.querySelector('[aria-label="navList"]').innerHTML = NavList.map(({ name }) => `<li><a href="#${name}" style="color:black;">${name}</a></li>`).join('')

const createImageElement = (src) => {
    const img = new Image();
    img.src = src;
    return img;
}
const Teachers = [
    {
        name: 'Jhone',
        photo: createImageElement('../assets/hero.jpg')
    },
    {
        name: 'Doe',
        photo: createImageElement('../assets/hero.jpg')
    },
    {
        name: 'Eddie',
        photo: createImageElement('../assets/hero.jpg')
    },
];
const ourTeacher = Teachers.map(({ name, photo }) => `
                <div class="">
                    <figure>
                        <img src="${photo.src}" alt="${name}" class="ourteacherImg" >
                        <figcaption style="text-align: center; padding-top: 1rem;">
                            ${name}
                        </figcaption>
                    </figure>
                </div>
`).join('')

let ourTeacherElements = document.querySelector('[aria-label="ourTeacher"]');
ourTeacherElements.innerHTML = ourTeacher
// Accessing the photo element
console.log(Teachers[0].photo);

function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
}