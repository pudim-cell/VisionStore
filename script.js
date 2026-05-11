const cart = [];
let total = 0;

function addToCart(product) {
  cart.push(product);

  const cartItems = document.getElementById('cart-items');
  const li = document.createElement('li');
  li.textContent = product;
  cartItems.appendChild(li);

  document.getElementById('cart-count').innerText = cart.length;

  total += 100;
  document.getElementById('total').innerText = `R$ ${total}`;
}

function sendMessage() {
  const input = document.getElementById('user-input');
  const text = input.value;

  if(text.trim() === '') return;

  const chatBox = document.getElementById('chat-box');

  const userMessage = document.createElement('div');
  userMessage.classList.add('message', 'user');
  userMessage.innerText = text;
  chatBox.appendChild(userMessage);

  let response = 'Não entendi sua pergunta.';

  const lower = text.toLowerCase();

  if(lower.includes('notebook')) {
    response = 'Recomendo o Notebook Gamer 🚀 Excelente para jogos e desempenho.';
  }
  else if(lower.includes('fone')) {
    response = 'O Fone Bluetooth possui ótima qualidade sonora 🎧';
  }
  else if(lower.includes('mouse')) {
    response = 'O Mouse Gamer é perfeito para alta performance 🖱️';
  }
  else if(lower.includes('celular')) {
    response = 'O Smartphone Pro possui câmera incrível 📱';
  }
  else if(lower.includes('barato')) {
    response = 'O produto mais barato disponível é o Fone Bluetooth.';
  }
  else if(lower.includes('melhor')) {
    response = 'O Notebook Gamer é o produto premium da loja ⭐';
  }

  setTimeout(() => {

    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    botMessage.innerText = response;
    chatBox.appendChild(botMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

  }, 700);

  input.value = '';
}

const search = document.getElementById('search');

search.addEventListener('keyup', () => {

  const value = search.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {

    const title = card.querySelector('h3').innerText.toLowerCase();

    if(title.includes(value)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }

});
