const Greeting = (props) => {
    
    return (
        <h1 className="text-red-500 text-2xl">Hello, {props.name}! You are {props.age} years old.</h1>
    );

}

export default Greeting