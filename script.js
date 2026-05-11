const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
const cartCount = document.getElementById('cart-count');
const searchInput = document.getElementById('search');
const cards = document.querySelectorAll('.card');

let total = 0;
let quantity = 0;

function addToCart(name, price) {

  const item = document.createElement('li');
  item.innerText = `${name} - R$ ${price}`;

  cartItems.appendChild(item);

  total += price;
  quantity++;

  totalElement.innerText = `R$ ${total.toLocaleString('pt-BR')}`;
  cartCount.innerText = quantity;
}

searchInput.addEventListener('keyup', () => {

  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {

    const title = card.querySelector('h3').innerText.toLowerCase();

    if(title.includes(value)) {
      card.style.display = 'block';
    }
    else {
      card.style.display = 'none';
    }

  });

});

function sendMessage() {

  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');

  const text = input.value.trim();

  if(text === '') return;

  const userMessage = document.createElement('div');
  userMessage.classList.add('message', 'user-message');
  userMessage.innerText = text;

  chatBox.appendChild(userMessage);

  let response = 'Ainda estou aprendendo 🤖';

  const msg = text.toLowerCase();

  if(msg.includes('notebook')) {
    response = 'O Notebook Gamer é perfeito para alta performance 🚀';
  }
  else if(msg.includes('fone')) {
    response = 'O Fone Bluetooth possui excelente qualidade sonora 🎧';
  }
  else if(msg.includes('mouse')) {
    response = 'O Mouse Gamer oferece ótima precisão 🖱️';
}
