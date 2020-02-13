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
          hyvaCounter: 0,
          neutraaliCounter: 0,
          huonoCounter: 0,
          summa: 0,
          keskiArvoSumma: 0,
          postiviivisetSumma: 0
        }
    }

    asetaHyvaArvo = () => {
        return (
            this.setState({ hyva: this.state.hyvaCounter + 1 }),
            this.setState({ summa: this.state.summa + 1 }),
            this.setState({ keskiArvoSumma: this.state.keskiArvoSumma + 1 })
        )
    }

    asetaNeutraaliArvo = () => {
        return (
            this.setState({ neutraaliCounter: this.state.neutraaliCounter + 1 }),
            this.setState({ summa: this.state.summa + 1 })
        )
    }

    asetaHuonoArvo = () =>{
        return (
            this.setState({ huonoCounter: this.state.huonoCounter + 1 }),
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

                <p>hyvä {this.state.hyvaCounter}</p>
                <p>neutraali {this.state.neutraaliCounter}</p>
                <p>huono {this.state.huonoCounter}</p>
                
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