// 在這裡使用 JavaScript 獲取和顯示產品列表
const productsSection = document.getElementById('products');

// 假設這是您的產品數據
const products = [
    { id: 1, name: '商品1', price: 50 },
    { id: 2, name: '商品2', price: 30 },
    { id: 3, name: '商品3', price: 70 },
];

// 顯示產品列表
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>價格: $${product.price}</p>
        <button onclick="addToCart(${product.id})">加入購物車</button>
    `;
    productsSection.appendChild(productElement);
});

// 添加到購物車的函數
function addToCart(productId) {
    // 在這裡處理添加到購物車的邏輯
    console.log(`已添加商品 ${productId} 到購物車`);
}
