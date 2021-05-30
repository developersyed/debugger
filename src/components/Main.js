import React, { Component } from 'react'
import Channels from './Channels'
import MetaData from './MetaData'
import Preview from './Preview'

export default class Main extends Component {
    constructor(props) {
        super(props)

        
    
        this.state = {
            apiResponse: '',

            url : '',
            channels : {
                google :false,
                facebook :false,
            },
            metadata : {
                title: '',
                content: '',
                image : null
            },
            error : null
        }

        this.channelHandler = this.channelHandler.bind(this);
    }

    
    
    callAPI() {
        fetch("http://localhost:9000/testAPI", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(res => {
            // fetch success
            this.setState({
                apiResponse : res.data
            }) // pass an object receive from server into setData function
         });
         console.log(this.state.apiResponse);
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
        // const img = URL.createObjectURL(e.target.file[0]);
        
        if(e.target.name === 'image'){
            this.setState({
                metadata : {
                    ...this.state.metadata,
                    image : URL.createObjectURL(e.target.files[0])
                }
            })
        } else {
            this.setState({
                metadata : {
                    ...this.state.metadata,
                    [e.target.name] : [e.target.value],
            
                }
            });
        }

    }
    // componentWillMount(){
    //     this.metaDataHandler();
    // }

    
    
    urlHandler = (e) => {
        this.setState({
            url : e.target.value
        });
    }
    
    render() {
        return (
            <div>
                Main
                <SiteURL url={this.state.url} urlHandler={this.urlHandler} />
                <Channels channels={this.state.channels} channelHandler={this.channelHandler} />
                <MetaData metaDataHandler={this.metaDataHandler} />
                <Preview details={this.state} />
                <p>{this.state.apiResponse}</p>
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
