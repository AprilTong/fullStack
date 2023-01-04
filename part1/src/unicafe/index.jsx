// react中状态不可直接修改
import React, { useState } from 'react'

// 按钮组件
const Statistic = (props) => {
    const { text, value } = props
    return (
        <p>
            {text}
            {value}
        </p>
    )
}
const Statistics = (props) => {
    const { good, neutral, bad } = props
    const all = good + neutral + bad
    if (all > 0) {
        return (
            <div>
                <h3>statistics</h3>
                <Statistic text="good" value={good}></Statistic>
                <Statistic text="neutral" value={neutral}></Statistic>
                <Statistic text="bad" value={bad}></Statistic>
                <p>all {all}</p>
                <p>average {(good * 1 + neutral * 0 + bad * -1) / all}</p>
                <p>positive {(good / all) * 100}%</p>
            </div>
        )
    } else {
        return (
            <div>
                <h3>statistics</h3>
                <p>No freeback given</p>
            </div>
        )
    }
}
const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const handleSetGood = (value) => {
        setGood(value)
    }
    const handleSetNeutral = (value) => {
        setNeutral(value)
    }
    const handleSetBad = (value) => {
        setBad(value)
    }
    return (
        <div>
            <h3>give freeback</h3>
            <button onClick={() => handleSetGood(good + 1)}>good</button>
            <button onClick={() => handleSetNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => handleSetBad(bad + 1)}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </div>
    )
}

export default Unicafe
