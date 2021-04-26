import React from 'react'

export default function Preview(props) {
    const channels = props.details.channels;
    return (
        <div>
            {
                channels.google && 
                <Google />
            }
            {
                channels.facebook && 
                <Facebook />
            }
        </div>
    )
}

const Google = () => {
    return (
        <div className="google">
            Google
        </div>
    )
}
const Facebook = () => {
    return (
        <div className="google">
            Facebook
        </div>
    )
}
