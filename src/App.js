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
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
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
        console.log("the button you are clicking works")
    }
    handleClick3() {
        console.log("the button you are clicking works")
    }
    handleClick4() {
        this.setState(prevState => {
            prevState.squares.map()
        })
    }



    render() {
        const squareComp = this.state.squares.map(color => <Square color={color} />)

        return (

            <div>

                {squareComp}
                <div className="buttons">
                    <button onClick={this.smallTime}>Small Time</button>
                    <button onClick={this.partyDj}>Party DJ</button>
                    <button onClick={this.handleClick3}>Box Three</button>
                    <button onClick={this.handleClick4}>Box Three</button>
                </div>

            </div>
        )
    }
}

export default App
