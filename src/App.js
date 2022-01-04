import React, { useState } from "react";
import Square from "./Square"
import './style.css'


function App() {
    const [squares, setSquares] = useState(["blue", "white", "yellow", "green"])

    /**
     * You will have one button that will change all four squares either black or white.
     * White if the first one is not white. Black if the first square is white.
     */
    const smallTime = () => {

        let newSquares = squares[0] !== "white" ? ["white", "white", "white", "white"] : ["black", "black", "black", "black"]
        setSquares(newSquares)
    }

    const partyDj = () => {
        const firstHalf = ["purple", "purple"];
        const secondHalf = squares.slice(2);
        setSquares(firstHalf.concat(secondHalf));
    }

    const profDj1 = () => {
        let newSquares = [squares[0], squares[1], "blue", squares[3]]
        setSquares(newSquares);
    }

    const proDj2 = () => {
        let newSquares = [squares[0], squares[1], squares[2], "blue"]
        setSquares(newSquares);
    }

    const squareComp = squares.map((color, index) => <Square key={index} color={color} />)

    return (
        <div className="buttons">

            {squareComp}

            <button className="small" onClick={smallTime}>Small Time DJ</button>
            <button className="party" onClick={partyDj}>Party DJ</button>
            <button className="pro" onClick={profDj1}>Professional DJ</button>
            <button className="pro2" onClick={proDj2}>Professional DJ 2</button>
            <br />
        </div>
    )

}







//     professionalDj() {
//         this.setState(prevState => {
//             const first = prevState.squares.slice(0, 2)
//             const third = prevState.squares.slice(3)
//             return { squares: [...first, "blue", ...third] }
//         })



// this.setState(prevState => {
//             const firstHalf = ["purple", "purple"]
//             const secondHalf = prevState.squares.slice(2)
//             return { squares: firstHalf.concat(secondHalf) }






// class App extends React.Component {
//     constructor() {
//         super()

//         this.state = {
//             squares: ["blue", "white", "yellow", "green"]
//         }

//         this.smallTime = this.smallTime.bind(this)
//         this.partyDj = this.partyDj.bind(this)
//         this.professionalDj = this.professionalDj.bind(this)
//         this.proDj2 = this.proDj2.bind(this)
//     }

//     smallTime() {
//         this.setState(prevState => {
//             if (prevState.squares[0] !== "white") {
//                 return { squares: ["white", "white", "white", "white"] }
//             } else if (prevState.squares[0] === "white") {
//                 return { squares: ["black", "black", "black", "black"] }
//             }
//         })
//     }
//     partyDj() {
//         this.setState(prevState => {
//             const firstHalf = ["purple", "purple"]
//             const secondHalf = prevState.squares.slice(2)
//             return { squares: firstHalf.concat(secondHalf) }

//         })
//     }

//     professionalDj() {
//         this.setState(prevState => {
//             const first = prevState.squares.slice(0, 2)
//             const third = prevState.squares.slice(3)
//             return { squares: [...first, "blue", ...third] }
//         })
//     }





//     proDj2() {
//         this.setState(prevState => {
//             const newArr = prevState.squares.slice(1)
//             return { squares: [...newArr, "blue"] }
//         })
//     }



//     render() {
//         const squareComp = this.state.squares.map(color => <Square color={color} />)

//         return (

//             <div>

//                 {squareComp}
//                 <div className="buttons">
//                     <button className="small" onClick={this.smallTime}>Small Time</button>
//                     <button className="party" onClick={this.partyDj}>Party DJ</button>
//                     <button className="pro" onClick={this.professionalDj}>Professional DJ</button>
//                     <button className="pro2" onClick={this.proDj2}>Pro Dj 2</button>
//                     <br />
//                 </div>

//             </div>
//         )
//     }
// }


export default App;
