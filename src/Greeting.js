import React from 'react';


export default class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "purple",
            fontSize: 32
        }
    } 

    changeColor() {
        if (this.state.color === "purple") {
            this.setState({
                color: "red",
            })
        } else {
            this.setState({
                color: "purple"
            })
        }
    }

    render() {
        let name = "Hunter"
        if (this.props.name) {
            name = this.props.name
        }
        // console.log(this.props.name)
        // this.props.name

        // console.log(this.props.names)

        // console.log(this.props.lastName)

        return (
                <h1 onClick={() => this.changeColor()} style={{color: this.state.color}}>Welcome to my website, {name}</h1>

        )

    }


}