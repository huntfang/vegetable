const express = require('express');
const app = express();
const port = 3000;

// 假設這是您的產品數據
const products = [
    { id: 1, name: '商品1', price: 50 },
    { id: 2, name: '商品2', price: 30 },
    { id: 3, name: '商品3', price: 70 },
];

app.use(express.static('public'));

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
