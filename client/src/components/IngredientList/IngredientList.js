import React from "react"
import Ingredient from "../Ingredient/Ingredient"

class IngredientList extends React.Component {
    createIngredient(ing) {
        return (
            <Ingredient key={ing.key} ingredient={ing.ingredient}/>
        )
    }

    render() {
        const ingList = this.props.ingList
        const ingItems = ingList.map(this.createIngredient)

        return (
            <div>
                {ingItems}
            </div>
        )
    }
}

export default IngredientList