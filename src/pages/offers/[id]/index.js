import { Router, withRouter } from 'next/router'
import React, { Component } from 'react'

class Offer extends Component {
    constructor(props) {
        super(props);
        // const { router } = props;
    }
    render() {
        const { router } = this.props;
        console.log(router);
        return (
            <div>
                <h1>Twoja oferta!</h1>
                {/* <p>{router.pathname}</p> */}
            </div>
        )
    }
}

export default withRouter(Offer);