import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Nappula = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const App = (props) => {

    const [ valueGood, setGood ] = useState(0)
    const [ valueNeutral, setNeutral ] = useState(0)
    const [ valuePoor, setPoor ] = useState(0)

    const setGoodValue = (value) => () => setGood(value)
    const setNeutralValue = (value) => () => setNeutral(value)
    const setPoorValue = (value) => () => setPoor(value)

    return (
        <div>
            <h1>anna palautetta</h1>

            <Nappula onClick={setGoodValue(valueGood + 1)} text='hyvä'></Nappula>
            <Nappula onClick={setNeutralValue(valueNeutral + 1)} text='nautraali'></Nappula>
            <Nappula onClick={setPoorValue(valuePoor + 1)} text='huono'></Nappula>
            <h1>statistiikka</h1>

            <p>hyvä {valueGood}</p>
            <p>neutraali {valueNeutral}</p> 
            <p>huono {valuePoor}</p>       
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)