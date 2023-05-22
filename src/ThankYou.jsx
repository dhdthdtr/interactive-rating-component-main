import React from "react";
import "./App.css"
import thankSVG from "./images/illustration-thank-you.svg"

function ThankYou(props) {
    return (
        <div id="thanks-box">
            <div id="thanks-icon">
                <img src={thankSVG} alt="svg" />
            </div>
            <p id="thanks-result">You selected {props.rate === '' ? '0' : props.rate} out of 5</p>
            <h1 id="thanks-title">Thank you!</h1>
            <p id="thanks-description">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    )
}

export default ThankYou