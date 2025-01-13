function Button() {

    const handleClick = () => {
        console.log("Button clicked!");
    }

    return (
        <button
            style={{
                backgroundColor: "white",
                border: "1px solid black",
                padding: "4px 8px",
                cursor: "pointer",
                borderRadius: "4px",
            }}
            type="button"
            onMouseOver={handleClick}
        >
            Click me
        </button>
    );
}

export default Button