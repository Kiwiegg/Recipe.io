import React from "react"
import Ingredient from "../Ingredient/Ingredient"
import "./IngredientEntry.css"
 
class IngredientEntry extends React.Component {
   constructor() {
       super()
       this.state = {
           ingredients: []
       }
 
       this.handleClick = this.handleClick.bind(this)
   }
 
   handleClick(e) {
       e.preventDefault()
       this.setState(prevState => {
           return {
               ingredients: [
                   ...prevState.ingredients,
                   <Ingredient
                       key={document.getElementById('ingredient-input').value}
                       ingredient={document.getElementById('ingredient-input').value}
                   />
               ]
           }
       })
   }
 
   render() {
       return (
           <div>
               <form>
                   <input id="ingredient-input" className="ingredient-entry-box mr-3" placeholder="Enter ingredients" type="text"/>
                   <button type="submit" onClick={this.handleClick} className="btn btn-success px-3">Add</button>
               </form>
               <div className="text-left">
                   {this.state.ingredients}
               </div>
           </div>
       )
   }
}
 
export default IngredientEntry

