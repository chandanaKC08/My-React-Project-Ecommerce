import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const styles = {
        container: {
            maxWidth: "800px",
            margin: "50px auto",
            padding: "30px",
            boxShadow: "0 0 20px rgba(138, 43, 226, 0.7)",
            borderRadius: "15px",
            background: "linear-gradient(135deg, #2d006b, #7f00ff)",
            fontFamily: "'Orbitron', sans-serif",
            textAlign: "center",
            color: "#fff",
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
            marginBottom: "25px",
            boxShadow: "0 0 12px #00ffe0",
        },
        name: {
            fontSize: "2.5rem",
            marginBottom: "10px",
            color: "#e0b3ff",
            textShadow: "0 0 5px #b400ff",
        },
        description: {
            fontSize: "1.2rem",
            marginBottom: "15px",
            color: "#dcdcdc",
        },
        price: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#39ff14",
            marginBottom: "25px",
            textShadow: "0 0 5px #39ff14",
        },
        button: {
            padding: "14px 28px",
            fontSize: "1.1rem",
            backgroundColor: "#ff00ff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
