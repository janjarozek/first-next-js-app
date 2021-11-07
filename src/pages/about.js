import Link from 'next/link'
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
                <Link href="/">
                    Go back Home
                </Link>
                <p>Hello Mr, {this.state.name}</p>
            </div>
        )
    }
}
