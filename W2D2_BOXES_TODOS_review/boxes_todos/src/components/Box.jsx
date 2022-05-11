import React from 'react'

const Box = (props) => {
    return (
        <div
            style={{
                backgroundColor: props.box.color,
                height: "100px",
                width: "100px",
                display: "inline-block",
                color: "white",
                textDecoration: props.box.status ? "line-through" : "none"
            }}>
            {props.box.color} <br />
            <input type="checkbox"
                checked={props.box.status}
                onChange={() => props.updateBox(props.idx)}
            />
            <br />
            <button onClick={() => props.deleteBox(props.idx)}>delete</button>
        </div>
    )
}

export default Box

