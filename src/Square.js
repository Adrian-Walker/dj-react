import React from 'react'

class Square extends React.Component {
    constructor() {
        super()

        this.state = {
            squares: ["white", "white", "white", "white"]
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.squares}</h1>
                <button></button>
            </div>
        )
    }
}

export default Square
