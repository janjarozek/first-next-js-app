import { withRouter } from 'next/router'
import React, { Component } from 'react'

class Offer extends Component {
    render() {
        const { router } = this.props;
        const {id} = router.query;
        console.log(router);
        return (
            <div>
                <h1>Twoja oferta {id}!</h1>
            </div>
        )
    }
}

export default withRouter(Offer);