import React, { Component } from 'react'
import Channels from './Channels'
import MetaData from './MetaData'
import Preview from './Preview'

export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            url : '',
            channels : {
                google :false,
                facebook :false,
            },
            metadata : {
                title: '',
                content: ''
            }
        }

        this.channelHandler = this.channelHandler.bind(this);
    }

    channelHandler = (e) =>  {
       const clickedChannel = e.target.id;
        this.setState({
            channels : {
                ...this.state.channels,
                [e.target.id] : !this.state.channels[clickedChannel]
            }
        });
    }
    metaDataHandler = (e) => {
        this.setState({
            metadata : {
                ...this.state.metadata,
                [e.target.name] : [e.target.value]
            }
        })
    }
    urlHandler = (e) => {
        this.setState({
            url: [e.target.value]
        })
    }
    
    render() {
        return (
            <div>
                Main
                <SiteURL url={this.state.url} urlHandler={this.urlHandler} />
                <Channels channels={this.state.channels} channelHandler={this.channelHandler} />
                <MetaData metaDataHandler={this.metaDataHandler} />
                <Preview details={this.state} />
            </div>
        )
    }
}

const SiteURL = (props) => {
    return(
        <div>
            <label htmlFor="url">URL</label>
            <input type="text" name="url" id="url" onChange={(e) => props.urlHandler(e)} placeholder="Insert your URL" />
        </div>
    )
}
