import React from 'react';

import Greeting from './Greeting'
import AgeCounter from './AgeCounter'

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            age: 4,
        }
    }

    greeting(name) {
        return "Welcome to my website " + name;
    }

    incrementAge() {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {

        return (
            <div>
                <Greeting name="Zitao" />
                <AgeCounter ageIncrFunc={() => this.incrementAge()} age={this.state.age} />
            </div>
        )

    }


}