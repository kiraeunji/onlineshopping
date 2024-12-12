import React from 'react';

const PerfumeProduct = ({ products }) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "22px", justifyContent: "center" }}>
            {products.map((product) => (
                <div
                    key={product.id}
                    style={{
                        border: "3px solid lightgray",
                        padding: "15px",
                        borderRadius: "10px",
                        width: "300px",
                        textAlign: "center",
                        marginTop:"50px",
                    }}
                >
                    <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{product.name}</h3>
                    <img
                        src={`http://localhost:8005${product.image}`}
                        alt={product.name}
                        style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            marginBottom: "10px",
                        }}
                    />
                    <p style={{ fontSize: "14px", color: "" }}>{product.description}</p>
                    <p style={{ fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                        {product.price}원
                    </p>
                </div>
            ))}
        </div>
    );
};

export default PerfumeProduct;
