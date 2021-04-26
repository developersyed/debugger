import React, { Component } from 'react'
import Channels from './Channels'
import Preview from './Preview'

export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            channels : {
                google :true,
                facebook :true,
            },
            metadata : {
                title: 'This is title',
                content: 'A short desc of content'
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
    
    render() {
        return (
            <div>
                Main
                <Channels channels={this.state.channels} channelHandler={this.channelHandler} />
                <Preview details={this.state} />
            </div>
        )
    }
}
