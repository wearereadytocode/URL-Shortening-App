import axios from 'axios'
import React, { useState } from 'react'
import './Link.css'
function Link() {
    const [userurl, setUserurl] = useState()
    const [surl, setSurl] = useState()
    console.log(userurl)
    const clicked = () =>{
        axios.get(`https://api.shrtco.de/v2/shorten?url=${userurl}`).then((Response)=>{
            console.log(Response.data.result.full_short_link3)
            setSurl(Response.data.result.full_short_link3)


        }).catch((Error)=>{
            console.log(Error.message)
        })
    }
    return (
        <div className="link">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {Error.message}
                        <input type="url" className="url" onChange={(e)=>setUserurl(e.target.value)} name="url" id="url" placeholder="add a link here...." />
                    </div>
                    <div className="col-md-3">
                        <button onClick={clicked}>Shorten it</button>
                    </div>
                </div>
               {surl && <div className="row results">
                    <div className="col-md-12">
                        <div className="s-url">
                           <a href={surl ? surl : ""}>{surl ? surl : "Loading..."}</a>
                        </div>
                        <button className="button">Copy</button>
                    </div>
                </div> }
                

            </div>
        </div>
    )
}

export default Link
