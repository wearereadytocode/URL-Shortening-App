import React from 'react'
import './Link.css'
function Link() {
    return (
        <div className="link">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <input type="url" className="url" name="url" id="url" placeholder="add a link here...." />
                    </div>
                    <div className="col-md-3">
                        <button>Shorten it</button>
                    </div>
                </div>
                <div className="row results">
                    <div className="col-md-12">
                        <div className="s-url">
                            i am a link
                        </div>
                        <button className="button">Copy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Link
