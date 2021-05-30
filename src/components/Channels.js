import React from 'react'

export default function Channels(props) {
    return (
        <div>
            <ul style={{padding:0}}>
                <li onClick={(e) => props.channelHandler(e)} id="google">Google</li>
                <li onClick={(e) => props.channelHandler(e)} id="facebook">Facebook</li>
                <li onClick={(e) => props.channelHandler(e)} id="twitter">Twitter</li>
            </ul>
        </div>
    )
}

