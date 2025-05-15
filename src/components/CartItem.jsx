function CartItems({ item, removeFromCart, updateQuantity }) {
    const containerStyle = {
        backgroundColor: "#1a001f", // dark violet-black for container
        color: "#ffffff",
        padding: "15px",
        margin: "15px auto",
        borderRadius: "10px",
        width: "280px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center"
    };

    const infoStyle = {
        fontSize: "18px",
        marginBottom: "10px",
        color: "white" // Keeping text white for better contrast on dark background
    };

    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "space-around",
        gap: "10px",
        flexWrap: "wrap"
    };

    const buttonStyle = {
        padding: "6px 12px",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease"
    };

    const plusBtn = {
        ...buttonStyle,
        backgroundColor: "#FF0000", // Red
        color: "#ffffff"
    };
    const minusBtn = {
        ...buttonStyle,
        backgroundColor: "#FF7F00", // Orange
        color: "#ffffff"
    };
    const removeBtn = {
        ...buttonStyle,
        backgroundColor: "#FFFF00", // Yellow
        color: "#1a001f"
    };
    const infoBtn = {
        ...buttonStyle,
        backgroundColor: "#00FF00", // Green
        color: "#ffffff"
    };
    const updateBtn = {
        ...buttonStyle,
        backgroundColor: "#0000FF", // Blue
        color
