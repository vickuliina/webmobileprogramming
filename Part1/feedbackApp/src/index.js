import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const Statistics = ({ good, neutral, poor, sum, countAverage, countPositives}) => {
    if(sum === 0) {
        return <p>ei yhtään palautetta annettu</p>
    }
    else {
        return (
            <table>
                <Statistic text='hyvä' value={good}></Statistic>
                <Statistic text='neutraali' value={neutral}></Statistic>
                <Statistic text='huono' value={poor}></Statistic>

                <Statistic text='keskiarvo' value={countAverage(good - poor, sum)}></Statistic>
                <Statistic text='positiivisia' value={countPositives(good, sum)} text2='%'></Statistic>
            </table>
        )
    }
}


const Statistic = ({ text, value , text2 }) => (
    <tbody>
        <tr>
            <td>{text}</td>
            <td>{value} {text2}</td>
        </tr>
    </tbody>
)


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          good: 0,
          neutral: 0,
          poor: 0,
          sum: 0,
        }
    }

    countAverage = (a, b) => {
        if(b === 0) {
            return (0).toFixed(1)
        }
        return parseFloat(a / b).toFixed(1)
    }

    countPositives = (a, b) => {
        if(a === 0) {
            return (0).toFixed(1)
        }
        return (a*100 / b).toFixed(1)
    }

    setValue = (id) => () => {
        this.setState({ sum: this.state.sum + 1 })

        if(id === 'good') {
            const value = this.state.good + 1
            return (
                this.setState({ good: value })
            )
        }

        if(id === 'neutral') {
            const value = this.state.neutral + 1
            return (
                this.setState({ neutral: value })
            )
        }

        if(id === 'poor') {
            const value = this.state.poor + 1
            return (
                this.setState({ poor: value })
            )
        }
    }

    render() {

        return (
            <div>
                <h1>anna palautetta</h1>
                <Button onClick={this.setValue('good')} text='hyvä'></Button>
                <Button onClick={this.setValue('neutral')} text='neutraali'></Button>
                <Button onClick={this.setValue('poor')} text='huono'></Button>

                <h1>statistiikka</h1>
                <Statistics 
                    good={this.state.good}
                    neutral={this.state.neutral}
                    poor={this.state.poor}
                    sum={this.state.sum}
                    countAverage={this.countAverage}
                    countPositives={this.countPositives}
                ></Statistics> 
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))