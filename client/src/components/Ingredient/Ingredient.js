import React from "react"
import "./Ingredient.css"

function Ingredient(props) {
    return (
        <div className="ingredient mr-3">
            <span className="ingredient-wrapper">
                <h5 style={{display: "inline-block"}} >{props.ingredient}</h5>
                <button style={{display: "inline-block"}} type="button" className="btn btn-sm btn-transparent">&#10006;</button>
            </span>
        </div>
    )
}

export default Ingredient