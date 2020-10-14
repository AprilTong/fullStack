// react中状态不可直接修改
import React from 'react';
import ReactDOM from 'react-dom';
import Unicafe from './unicafe/index';
import Anecdotes from './anecdotes/index';
const App = () => {
    return (
        <div>
            {/* <Unicafe></Unicafe> */}
            <Anecdotes></Anecdotes>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));
