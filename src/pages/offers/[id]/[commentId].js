import Link from 'next/link'
import { withRouter } from 'next/router'
import React, { Component } from 'react'

class OfferComments extends Component {
    render() {
        const { router } = this.props;
        console.log(router);
        const { id,commentId } = router.query;
        return (
            <div>
                <h1>Komentarze do oferty: {id}!</h1>
                <h6><Link href="/">Home</Link>{router.asPath}</h6>
                <p>Comment id: {router.query.comments}</p>
                <p>Comment id: { commentId }</p>
            </div>
        )
    }
}

export default withRouter(OfferComments);