import React, {FC, MouseEventHandler, useState} from 'react';

interface IProps {
count: number;
onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC <IProps> = ({onClick, count}) => {
    // const products = [
    //     {title: 'apple', isFruit: true, id:1},
    //     {title: 'carrot', isFruit: true, id:2},
    //     {title: 'orange', isFruit: false, id:3}
    // ];

   // const liItems = products.map(item =>
   //      <li key = {item.id}
   //          style={{color: item.isFruit ? 'magenta' : 'darkgreen'}} className={'fruits'}>
   //          {item.title}
   //      </li>
   //  );
    return (
        <div>
            <button onClick={onClick}>Clicked {count} times</button>
            {/*<button onClick={onClick}>Clicked {count} times</button>*/}
        </div>
    );
};

export default Button;