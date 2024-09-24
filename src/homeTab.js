import HomeImage from './images/home.jpg';

function createP(text) {
    const pElement = document.createElement('p');
    pElement.textContent = text;
    return pElement;
}

const loadHomeContent = () => {
    const main = document.querySelector('.main');
    main.innerHTML = "";

    const home = document.createElement('div');
    home.classList.add('home');
    home.classList.add('active');

    const homeImg = document.createElement('img');
    homeImg.src = HomeImage;
    homeImg.alt = 'Old aunt Peppa testimonial';

    home.appendChild(createP('Traditional Italian Cuisine'));
    home.appendChild(createP('since 1926'));
    home.appendChild(homeImg);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-box');

    const address = document.createElement('div')
    address.classList.add('address')
    address.innerHTML = `
      <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg></span>
      <p>3980 Norman Street<br>Los Angeles, CA 90017</p>`
    infoDiv.appendChild(address)

    const hours = document.createElement('div')
    hours.classList.add('hours')
    hours.innerHTML = `
      <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z"></path></svg></span>
      <p>
        <span>Mon-Sun: </span>8am-11pm
      </p>`
    infoDiv.appendChild(hours)

    home.appendChild(infoDiv);


    main.appendChild(home);

    // locaton/map
}

export default loadHomeContent