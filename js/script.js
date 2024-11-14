// carrusel
let currentImageIndex = 0;
let images = [
    "img/Primeraimagen.webp", 
    "img/segundaimg.jpg",
    "img/terceraimg.jpg"
];

// Elementos del carru
const carouselContainer = document.querySelector("main section div");
const carouselImage = document.createElement("img");
carouselImage.src = images[currentImageIndex];
carouselImage.classList.add("carousel-image"); 
carouselContainer.appendChild(carouselImage);


function showImage(index) {
    carouselImage.classList.add("fade-out");  

    setTimeout(() => {
        currentImageIndex = index;
        carouselImage.src = images[currentImageIndex];
        carouselImage.classList.remove("fade-out");
        carouselImage.classList.add("fade-in");

        setTimeout(() => {
            carouselImage.classList.remove("fade-in");
        }, 500); 
    }, 500); 
}

// flecha izquierda
const leftArrow = document.createElement("i");
leftArrow.className = "bx bx-chevron-left";
leftArrow.style.cursor = "pointer";
leftArrow.onclick = function() {
    leftArrow.classList.add("highlight");  
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    showImage(currentImageIndex);

    
    setTimeout(() => {
        leftArrow.classList.remove("highlight");
    }, 300);
};
carouselContainer.insertBefore(leftArrow, carouselImage);

// flech derec
const rightArrow = document.createElement("i");
rightArrow.className = "bx bx-chevron-right";
rightArrow.style.cursor = "pointer";
rightArrow.onclick = function() {
    rightArrow.classList.add("highlight");  
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);

    
    setTimeout(() => {
        rightArrow.classList.remove("highlight");
    }, 300);
};
carouselContainer.appendChild(rightArrow);



// 1. Valor Productos
const products = document.querySelectorAll(".cajas");
products.forEach((product) => {
    const stars = product.querySelectorAll(".pit i");
    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            stars.forEach((s, i) => {
                s.classList.toggle("bxs-star", i <= index);  
                s.classList.toggle("bx-star", i > index);    
            });
        });
    });
});

// 2. Carrio Compras 
let cartCount = 0;
const cartDisplay = document.createElement("div");
cartDisplay.id = "cart-count";
cartDisplay.style.position = "fixed";
cartDisplay.style.top = "10px";
cartDisplay.style.right = "10px";
cartDisplay.style.background = "rgb(7, 178, 221)";
cartDisplay.style.color = "white";
cartDisplay.style.padding = "10px";
cartDisplay.style.borderRadius = "5px";
cartDisplay.innerText = `Carrito: ${cartCount} productos`;
document.body.appendChild(cartDisplay);

products.forEach((product) => {
    const addButton = document.createElement("button");
    addButton.innerText = "Agregar al Carrito";
    addButton.style.display = "block";
    addButton.style.margin = "10px auto";
    addButton.onclick = () => {
        cartCount++;
        cartDisplay.innerText = `Carrito: ${cartCount} productos`;
        showNotification("Producto agregado al carrito");
    };
    product.appendChild(addButton);
});

// 3. Pop-Up (seria la promoción o descuen)
function showPopup() {
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.right = "20px";
    popup.style.width = "250px";
    popup.style.background = "rgb(255, 236, 179)";
    popup.style.padding = "15px";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
    popup.innerHTML = `
        <strong>Oferta Especial!</strong>
        <p>¡Obtén un 10% de descuento en tu próxima compra!</p>
    `;

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "Cerrar";
    closeBtn.style.marginTop = "10px";
    closeBtn.style.background = "rgb(7, 178, 221)";
    closeBtn.style.color = "white";
    closeBtn.style.padding = "5px";
    closeBtn.style.border = "none";
    closeBtn.style.borderRadius = "3px";
    closeBtn.onclick = () => document.body.removeChild(popup);
    popup.appendChild(closeBtn);

    document.body.appendChild(popup);

    
    setTimeout(() => {
        if (document.body.contains(popup)) document.body.removeChild(popup);
    }, 10000);
}


setTimeout(showPopup, 5000);


function showNotification(message) {
    const notification = document.createElement("div");
    notification.innerText = message;
    notification.style.position = "fixed";
    notification.style.bottom = "50px";
    notification.style.right = "20px";
    notification.style.background = "rgb(76, 175, 80)";
    notification.style.color = "white";
    notification.style.padding = "10px";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
    document.body.appendChild(notification);

    // Eliminar notificacion despues de 3 segund
    setTimeout(() => {
        if (document.body.contains(notification)) document.body.removeChild(notification);
    }, 3000);
}