import React, {useState} from 'react';
import Button from "./components/Button";

const App = () => {
    const [count, setCount] = useState<number>(0);
    function handleClick() {
        // direction === 'plus' ? setCount(count +1) : setCount(count - 1);
        setCount(count +1)
    }
       return (
        <div>

        </div>
    );
};

export default App;