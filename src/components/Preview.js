import React from 'react'

export default function Preview(props) {
    const url = props.details.url;
    const channels = props.details.channels;
    const metadata = props.details.metadata;
    return (
        <div>
            {
                channels.google && 
                <Google metadata={metadata} url={url} />
            }
            {
                channels.facebook && 
                <Facebook metadata={metadata} url={url} />
            }
        </div>
    )
}

const Google = (props) => {
    const url = props.url;
    const metadata = props.metadata;
    return (
        <div className="google">
            <a href={url}>
                <img src={metadata.image} width="200px" alt=""/>
                <h2>{metadata.title}</h2>
                <p>{metadata.content}</p>
            </a>
        </div>
    )
}
const Facebook = (props) => {
    const url = props.url;
    const metadata = props.metadata;
    return (
        <div className="facebook">
            <a href={url}>
                <img src={metadata.image} width="200px" alt=""/>
                <h2>{metadata.title}</h2>
                <p>{metadata.content}</p>
            </a>
        </div>
    )
}
