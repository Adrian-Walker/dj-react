import React from "react"

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            squares: ["white", "white", "white", "white"]
        }
    }


    render() {
        return (
            <div>
                <Square />
            </div>
        )
    }
}

export default App