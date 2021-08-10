import React from 'react'





function Square(props) {

    // const colors = Square.map(color => color = props.square)

    return (
        <div className="box" style={{ backgroundColor: props.colors }}>
            {/* {colors} */}

        </div>
    )
}


export default Square
