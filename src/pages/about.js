import React, { Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "John"
        }
    }
    render() {
        return (
            <div>
                Hello Mr, {this.state.name}
            </div>
        )
    }
}
