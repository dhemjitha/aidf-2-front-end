function Button(props) {

    

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
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button