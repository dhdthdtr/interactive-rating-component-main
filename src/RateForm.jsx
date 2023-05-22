import React from "react";
import "./App.css"
import svg from "./images/icon-star.svg"

class RateForm extends React.Component{
    constructor(props){
        super(props);
        this.addClass = this.addClass.bind(this)
        this.state = {
            rate: ""
        }
    }
    
    addClass = (e) => {
        console.log(document.getElementById("rating-box").offsetHeight)
        var textlist = document.querySelectorAll("#rating-level p")
        for(var i = 0; i < textlist.length; i++){
            if(textlist[i].className === "clicked"){
            textlist[i].className = "";
            break;
            }
        }
        e.target.className = "clicked"
        console.log(document.querySelectorAll("#rating-level p"))
        this.setState({
            rate: e.target.innerHTML
        })
    }

    submit = () => {
        this.props.submitFunc(this.state.rate)
    }

    render() {
        return (
            <div id="rating-box">
                <div id="rating-icon">
                    <img src={svg} alt="star"/>
                </div>
                <h1 id="rating-title">How did we do?</h1>
                <p id="rating-description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div id="rating-level">
                    <p className="" onClick={this.addClass}>1</p>
                    <p className="" onClick={this.addClass}>2</p>
                    <p className="" onClick={this.addClass}>3</p>
                    <p className="" onClick={this.addClass}>4</p>
                    <p className="" onClick={this.addClass}>5</p>
                </div>
                <button id="submit" onClick={this.submit}>Submit</button>
            </div>
        )
    }
}

export default RateForm;