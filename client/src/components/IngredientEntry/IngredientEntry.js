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
        
        e.preventDefault()
    }

    deleteIngredient(key) {
        const remainingIngs = this.state.ingredients.filter(ingredient => ingredient.key !== key)
        this.setState({ ingredients: remainingIngs })
    }

    handleClick(e) {
        e.preventDefault()
        let apiString = ""

        for (let i = 0; i < this.state.ingredients.length - 1; i++) {
            apiString += this.state.ingredients[i].ingredient + ",+"
        }

        apiString += this.state.ingredients[this.state.ingredients.length - 1].ingredient

    }

    render() {
        return (
            <div>
                <form onSubmit={this.addIngredient}>
                    <input ref={(i) => this.ingredientInput = i} className="ingredient-entry-box mr-3" placeholder="Enter ingredients"/>
                    <button type="submit" className="btn btn-success px-3">Add</button>
                </form>
                <IngredientList ingList={this.state.ingredients} delete={this.deleteIngredient}/>
                <button onClick={this.handleClick} type="submit" className="btn btn-lg btn-warning mt-5">Find Recipes</button>
            </div>
        )
    }
}
 
export default IngredientEntry

