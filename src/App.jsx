// import Button from "./Button";
import { Button } from "./components/ui/button";
import { Switch } from "./components/ui/switch";
import Greeting from "./Greeting";

const App = () => {

    const name = "Dulran";
    const age = 19;

    const handleClick = () => {
        console.log("Button clicked!");
    }

    return (
        <>
        <Greeting name={name} age={age}/>
        {/* <Button onClick={handleClick}>Click me!</Button> */}
        <Button>Click me!</Button>
        <Switch/>
        </>
    );

}

export default App;