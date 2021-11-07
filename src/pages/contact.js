import Link from 'next/link'
import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Link href="/">
                    Go back Home
                </Link>
                <h1>Contact</h1>
            </div>
        )
    }
}
