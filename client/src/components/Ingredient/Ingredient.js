import React from "react"
import "./Ingredient.css"

class Ingredient extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="ingredient mr-3 mt-3">
                <span className="ingredient-wrapper">
                    <p style={{display: "inline-block"}} >{this.props.ingredient}</p>
                </span>
            </div>
        )
    }
}

export default Ingredient