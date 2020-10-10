import React, { useState } from 'react';

const Function = (props) => {
    // 事件处理程序不能是对函数的调用，必须是函数或对函数的引用
    const [value, setValue] = useState(10);
    const setToValue = (newValue) => () => {
        setValue(newValue);
    };
    const setToValue2 = (newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            {value}
            <button onClick={setToValue(1000)}>一千</button>
            <button onClick={setToValue(0)}>重置</button>
            <button onClick={() => setToValue2(value + 1)}>增加</button>
        </div>
    );
};

export default Function;
