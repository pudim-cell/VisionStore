* {
  padding: 15px 35px;
  border: none;
  border-radius: 12px;
  background: #00bfff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.hero-content button:hover {
  transform: scale(1.05);
}

.search-container {
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.search-container input {
  width: 100%;
  max-width: 700px;
  padding: 16px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
}

.products {
  padding: 20px 50px 80px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.card {
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);

  transition: 0.3s;
}

.card:hover {
  transform: translateY(-8px);
}

.card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  margin-bottom: 10px;
}

.price {
  color: #00bfff;
  font-weight: 700;
  margin-bottom: 15px;
}

.card-content button {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: #00bfff;
  color: white;
  cursor: pointer;
}

.ai-section,
.cart-section {
  padding: 80px 20px;
}

.ai-section h2,
.cart-section h2 {
  text-align: center;
}
