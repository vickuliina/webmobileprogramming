import React from 'react'
import ReactDOM from 'react-dom'

const Nappula = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const App = () => {

    return (
        <div>
            <h1>anna palautetta</h1>
            <Nappula text='hyvä'></Nappula>
            <Nappula text='nautraali'></Nappula>
            <Nappula text='huono'></Nappula>
            <h1>statistiikka</h1>

            <p>hyvä 6</p>
            <p>neutraali 3</p> 
            <p>huono 2</p>       
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)