import React from "react"
import IngredientList from "../IngredientList/IngredientList"
import "./IngredientEntry.css"
 
class IngredientEntry extends React.Component {
    constructor() {
        super()
        this.state = {
            ingredients: []
        }

        this.addIngredient = this.addIngredient.bind(this)
    }
    
    addIngredient(e) {
        if (this.ingredientInput.value !== "") {
            console.log(this.ingredientInput.value)
            const newIngredient = {
                key: Date.now(),
                ingredient: this.ingredientInput.value
            }

            this.setState(prevState => {
                return {
                    ingredients: prevState.ingredients.concat(newIngredient)
                }
            })

            this.ingredientInput.value = ""
        }
        
        console.log(this.state.ingredients)
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addIngredient}>
                    <input ref={(i) => this.ingredientInput = i} className="ingredient-entry-box mr-3" placeholder="Enter ingredients"/>
                    <button type="submit" className="btn btn-success px-3">Add</button>
                </form>
                <IngredientList ingList={this.state.ingredients}/>
            </div>
        )
    }
}
 
export default IngredientEntry

