import React, {useState} from 'react';
import Button from "./components/Button";

const App = () => {
    const [count, setCount] = useState(0);
    function handleClick() {
        // direction === 'plus' ? setCount(count +1) : setCount(count - 1);
        setCount(count +1)
    }
       return (
        <div>
            <Button count={count} onClick={handleClick}/>
        </div>
    );
};

export default App;