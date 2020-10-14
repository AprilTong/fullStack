import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>;
const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0);
    const pointsArr = Array(anecdotes.length).fill(0);

    const [points, setPoints] = useState(pointsArr);
    const [mostVote, setMostVote] = useState(0);

    const random = (min, max) => {
        if (max < min) {
            [min, max] = [max, min];
        }
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const nextAnecdotes = () => {
        let r = selected;
        while (r === selected) {
            r = random(0, anecdotes.length - 1);
        }
        setSelected(r);
    };

    const voteAnecdote = () => {
        const copy = [...points];
        copy[selected] += 1;
        setPoints(copy);
        const max = Math.max(...copy);
        setMostVote(copy.findIndex((v) => v === max));
    };
    return (
        <>
            <h1>Anecdote of the day</h1>
            <div>{anecdotes[selected]}</div>
            <div>has {points[selected]} votes</div>
            <Button text="vote" handleClick={voteAnecdote} />
            <Button text="next anecdotes" handleClick={nextAnecdotes} />
            <h1>Anecdote with most votes</h1>
            <div>{anecdotes[mostVote]}</div>
            <div>has {points[mostVote]} votes</div>
        </>
    );
};

const Anecdotes = () => {
    const anecdotes = [
        'If it hurts, do it more often(如果很痛，请经常做)',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.（前90％的代码占开发时间的前90％...其余10％的代码占开发时间的90％。）',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.（任何傻瓜都可以编写计算机可以理解的代码。 好的程序员编写人类可以理解的代码。）',
        'Premature optimization is the root of all evil.（过早的优化是万恶之源。）',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    ];
    const points = { 0: 1, 1: 3, 2: 4, 3: 2 };
    const copy = { ...points };
    copy[2] += 1;
    return <App anecdotes={anecdotes} />;
};

export default Anecdotes;
