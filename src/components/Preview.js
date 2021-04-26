import React from 'react'

export default function Preview(props) {
    const channels = props.details.channels;
    return (
        <div>
            Google: {channels.google ? 'true' : 'false'}<br/>
            Facebook: {channels.facebook ? 'true' : 'false'} 
        </div>
    )
}
