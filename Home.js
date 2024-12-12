import React, { useState, useEffect } from 'react';
import PerfumeProduct from '../component/PerfumeProduct';
import Navbar from '../component/Navbar';
import Announcement from '../component/Announcement';


const fetchProducts = async () => {
const response = await fetch("http://localhost:8005/api/products");
const data = await response.json();
return data;
};

const Home = () => {
const [products, setProducts] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
const loadProducts = async () => {
try {
const data = await fetchProducts();
setProducts(data);
} catch (err) {
setError("상품 데이터를 불러오는 데 실패했습니다.");
}
};

loadProducts();
}, []);

if (error) {
return <p>{error}</p>;
}

return (
<div className="container">
<Announcement />
<Navbar />
<PerfumeProduct products={products} />
</div>
);
};

export default Home;