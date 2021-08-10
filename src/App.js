import React from "react"
import Square from "./Square"

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            squares: ["blue", "white", "red", "green"]
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
    }

    handleClick() {
        console.log("the button you are clicking works")
    }
    handleClick2() {
        console.log("the button you are clicking works")
    }
    handleClick3() {
        console.log("the button you are clicking works")
    }
    handleClick4() {
        this.state.squares[3]
    }



    render() {
        return (
            <div>
                <Square />
                <Square />
                <Square />
                <Square />
                <div className="buttons">
                    <button onClick={this.handleClick}>Box One</button>
                    <button onClick={this.handleClick2}>Box Two</button>
                    <button onClick={this.handleClick3}>Box Three</button>
                    <button onClick={this.handleClick4}>Box Three</button>
                </div>

            </div>
        )
    }
}

export default App
