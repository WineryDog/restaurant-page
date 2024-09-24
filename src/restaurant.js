import loadMenuContent from './menuTab.js';
import loadHomeContent from './homeTab.js';
import loadContactsContent from './contactsTab.js';

const createRestaurantContent = () => {
    const content = document.getElementById('content');

    const header = document.createElement('header');
    header.classList.add('header');

    const restName = document.createElement('h1');
    restName.classList.add('rest-name');
    restName.textContent = "Old Aunt Peppa";
    header.appendChild(restName);

    // nav
    const nav = document.createElement('nav');
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home'


    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu'

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contacts'
    const buttons = [homeBtn, menuBtn, contactBtn]

    buttons.forEach((button) => {
        button.classList.add('nav-btn');
        nav.appendChild(button);
    })

    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuBtn,homeBtn,contactBtn);
        loadMenuContent();
      });
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeBtn,contactBtn,menuBtn);
        loadHomeContent();
      });

    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactBtn,homeBtn,menuBtn);
        loadContactsContent();
      });
    

    header.appendChild(nav);
    content.appendChild(header);

    // main
    const main = document.createElement('div');
    main.classList.add('main')
    content.appendChild(main);

    // footer
    const footer = document.createElement('footer');
    footer.classList.add('foot')
    
    const attribution = document.createElement('p');
    attribution.classList.add('attribution')
    attribution.textContent = "Coded by "
    
    const aLink = document.createElement('a');
    aLink.classList.add('attribution-link')
    aLink.href = "https://github.com/WineryDog"
    aLink.innerHTML = `<i class="fa-brands fa-github" aria-hidden="true"></i> WineryDog`

    attribution.appendChild(aLink)
    footer.appendChild(attribution)
    content.appendChild(footer);

    setActiveButton(homeBtn,contactBtn,menuBtn);
}

function setActiveButton(button, inactive1, inactive2){
    button.classList.add('active')
    inactive1.classList.remove('active')
    inactive2.classList.remove('active')
}

export default createRestaurantContent;

