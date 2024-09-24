import { destroyProduct } from './destroy-product.js';

function ProductCard(product) {

  const article = document.createElement('article');
  article.id = `product-${product.id}`;

  const h1 = document.createElement('h1');
  h1.textContent = product.title;

  const price = document.createElement('p');
  price.textContent = product.price;

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.title;
  img.width = 300;
  img.height = 300;

  const button = document.createElement('button');
  button.textContent = 'Удалить';
  button.addEventListener('click', () => {
    destroyProduct(product);
  });

  article.appendChild(h1);
  article.appendChild(price);
  article.appendChild(img);
  article.appendChild(button);

  return article;
}

export { ProductCard };