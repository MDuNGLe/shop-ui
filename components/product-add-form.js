import { Catalog } from './catalog.js';

async function onSubmit(event) {
    event.preventDefault();

    const uri = event.target.action;
    const data = new FormData(event.target);

    const json = JSON.stringify(Object.fromEntries(data.entries()));

    const response = await fetch(uri, {
        body: json,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });

    if (response.ok) {
        const newProduct = await response.json();
        const catalogContainer = document.getElementById('catalog');
        const catalog = new Catalog(catalogContainer);
        catalog.addProduct(newProduct);

        alert('Запись добавлена');
    } else {
        alert('Ошибка!');
    }
}

function ProductAddForm(form) {
    form.addEventListener('submit', onSubmit);
}

export { ProductAddForm };
