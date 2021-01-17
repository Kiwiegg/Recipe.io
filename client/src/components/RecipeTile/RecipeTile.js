import React from "react"
import "./RecipeTile.css"

const apiURL = "http://localhost:8888/"

class RecipeTile extends React.Component {
    constructor() {
        super()
        this.state = {
            isHover: false,
            recipeData: {}
        }
    }

    componentDidMount() {
        fetch(apiURL + "recipe/recipeInfo/" + this.props.id)
        .then(response => response.json())
        .then(data => this.setState(prevState => {
            return {
                isHover: prevState.isHover,
                recipeData: data
            }
        }))
    }
    
    handleClick() {
        fetch(apiURL + "recipe/recipeInfo/" + this.props.id)
        .then(response => response.json())
        .then(data =>
            window.open(data.sourceUrl)
        )
    }

    render() {
        return (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-0 mb-4 mt-5">
                <div role="button" tabIndex={0} className="ml-4 recipe-tile pt-4 pl-3 pr-3">
                    <h1>{this.props.title}</h1>
                    <br/>
                    <img src={this.props.url} className="img-fluid" alt="No"/>
                </div>
            </div>
        )
    }
}

export default RecipeTile