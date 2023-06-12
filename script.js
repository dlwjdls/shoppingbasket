// JavaScript 코드
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const cartItems = document.getElementById('cart-items');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        const itemName = event.target.value;

        if (event.target.checked) {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(itemName));
            cartItems.appendChild(listItem);
        } else {
            const items = cartItems.getElementsByTagName('li');
            for (let i = 0; i < items.length; i++) {
                if (items[i].textContent === itemName) {
                    cartItems.removeChild(items[i]);
                    break;
                }
            }
        }
    });
});
