const loadContactsContent = () => {
  const main = document.querySelector('.main');
  main.innerHTML = "";

  // Creazione del contenitore principale dei contatti
  const contactsDiv = document.createElement('div');
  contactsDiv.classList.add('contacts'); 
  
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info-box');


  // Informazioni sul telefono
  const phone = document.createElement('div');
  phone.classList.add('phone');
  phone.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
    </svg>
    <p>(323) 123-4567</p>`;
  infoDiv.appendChild(phone);

  // Informazioni sull'email
  const mail = document.createElement('div');
  mail.classList.add('mail');
  mail.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
    </svg>
    <p>info@oldauntpeppa.com</p>`;
  infoDiv.appendChild(mail);

  contactsDiv.appendChild(infoDiv);

  // Creazione del contenitore per la mappa
  const mapContainer = document.createElement('div');
  mapContainer.classList.add('map-container'); // Assicurati di avere questo stile nel CSS

  // Creazione dell'iframe della mappa
  const mapsIframe = document.createElement('iframe');

  mapsIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.668903659406!2d-118.48220542330107!3d34.0780008731474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bcce934068ad%3A0x1af5715e00db6a4d!2sNorman%20Pl%2C%20Los%20Angeles%2C%20CA%2090049%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1727107038526!5m2!1sit!2sit";
  mapsIframe.width = "600";
  mapsIframe.height = "450";
  mapsIframe.style.border = "0";
  mapsIframe.allowFullscreen = "";
  mapsIframe.loading = "lazy";
  mapsIframe.referrerPolicy = "no-referrer-when-downgrade";

  // Aggiunta dell'iframe al contenitore della mappa
  mapContainer.appendChild(mapsIframe);
  contactsDiv.appendChild(mapContainer);


  main.appendChild(contactsDiv);
}

export default loadContactsContent;
