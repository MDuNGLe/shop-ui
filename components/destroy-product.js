async function destroyProduct(product) {
    const uri = `https://fakestoreapi.com/products/${product.id}`

    const response = await fetch(uri, { method: 'DELETE' });

    if (response.ok) {
      console.log(`Продукт ${product.id} удалён.`);
      const article = document.getElementById(`product-${product.id}`);
      article.parentElement.removeChild(article);
    } else {
      alert(`Ошибка удаления продукта ${product.id}!`);
    }
  }

  export {
    destroyProduct
  };