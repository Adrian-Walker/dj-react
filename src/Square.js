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
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
                <div className="box4"></div>
                <button></button>
            </div>
        )
    }
}

export default Square
