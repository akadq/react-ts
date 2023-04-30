import React, {useState} from 'react';
import Button from "./components/Button";
import UserForm from "./components/UserForm";
import UserPage from "./pages/UserPage";

const App = () => {
    const [count, setCount] = useState<number>(0);
    function handleClick() {
        // direction === 'plus' ? setCount(count +1) : setCount(count - 1);
        setCount(count +1)
    }

    return (
        <div>
            <UserPage/>
        </div>
    );
};

export default App;