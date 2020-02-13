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

    asetaArvo = (id) => () => {
        this.setState({ summa: this.state.summa + 1 })

        if(id === 'hyva') {
            const arvo = this.state.hyvaCounter + 1
            
            return (
                this.setState({ hyvaCounter: arvo}),
                this.setState({ keskiArvoSumma: this.state.keskiArvoSumma + 1 })
            )
        }

        if(id === 'neutraali') {
            const arvo = this.state.neutraaliCounter + 1
            return (
                this.setState({ neutraaliCounter: arvo})
            )
        }

        if(id === 'huono') {
            const arvo = this.state.huonoCounter + 1
            return (
                this.setState({ huonoCounter: arvo}),
                this.setState({ keskiArvoSumma: this.state.keskiArvoSumma - 1 })
            )
        }
    }

    render() {

        return (
            <div>
                <h1>anna palautetta</h1>
                <Nappula onClick={this.asetaArvo('hyva')} text='hyvä'></Nappula>
                <Nappula onClick={this.asetaArvo('neutraali')} text='neutraali'></Nappula>
                <Nappula onClick={this.asetaArvo('huono')} text='huono'></Nappula>
                
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