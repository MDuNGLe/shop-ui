import { ProductCard } from './product-card.js';

async function getProducts() {
    const uri = 'https://fakestoreapi.com/products';
    const response = await fetch(uri);
    const products = await response.json();
    return products;
}

function Catalog(container) {
    this.loadProducts = async function() {
        const products = await getProducts();
        const articles = document.createDocumentFragment();

        for (const product of products) {
            const article = ProductCard(product);
            articles.appendChild(article);
        }

        container.appendChild(articles);
    };

    this.addProduct = function(product) {
        const article = ProductCard(product);
        container.appendChild(article);
    };

    this.loadProducts();
}
export { Catalog };