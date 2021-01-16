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
        this.deleteIngredient = this.deleteIngredient.bind(this)
        this.handleClick = this.handleClick.bind(this)
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

    deleteIngredient(key) {
        const remainingIngs = this.state.ingredients.filter(ingredient => ingredient.key !== key)
        this.setState({ ingredients: remainingIngs })
    }

    handleClick(e) {
        e.preventDefault()
        console.log(this.state.ingredients)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addIngredient}>
                    <input ref={(i) => this.ingredientInput = i} className="ingredient-entry-box mr-3" placeholder="Enter ingredients"/>
                    <button type="submit" className="btn btn-success px-3">Add</button>
                </form>
                <IngredientList ingList={this.state.ingredients} delete={this.deleteIngredient}/>
            </div>
        )
    }
}
 
export default IngredientEntry

