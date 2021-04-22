import React, { Component } from 'react'
import MetaTag from './MetaTags'
import Preview from './Preview'

export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            social : {
                google : 'false',
                facebook : 'false',
            }
        }

        this.metaHandler = this.metaHandler.bind(this);
    }

    metaHandler = (e) =>  {
        this.setState({
            social : {
                google: e.target.value
            }
        })
    }
    
    render() {
        return (
            <div>
                Main
                <MetaTag metatag={this.state.social} metaHandler={this.metaHandler} />
                <Preview metatag={this.state.social} />
            </div>
        )
    }
}
