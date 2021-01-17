import React from "react"
import IngredientList from "../IngredientList/IngredientList"
import RecipeTile from "../RecipeTile/RecipeTile"
import "./IngredientEntry.css"

const apiURL = "http://localhost:8888/"


class IngredientEntry extends React.Component {
    constructor() {
        super()
        this.state = {
            ingredients: [],
            acWords: [],
            apiString: ""
        }

        this.addIngredient = this.addIngredient.bind(this)
        this.deleteIngredient = this.deleteIngredient.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.autocompleteHandler = this.autocompleteHandler.bind(this)
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
                    ingredients: prevState.ingredients.concat(newIngredient),
                    acWords: prevState.acWords,
                    apiString: prevState.apiString
                }
            })

            this.ingredientInput.value = ""
        }
        
        e.preventDefault()
    }

    deleteIngredient(key) {
        const remainingIngs = this.state.ingredients.filter(ingredient => ingredient.key !== key)
        this.setState(prevState => {return {ingredients: remainingIngs, acWords: prevState.acWords, apiString: prevState.apiString}})
    }

    handleClick(e) {
        e.preventDefault()
        if (this.state.ingredients.length === 0) {return;}
        let apiString = ""

        for (let i = 0; i < this.state.ingredients.length - 1; i++) {
            apiString += this.state.ingredients[i].ingredient + ",+"
        }

        apiString += this.state.ingredients[this.state.ingredients.length - 1].ingredient
        const response = fetch(apiURL + "recipe/searchRecipe/" + apiString + "/7")
        .then(response => response.text())
        .then(text => text ? JSON.parse(text):{})
        .then(data => console.log(data))
        .catch(Error => { console.log(Error) })

        //fetch(apiURL + "recipe/recipeInfo/" + response.)
    }

    handleChange(e) {
        e.preventDefault()
        if (this.ingredientInput.value.length === 0) {return;}
        const autocompleteQuery = apiURL + "ingredients/autocomplete/" + this.ingredientInput.value
        const autocomplete = fetch(autocompleteQuery)
        .then(response => response.json())
        .then(data => {
            this.setState(prevState => {
                return {
                    ingredients: prevState.ingredients,
                    acWords: data,
                    apiString: prevState.apiString
                }
            })
        })
    }

    autocompleteHandler(e) {
        e.preventDefault()
        this.ingredientInput.value = e.target.name
    }

    render() {
        const autocompleteButtons = this.state.acWords.map(acWord =>
            <button name={acWord} onClick={this.autocompleteHandler} className="btn btn-lg btn-light mr-5 mt-5">{acWord}</button>
        )

        return (
            <div>
                <div>
                    <form onSubmit={this.addIngredient}>
                        <input onChange={this.handleChange} ref={(i) => this.ingredientInput = i} className="ingredient-entry-box mr-3" placeholder="Enter ingredients"/>
                        <button type="submit" className="btn btn-success px-3">Add</button>
                    </form>
                    <IngredientList ingList={this.state.ingredients} delete={this.deleteIngredient}/>
                    <button onClick={this.handleClick} type="submit" className="btn btn-lg btn-warning mt-5">Find Recipes</button>
                    <br/>
                    {autocompleteButtons}
                </div>
                <div className="container-fluid">
                    <div className="row" style={{marginLeft: "0px", marginRight: "0px"}}>
                        <RecipeTile title="Test recipe"/>
                        <RecipeTile title="Test recipe"/>
                        <RecipeTile title="Test recipe"/>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default IngredientEntry

