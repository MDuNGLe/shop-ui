import { Catalog } from './components/catalog.js';
import { ProductAddForm } from './components/product-add-form.js';

window.addEventListener('load', () => {
  const catalog = new Catalog(document.getElementById('catalog'));
  const controller = new ProductAddForm(document.getElementById('product-add-form'));
});