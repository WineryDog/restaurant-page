import rigatoniImg from './images/menu/rigatoni.png';
import farfalleImg from './images/menu/farfalle.png';
import conchiglieImg from './images/menu/conchiglie.png';
import elicheImg from './images/menu/eliche.png';
import maccheronciniImg from './images/menu/maccheroncini.png';
import orecchietteImg from './images/menu/orecchiette.png';
import spaghettiImg from './images/menu/spaghetti.png';
import tubettiImg from './images/menu/tubetti.png';

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu')

    const menuObjects = [
        { img: rigatoniImg, title: 'Rigatoni', description: 'Creamy rigatoni with melted mozzarella.'},
        { img: farfalleImg, title: 'Farfalle', description: 'Farfalle with fresh tomato and basil sauce.' },
        { img: conchiglieImg, title: 'Conchiglie', description: 'Shell pasta with ricotta and tender shrimp.' },
        { img: elicheImg, title: 'Eliche', description: 'Spirals with spicy ricotta, tomato, and parsley.' },
        { img: maccheronciniImg, title: 'Maccheroncini', description: 'Maccheroncini in a rich cheese sauce.' },
        { img: orecchietteImg, title: 'Orecchiette', description: 'Orecchiette with tomato and fresh basil.' },
        { img: spaghettiImg, title: 'Spaghetti', description: 'Spaghetti with tomato sauce and melted mozzarella.'},
        { img: tubettiImg, title: 'Tubetti', description: 'Small pasta tubes in a smooth basil sauce.' }
    ]

    menuObjects.forEach(element => {
        const mItem = createMitem(element.img,element.title,element.description)
        menu.appendChild(mItem)
    });
    
    return menu
}

function createMitem(img,title,description) {
    const mItem = document.createElement('div');
    mItem.classList.add('m-item')

    const mImg = document.createElement('img');
    mImg.src = img;
    mImg.alt = `${title.toLowerCase()}`;

    const mTitle = document.createElement('h2');
    mTitle.textContent = title;

    const mDescription = document.createElement('p');
    mDescription.textContent = description;

    mItem.appendChild(mImg)
    mItem.appendChild(mTitle)
    mItem.appendChild(mDescription)

    return mItem;
}

const loadMenuContent = () => {
    const main = document.querySelector('.main');
    main.innerHTML = "";

    main.appendChild(createMenu())
}

export default loadMenuContent