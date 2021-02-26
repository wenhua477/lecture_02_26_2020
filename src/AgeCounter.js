import React from 'react';


export default class AgeCounter extends React.Component {

    render() {

        return (
                <div onClick={() => this.props.ageIncrFunc()}>You are {this.props.age} years old</div>
        )

    }


}