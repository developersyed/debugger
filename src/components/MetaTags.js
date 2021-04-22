import React from 'react'

export default function MetaTags(props) {
    return (
        <div>
            <ul>
                <li onClick={(e) => props.metaHandler(e)} value="google" name="google">Google</li>
                <li onClick={props.metaHandler} name="facebook">Facebook</li>
            </ul>
        </div>
    )
}

