async function fetchIceCreamData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/sagarriya31/website/refs/heads/main/web');
        const iceCreams = await response.json();
        createIceCreamCards(iceCreams);
    } catch (error) {
        console.error("Error fetching ice cream data:", error);
    }
}

function createIceCreamCards(iceCreams) {
    const container = document.getElementById('ice-cream-cards');
    container.innerHTML = '';

    iceCreams.forEach(iceCream => {
        const card = document.createElement('div');
        card.classList.add('ice-cream-card');

        const img = document.createElement('img');
        img.src = iceCream.image_closed;
        img.alt = `${iceCream.name} image`;
        card.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = iceCream.name;
        card.appendChild(name);

        const description = document.createElement('p');
        description.textContent = iceCream.description;
        card.appendChild(description);

        const counterContainer = document.createElement('div');
        counterContainer.classList.add('counter-container');

        const minusBtn = document.createElement('button');
        minusBtn.textContent = '-';
        minusBtn.classList.add('counter-btn');
        minusBtn.addEventListener('click', () => updateCounter(iceCream.name, -1));

        const counterValue = document.createElement('span');
        counterValue.textContent = '0';
        counterValue.classList.add('counter-value');
        counterValue.dataset.name = iceCream.name;

        const plusBtn = document.createElement('button');
        plusBtn.textContent = '+';
        plusBtn.classList.add('counter-btn');
        plusBtn.addEventListener('click', () => updateCounter(iceCream.name, 1));

        counterContainer.appendChild(minusBtn);
        counterContainer.appendChild(counterValue);
        counterContainer.appendChild(plusBtn);

        card.appendChild(counterContainer);
        container.appendChild(card);
    });
}

function updateCounter(name, change) {
    const counterValue = document.querySelector(`.counter-value[data-name="${name}"]`);
    let newValue = parseInt(counterValue.textContent) + change;
    newValue = Math.max(0, newValue);
    counterValue.textContent = newValue;

    showMessage(change > 0 ? `Added ${name}` : `Removed ${name}`);
    updateCart(name, newValue);
}

function showMessage(text) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.style.display = 'block';

    setTimeout(() => {
        message.style.display = 'none';
    }, 2000);
}

function updateCart(name, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (quantity > 0) {
        cart[name] = quantity;
    } else {
        delete cart[name];
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

fetchIceCreamData();