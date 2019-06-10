import React from 'react';
import ClickCounter from './clickCounter';
import HoverCounter from './hoverCounter';

const Container = () => {  
    return (
        <div>
            <h1>Counter</h1>
            <ClickCounter />
            {/* <HoverCounter /> */}
        </div>
    );
};

export default Container;
