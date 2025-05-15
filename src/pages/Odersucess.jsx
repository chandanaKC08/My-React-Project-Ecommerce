import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#2b2b2b", // Dark Gray background
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif"
        },
        title: {
            fontSize: "2.5rem",
            color: "#ff0000", // Red color for title
            marginBottom: "20px",
            textShadow: "0 0 10px #ff0000, 0 0 20px #ff0000" // Red glow effect
        },
        message: {
            fontSize: "1.2rem",
            color: "#ff7f00", // Orange color for message
            marginBottom: "30px",
            textShadow: "0 0 10px #ff7f00, 0 0 20px #ff7f00" // Orange glow effect
        },
        button: {
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#ffff00", // Yellow color for button
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.3s ease",
            textDecoration: "none",
            boxShadow: "0 0 15px #ffff00", // Yellow glow effect
        },
        buttonHover: {
            backgroundColor: "#00ff00", // Green on hover
            transform: "scale(1.05)", // Slight zoom on hover
            boxShadow: "0 0 25px #00ff00" // Green hover glow
        },
        rainbowText: {
            color: "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text", // For Safari support
            fontSize: "2.5rem",
            marginBottom: "20px",
            textAlign: "center",
            fontWeight: "bold"
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.rainbowText}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for musicshopping with us.</p>
            <a
                href="/"
                style={styles.button}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
                Go to my musicShop
            </a>
        </div>
    );
}
