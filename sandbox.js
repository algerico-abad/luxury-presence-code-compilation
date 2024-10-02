
    
let contactOverlay = document.getElementById("modal-global-contact-us");
let contactOverlayNodes = contactOverlay.querySelectorAll("h1, h2, h3, h4, a");
contactOverlayNodes.forEach(node => {
    /*Classes to remove*/  
    contactOverlayNodes.classList.remove("wow");
    contactOverlayNodes.classList.remove("animated");
    contactOverlayNodes.classList.remove("fadeInDown");
});