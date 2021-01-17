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

        this.handleClick = this.handleClick.bind(this)
        this.handleHover = this.handleHover.bind(this)
    }

    handleClick() {
        fetch(apiURL + "recipe/recipeInfo/" + this.props.id)
        .then(response => response.json())
        .then(data =>
            window.open(data.sourceUrl)
        )
    }

    handleHover(hoverState) {
        this.setState({ isHover: hoverState })
        if (!hoverState) {return;}

        fetch(apiURL + "recipe/recipeInfo/" + this.props.id)
        .then(response => response.json())
        .then(data => this.setState(prevState => {
            return {
                isHover: prevState.isHover,
                recipeData: data
            }
        }))
    }

    setOverlay() {
        const styles = {
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "#132024",
            width: "100%",
            height: "100%",
            color: "white"
        }

        return (
            <div style={styles} className="pt-3">
                <p>
                    
                </p>
            </div>
        )
    }

    render() {
        return (
            <div onClick={this.handleClick} onMouseEnter={() => this.handleHover(true)} onMouseLeave={() => this.handleHover(false)} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-0 mb-4 mt-5">
                <div role="button" tabIndex={0} className="ml-4 recipe-tile pt-4 pl-3 pr-3">
                    <h1>{this.props.title}</h1>
                    <br/>
                    {this.state.isHover ? this.setOverlay() : null}
                    <img src={this.props.url} className="img-fluid"/>
                </div>
            </div>
        )
    }
}

export default RecipeTile