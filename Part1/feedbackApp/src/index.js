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
          hyvat: 0,
          neutraalit: 0,
          huonot: 0,
          summa: 0,
        }
    }

    laskeKeskiarvo = function(a, b) {
        if(b === 0) {
            return 0
        }
        return (a / b) /*tahan pitaisi lisata desimaalit*/
    }

    laskePositiiviset = function(a, b) {
        if(a === 0) {
            return 0
        }
        return (a / b) /*tahan pitaisi lisata desimaalinakyma*/
    }

    asetaArvo = (id) => () => {
        this.setState({ summa: this.state.summa + 1 })

        if(id === 'hyva') {
            const arvo = this.state.hyvat + 1
            return (
                this.setState({ hyvat: arvo })
            )
        }

        if(id === 'neutraali') {
            const arvo = this.state.neutraalit + 1
            return (
                this.setState({ neutraalit: arvo })
            )
        }

        if(id === 'huono') {
            const arvo = this.state.huonot + 1
            return (
                this.setState({ huonot: arvo })
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

                <p>hyvä {this.state.hyvat}</p>
                <p>neutraali {this.state.neutraalit}</p>
                <p>huono {this.state.huonot}</p>
                
                <p>keskiarvo {this.laskeKeskiarvo(this.state.hyvat - this.state.huonot, this.state.summa)}</p>
                
                <p>positiivisia {this.laskePositiiviset(this.state.hyvat, this.state.neutraalit + this.state.huonot)}</p>     
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)