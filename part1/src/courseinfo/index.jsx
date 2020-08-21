import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    );
};

const Part = (props) => {
    return (
        <>
            <p>
                {props.data.part}
                {props.data.exercises}
            </p>
        </>
    );
};

const Content = (props) => {
    return (
        <div>
            <Part data={props.parts[0]} />
            <Part data={props.parts[1]} />
            <Part data={props.parts[2]} />
        </div>
    );
};

const Total = (props) => {
    const total = props.parts.reduce((current, next) => {
        return current + next.exercises;
    }, 0);
    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    );
};
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                part: 'Fundamentals of React',
                exercises: 10,
            },
            {
                part: 'Using props to pass data',
                exercises: 7,
            },
            {
                part: 'State of a component',
                exercises: 14,
            },
        ],
    };
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};
