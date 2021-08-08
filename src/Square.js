import React from 'react'

class Square extends React.Component {
    constructor() {
        super()

        this.state = {
            squares: ["white", "white", "white", "white"]
        }
    }

    handleClick() {
        console.log("the button you are clicking works")
    }


    render() {
        return (
            <div>
                <ul className="djbooth">
                    <li className="box1"></li>
                    <li className="box2"></li>
                    <li className="box3"></li>
                    <li className="box4"></li>
                </ul>

                <div className="buttons">
                    <button onClick={this.handleClick}>Box One</button>
                    <button>Box Two</button>
                    <button>Box Three</button>
                    <button>Box Three</button>
                </div>

            </div>
        )
    }
}

export default Square
