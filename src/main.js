import './main.scss';
import menu from './menu.json';
import './assets/fonts/Marcheile-Bold-Condensed.woff';
import './assets/fonts/Marcheile-Bold-Condensed.woff2';
/* DO NOT EDIT ABOVE THIS LINE. You can start editing here. */

document.addEventListener('DOMContentLoaded', () => {
    fetch("./src/menu.json")
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById('menuList');
            
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('menu-category');
            
            const itemList = document.createElement('ul');
            
            data.menuList.forEach(item => {
                const itemElement = document.createElement('li');
                itemElement.classList.add('menu-item');
                
                const itemName = document.createElement('h3');
                itemName.classList.add('menu-item-name');
                itemName.textContent = `${item.menuName}`;

                const itemPrice = document.createElement('span');
                itemPrice.classList.add('menu-item-price');
                itemPrice.textContent = `$ ${item.menuPrice.toFixed(2)}`;

                const itemQuantityLabel = document.createElement('label');
                itemQuantityLabel.classList.add('menu-item-quantity-label');
                itemQuantityLabel.textContent = 'Add ';

                const itemQuantityInput = document.createElement('input');
                itemQuantityInput.classList.add('menu-item-quantity');
                itemQuantityInput.type = 'number';
                itemQuantityInput.min = '0';
                itemQuantityInput.value = '0';
                itemQuantityInput.dataset.price = item.menuPrice;

                const itemDescription = document.createElement('p');
                itemDescription.classList.add('menu-item-description');
                itemDescription.textContent = item.menuDescription;

                itemElement.appendChild(itemName);
                itemName.appendChild(itemPrice);
                itemElement.appendChild(itemQuantityLabel);
                itemQuantityLabel.appendChild(itemQuantityInput);
                itemElement.appendChild(itemDescription);
                itemList.appendChild(itemElement);
            });
            
            categoryDiv.appendChild(itemList);
            menuContainer.appendChild(categoryDiv);

            const totalAmountDiv = document.createElement('div');
            totalAmountDiv.classList.add('total-amount');
            const totalAmountLabel = document.createElement('span');
            totalAmountLabel.textContent = 'Total: $';
            const totalAmountValue = document.createElement('span');
            totalAmountValue.id = 'totalAmountValue';
            totalAmountValue.textContent = '0.00';
            totalAmountDiv.appendChild(totalAmountLabel);
            totalAmountDiv.appendChild(totalAmountValue);
            menuContainer.appendChild(totalAmountDiv);

            const quantityInputs = document.querySelectorAll('.menu-item-quantity');
            quantityInputs.forEach(input => {
                input.addEventListener('input', updateTotalAmount);
            });

            function updateTotalAmount() {
                let total = 0;
                quantityInputs.forEach(input => {
                    const quantity = parseInt(input.value, 10);
                    const price = parseFloat(input.dataset.price);
                    if (!isNaN(quantity) && !isNaN(price)) {
                        total += quantity * price;
                    }
                });
                totalAmountValue.textContent = total.toFixed(2);
            }
        })
        .catch(error => console.error('Error fetching the menu:', error));
});

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));

   carouselItems.forEach(item => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });

   carousel.style.width = `calc(50% * ${carouselItems.length * 1})`;
   carousel.style.animationPlayState = 'running';
 });

    window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
    });
  