import React from 'react'

export default function Preview(props) {
    const url = props.details.url;
    const channels = props.details.channels;
    const metadata = props.details.metadata;
    return (
        <div>
            {   
                metadata.title !='' && metadata.content !='' &&
                <AllMeta metadata={metadata} url={url} channels={channels} />
            }
            {
                channels.google && 
                <Google metadata={metadata} url={url} />
            }
            {
                channels.facebook && 
                <Facebook metadata={metadata} url={url} />
            } 
            {
                channels.twitter && 
                <Twitter metadata={metadata} url={url} />
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
                <h2>{metadata.title}</h2>
                <a href={url}>{url}</a>
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
                <a href={url}>{url}</a>
                <h2>{metadata.title}</h2>
                <p>{metadata.content}</p>
            </a>
        </div>
    )
}
const Twitter = (props) => {
    const url = props.url;
    const metadata = props.metadata;
    return (
        <div className="twitter">
            <a href={url}>
                <img src={metadata.image} width="200px" alt=""/>
                <h2>{metadata.title}</h2>
                <p>{metadata.content}</p>
                <a href={url}>{url}</a>
            </a>
        </div>
    )
}


const AllMeta = (props) => {
    const url = props.url;
    const channels = props.channels;
    const metadata = props.metadata;
    function copyCode(){
        const copyText = document.getElementById('metaTagCode').textContent;
        const textArea = document.createElement('textarea');
        textArea.textContent = copyText;
        document.getElementById('hidden_copy').append(textArea);
        textArea.select();
        document.execCommand('copy');

    }
    return (
        <div>
            <div className="modal-content">
                <div id="hidden_copy">

                </div>
                <pre class="modal__textarea" id="metaTagCode">
                    <code id="code" class="html js-code hljs xml">
                        <span class="hljs-comment">&lt;!-- Primary Meta Tags --&gt;</span>
                        <br />
                        <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>{metadata.title}<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
                        <br />
                        <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"title"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"{metadata.title}"</span>&gt;</span>
                        <br />
                        <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"description"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"{metadata.content}"</span>&gt;</span>
                        <br />
                        <br />

                        {
                            channels.facebook && metadata.title !='' && metadata.content !='' &&
                            <div>
                                <span class="hljs-comment">&lt;!-- Open Graph / Facebook --&gt;</span>
                                <br />
                                <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">property</span>=<span class="hljs-string">"og:type"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"website"</span>&gt;</span>
                                <br />
                                <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">property</span>=<span class="hljs-string">"og:url"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"{url}"</span>&gt;</span>
                                <br />
                                <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">property</span>=<span class="hljs-string">"og:title"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"{metadata.title}"</span>&gt;</span>
                                <br /><span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">property</span>=<span class="hljs-string">"og:description"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"{metadata.title}"</span>&gt;</span>
                                <br />
                                <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">property</span>=<span class="hljs-string">"og:image"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"{metadata.image}"</span>&gt;</span>
                                <br />
                                <br />
                            </div>
                        }
                        

                        {
                            channels.twitter && metadata.title !='' && metadata.content !='' &&
                            <div>
                                <span class="hljs-comment">&lt;!-- Twitter --&gt;</span>
                                <br />
                                <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">property</span>=<span class="hljs-string">"twitter:card"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"summary_large_image"</span>&gt;</span>
                                <br />
                                <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">property</span>=<span class="hljs-string">"twitter:url"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"{url}"</span>&gt;</span>
                                <br />
                                <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">property</span>=<span class="hljs-string">"twitter:title"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"{metadata.title}"</span>&gt;</span>
                                <br />
                                <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">property</span>=<span class="hljs-string">"twitter:description"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"{metadata.content}"</span>&gt;</span>
                                <br />
                                <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">property</span>=<span class="hljs-string">"twitter:image"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"{metadata.image}"</span>&gt;</span>
                                <br />
                            </div>
                        }
                        
                    </code>
                </pre>

                <button className="copy_code" onClick={copyCode}>Copy</button>
            </div>
        </div>
    )
}



