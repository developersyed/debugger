import React from 'react'

export default function Preview(props) {
    return (
        <div>
            {props.metatag.google} <br/>
            {props.metatag.facebook}
        </div>
    )
}
