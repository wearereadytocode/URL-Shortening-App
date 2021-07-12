import React from 'react'
import rec from '../../../Images/icon-brand-recognition.svg'
import record from '../../../Images/icon-detailed-records.svg'
import custom from '../../../Images/icon-fully-customizable.svg'
import './Stat.css'
function Stat() {
    return (
        <div className="Stat">
            <div className="container text-center head">
                <h2>Advanced Statistics</h2>
                <p>
                    Track how your links are performing across with the web with <br /> our advanced statistics dashboard
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="illustration">
                                <img src={rec} alt="illustration" width="50px" />
                                
                            </div>
                            <div className="content">
                                <h4>Brand Recognition</h4>
                                <p>Boost your brand recognition with each click. Generic things don't mean a thing. Branded thing help instill confidence in your content</p>
                            </div>
                        </div>                       
                    </div>
                    <div className="col-md-4 ">
                        <div className="card second">
                        <div className="illustration">
                                <img src={record} alt="illustration" width="50px" />
                                
                            </div>
                            <div className="content">
                                <h4>Detailed Records</h4>
                                <p>Gain insight into who is clicking your links. knowing when and where people engage with your content helps inform better descicion.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card third">
                        <div className="illustration">
                                <img src={custom} alt="illustration" width="50px" />
                                
                            </div>
                            <div className="content">
                                <h4>Fully customizable</h4>
                                <p>Improve bran awareness and content discoverability through customisable links, supercharging audience engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stat
