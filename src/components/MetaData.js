import React from 'react'

function MetaData(props) {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={(e) => props.metaDataHandler(e)} />
                    <label htmlFor="content">Content</label>
                    <input type="text" name="content" onChange={(e) => props.metaDataHandler(e)} />
                </div>
            </form>
        </div>
    )
}

export default MetaData
