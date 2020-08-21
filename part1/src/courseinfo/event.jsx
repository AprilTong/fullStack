// react中状态不可直接修改
import React, { useState } from 'react';

const History = ({ allClicks }) => {
    if (allClicks.length === 0) {
        return <div>the app is used by pressing the buttons</div>;
    }
    return <div>buttons press History: {allClicks.join(' ')}</div>;
};

const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
};
const Event = () => {
    const [clicks, setClicks] = useState({
        left: 0,
        right: 0,
    });
    const [allClicks, setAll] = useState([]);
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'));
        setClicks({
            ...clicks,
            left: clicks.left + 1,
        });
    };
    const handleRightClick = () => {
        setAll(allClicks.concat('R'));
        setClicks({
            ...clicks,
            right: clicks.right + 1,
        });
    };
    const hello = (who) => {
        const handler = () => {
            console.log('hello', who);
        };
        return handler;
    };
    return (
        <div>
            {clicks.left}
            <Button text="left" onClick={handleLeftClick} />
            <Button text="right" onClick={handleRightClick} />
            <button onClick={hello('world')}>测试</button>
            {clicks.right}
            <History allClicks={allClicks} />
        </div>
    );
};

export default Event;
