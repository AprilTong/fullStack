// import React from 'react';
// import ReactDOM from 'react-dom';

// const Header = (props) => {
//     return (
//         <>
//             <h1>{props.course}</h1>
//         </>
//     );
// };

// const Part = (props) => {
//     return (
//         <>
//             <p>
//                 {props.data.part}
//                 {props.data.exercises}
//             </p>
//         </>
//     );
// };

// const Content = (props) => {
//     return (
//         <div>
//             <Part data={props.parts[0]} />
//             <Part data={props.parts[1]} />
//             <Part data={props.parts[2]} />
//         </div>
//     );
// };

// const Total = (props) => {
//     const total = props.parts.reduce((current, next) => {
//         return current + next.exercises;
//     }, 0);
//     return (
//         <div>
//             <p>Number of exercises {total}</p>
//         </div>
//     );
// };
// const App = () => {
//     const course = {
//         name: 'Half Stack application development',
//         parts: [
//             {
//                 part: 'Fundamentals of React',
//                 exercises: 10,
//             },
//             {
//                 part: 'Using props to pass data',
//                 exercises: 7,
//             },
//             {
//                 part: 'State of a component',
//                 exercises: 14,
//             },
//         ],
//     };
//     return (
//         <div>
//             <Header course={course.name} />
//             <Content parts={course.parts} />
//             <Total parts={course.parts} />
//         </div>
//     );
// };
// ReactDOM.render(<App />, document.getElementById('root'));

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// const Display = ({ counter }) => <div>{counter}</div>;
// const Button = ({ handleClick, text }) => (
//     <button onClick={handleClick}>{text}</button>
// );
// const App = () => {
//     const [counter, setCounter] = useState(0);
//     const increaseByOne = () => setCounter(counter + 1);
//     const setZero = () => setCounter(0);
//     return (
//         <div>
//             <Display counter={counter} />
//             <Button handleClick={increaseByOne} text='plus' />
//             <Button handleClick={setZero} text='zero' />
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById('root'));

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [clicks, setClicks] = useState({
        left: 0,
        right: 0,
    });
    const handleLeftClick = () => {
        const newClicks = {
            ...clicks,
            left: clicks.left + 1,
        };
        setClicks(newClicks);
    };
    const handleRightClick = () => {
        const newClicks = {
            ...clicks,
            right: clicks.right + 1,
        };
        setClicks(newClicks);
    };
    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {clicks.right}
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));
