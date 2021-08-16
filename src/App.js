import React from "react"
import Square from "./Square"

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            squares: ["blue", "white", "yellow", "green"]
        }

        this.smallTime = this.smallTime.bind(this)
        this.partyDj = this.partyDj.bind(this)
        this.professionalDj = this.professionalDj.bind(this)
        this.proDj2 = this.proDj2.bind(this)
    }

    smallTime() {
        this.setState(prevState => {
            if (prevState.squares[0] === "white") {
                return { squares: ["black", "black", "black", "black"] }
            } else {
                return { squares: ["white", "white", "white", "white"] }
            }
        })
    }
    partyDj() {
        this.setState(prevState => {
            const firstHalf = ["purple", "purple"]
            const secondHalf = prevState.squares.slice(2)
            return { squares: firstHalf.concat(secondHalf) }

        })
    }

    professionalDj() {
        this.setState(prevState => {
            const first = prevState.squares.findIndex(3)
            const second = ["blue"]
            return { squares: first.concat(second) }
        })
    }





    proDj2() {
        // this.setState(prevState => {

        // })
    }



    render() {
        const squareComp = this.state.squares.map(color => <Square color={color} />)

        return (

            <div>

                {squareComp}
                <div className="buttons">
                    <button className="small" onClick={this.smallTime}>Small Time</button>
                    <button className="party" onClick={this.partyDj}>Party DJ</button>
                    <button className="pro" onClick={this.professionalDj}>Professional DJ</button>
                    <button className="pro2" onClick={this.proDj2}>Pro Dj 2</button>
                    <br />
                </div>

            </div>
        )
    }
}

export default App
