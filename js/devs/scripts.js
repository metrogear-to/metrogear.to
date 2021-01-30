const profilePicture = document.querySelector('#person-picture')
const profileName = document.querySelector('#person-name-value')
const profileBlurb = document.querySelector('#person-blurb')
const linkedin = document.querySelector('#socials-linkedin')
const github = document.querySelector('#socials-github')
const instagram = document.querySelector('#socials-instagram')
const website = document.querySelector('#socials-website')
const resume = document.querySelector('#socials-resume')

const changeDev = (name) => {
    switch (name) {
        case 'alexg':
            profilePicture.src = '../img/devs/alexg/alexg.jpeg'
            profileName.textContent = 'Alex Gonczaruk'
            profileBlurb.textContent = 'Im a 2nd year university student in Mechatronics Engineering at the University of Waterloo. I live in Toronto, Ontario and have a keen passion for sports, fashion, and technology'
            linkedin.href = 'https://linkedin.com/in/alexandergonczaruk/'
            github.href = 'https://github.com/alexgonczaruk'
            instagram.href = 'https://instagram.com/alexgonczaruk'
            website.href = ''
            resume.href = '../img/devs/alexg/alexgResume.pdf'
            break
        case 'alexh':
            profilePicture.src = '../img/devs/alexh/alexh.jpeg'
            profileName.textContent = 'Alex He'
            profileBlurb.textContent = 'Im a 2nd year university student in Mechatronics Engineering at the University of Waterloo. I live in (^_^)WHITBY(^_^), Ontario and have a keen passion for sports, fashion, and technology'
            linkedin.href = 'https://www.linkedin.com/in/alexander--he/'
            github.href = 'https://github.com/Alexander-He1'
            instagram.href = 'https://instagram.com/alex.hhe/'
            website.href = ''
            resume.href = '../img/devs/alexg/alexgResume.pdf'
            break;
        case 'araf':
            profilePicture.src = '../img/devs/araf/araf.jpeg'
            profileName.textContent = 'Araf Khan'
            profileBlurb.textContent = 'Im a 2nd year university student in Chemical Engineering at the University of Waterloo. I live in Toronto, Ontario and have a keen passion for sports, fashion, and technology'
            linkedin.href = 'https://www.linkedin.com/in/arafk/'
            github.href = 'https://github.com/araf-khan'
            instagram.href = 'https://instagram.com/___araf.k/'
            website.href = ''
            resume.href = '../img/devs/alexg/alexgResume.pdf'
            break;
        case 'arvin':
            profilePicture.src = '../img/devs/araf/araf.jpeg'
            profileName.textContent = 'Arvin Muraghathasan'
            profileBlurb.textContent = 'Im a 2nd year university student in Civil Engineering at York University. I live in Toronto, Ontario and have a keen passion for sports, fashion, and technology'
            linkedin.href = 'https://www.linkedin.com/in/arvinmurugathasan/'
            github.href = ''
            instagram.href = 'https://instagram.com/__.am16.__/'
            website.href = ''
            resume.href = '../img/devs/alexg/alexgResume.pdf'
            break;
        case 'saihan':
            profilePicture.src = '../img/devs/alexg/alexg.jpeg'
            profileName.textContent = 'Saihan Khondoker'
            profileBlurb.textContent = 'Im a 2nd year university student in Business Commerce at Ryerson University. I live in Toronto, Ontario and have a keen passion for sports, fashion, and technology'
            linkedin.href = 'https://www.linkedin.com/in/saihan-khondoker-7a5351193/'
            github.href = 'https://github.com/saihn15'
            instagram.href = 'https://instagram.com/saihan.khondoker/'
            website.href = ''
            resume.href = '../img/devs/alexg/alexgResume.pdf'
            break;
        case 'shehan':
            profilePicture.src = '../img/devs/shehan/shehan.jpeg'
            profileName.textContent = 'Shehan Bandara'
            profileBlurb.textContent = 'Im a 2nd year university student in Mechatronics Engineering at the University of Waterloo. I live in Toronto, Ontario and have a keen passion for sports, fashion, and technology'
            linkedin.href = 'https://www.linkedin.com/in/shehanbandara/'
            github.href = 'https://github.com/shehanbandara'
            instagram.href = 'https://instagram.com/_.shehanbandara/'
            website.href = ''
            resume.href = '../img/devs/alexg/alexgResume.pdf'
            break;
    }

}
