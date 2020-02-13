import React from 'react'
import ReactDOM from 'react-dom'

const Nappula = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
          counter1: 0,
          counter2: 0,
          counter3: 0,
          summa: 0,
          keskiArvoSumma: 0
        }
    }

    asetaHyvaArvo = () => {
        return (
            this.setState({ counter1: this.state.counter1 + 1 }),
            this.setState({ summa: this.state.summa + 1 }),
            this.setState({ keskiArvoSumma: this.state.keskiArvoSumma + 1 })
        )
    }

    asetaNeutraaliArvo = () => {
        return (
            this.setState({ counter2: this.state.counter2 + 1 }),
            this.setState({ summa: this.state.summa + 1 })
        )
    }

    asetaHuonoArvo = () =>{
        return (
            this.setState({ counter3: this.state.counter3 + 1 }),
            this.setState({ summa: this.state.summa + 1 }),
            this.setState({ keskiArvoSumma: this.state.keskiArvoSumma - 1 })
        )
    }

    render() {

        return (
            <div>
                <h1>anna palautetta</h1>
                <Nappula onClick={this.asetaHyvaArvo} text='hyvä'></Nappula>
                <Nappula onClick={this.asetaNeutraaliArvo} text='neutraali'></Nappula>
                <Nappula onClick={this.asetaHuonoArvo} text='huono'></Nappula>
                
                <h1>statistiikka</h1>

                <p>hyvä {this.state.counter1}</p>
                <p>neutraali {this.state.counter2}</p>
                <p>huono {this.state.counter3}</p>
                
                <p>summa {this.state.summa}</p>

                <p>keskiarvo {this.state.keskiArvoSumma / this.state.summa}</p>
                <p>positiivisia </p>     
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)