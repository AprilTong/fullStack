// react中状态不可直接修改
import React from 'react';
import ReactDOM from 'react-dom';
import Event from './courseinfo/event';

const App = () => {
    return (
        <div>
            <Event></Event>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));
