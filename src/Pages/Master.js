import React from "react";
import data from "../Announces.json"
// import {Link} from 'react-router-dom'



function Master(props) {

    const content = props.content;
    
    return (
        
            <div  className="section">
                <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="booking-form" id="search-form">
                            <form>
                                {/* <div className="form-group">
                                    <div className="form-checkbox">
                                        <label for="roundtrip">
                                            <input type="radio" id="roundtrip" name="flight-type" />
                                            <span></span>Roundtrip
                                        </label>
                                        <label for="one-way">
                                            <input type="radio" id="one-way" name="flight-type" />
                                            <span></span>One way
                                        </label>
                                        <label for="multi-city">
                                            <input type="radio" id="multi-city" name="flight-type" />
                                            <span></span>Multi-City
                                        </label>
                                    </div>
                                </div> 
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Flying from</span>
                                            <input className="form-control" type="text" placeholder="City or airport" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Flyning to</span>
                                            <input className="form-control" type="text" placeholder="City or airport" />
                                        </div>
                                    </div>
                                </div> */}
                                <div className="row justify-content-end">
                                    <div className="col-md-3 justify-content-end " >
                                        <div className="form-group">
                                            <span className="form-label">Language</span>
                                            <select 
                                            className="form-control"
                                            value={props.language}
                                            onChange={props.handleChange}
                                            >
                                                <option value="eng">English</option>
                                                <option value="de">Deutsch</option>
                                                <option value="uz">Uzbek</option>
                                                <option value="tu">Türkçe</option>
                                            </select>
                                            <span className="select-arrow"></span>
                                        </div>
                                    </div> 
                                    
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <span className="form-label">{content.about}</span>
                                            <textarea className="form-control" type="text" required value={content.describe} rows="10" cols="100" id="form-describe"/>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-3">
                                        <div className="form-btn">
                                            <button className="submit-btn">Show flights</button>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <span className="form-label">Returning</span>
                                            <input className="form-control" type="date" required />
                                        </div>
                                    </div>  */}
                                    {/* <div className="col-md-2">
                                        <div className="form-group">
                                            <span className="form-label">Adults (18+)</span>
                                            <select className="form-control">
                                                <option></option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                            <span className="select-arrow"></span>
                                        </div>
                                    </div>  */}
                                    {/* <div className="col-md-2">
                                        <div className="form-group">
                                            <span className="form-label">Children (0-17)</span>
                                            <select className="form-control">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                            <span className="select-arrow"></span>
                                        </div>
                                    </div>  */}
                                </div>
                                <div className="row justify-content-end">
                                <div className="col-md-3 " >
                                    <div className="form-btn">
                                        <a href='https://heylink.me/uchar/'><input id="contact-button" className="submit-btn" type="button" value={content.contact}></input></a>
                                    </div>
                                </div> 
                                </div>
                            </form>
                        </div>
                        {data.map((uchar) => {
                            return (
                                <div className="booking-form" id="firstr" key={uchar.id}>
                                    <form >
                                        {/* <div className="form-group">
                                            <div className="form-checkbox">
                                                <label for="roundtrip">
                                                    <input type="radio" id="roundtrip" name="flight-type" />
                                                    <span></span>Roundtrip
                                                </label>
                                                <label for="one-way">
                                                    <input type="radio" id="one-way" name="flight-type" />
                                                    <span></span>One way
                                                </label>
                                                <label for="multi-city">
                                                    <input type="radio" id="multi-city" name="flight-type" /> 
                                                    <span></span>Multi-City
                                                </label>
                                            </div>
                                        </div>  */}
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <span className="form-label">{content.from}</span>
                                                    <input className="form-control" type="text" placeholder="Country" value={uchar.from} readOnly/>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <span className="form-label">{content.to}</span>
                                                    <input className="form-control" type="text" placeholder="City or airport" value={uchar.to} readOnly/>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <span className="form-label">{content.departing}</span>
                                                    <input className="form-control" type="text" required value={uchar.date +" "+ uchar.month + " " +uchar.year} readOnly />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <span className="form-label">Returning</span>
                                                    <input className="form-control" type="date" required />
                                                </div>
                                            </div> 
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <span className="form-label">Adults (18+)</span>
                                                    <select className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                    <span className="select-arrow"></span>
                                                </div>
                                            </div> 
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <span className="form-label">Children (0-17)</span>
                                                    <select className="form-control">
                                                        <option>0</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                    </select>
                                                    <span className="select-arrow"></span>
                                                </div>
                                            </div> 
                                        </div> */}
                                        <div className="row">
                                            {/* <div className="col-md-3">
                                                <div className="form-group">
                                                    <span className="form-label">Travel className</span>
                                                    <select className="form-control">
                                                        <option>Economy className</option>
                                                        <option>Business className</option>
                                                        <option>First className</option>
                                                    </select>
                                                    <span className="select-arrow"></span>
                                                </div>
                                            </div> */}
                                            {/* <div className="col-md-3">
                                                <div className="form-btn">
                                                    <button className="submit-btn">Show flights</button>
                                                </div>
                                            </div>  */}
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <span className="form-label">ID</span>
                                                    <input className="form-control" type="text" placeholder="City or airport" value={uchar.id}/>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <span className="form-label">{content.type}</span>
                                                    <input className="form-control" type="text" placeholder="City or airport" value={uchar.type}/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-btn">
                                                <a href='https://heylink.me/uchar/'><input id="write-button" className="submit-btn" type="button" value={content.write}></input></a>
                                                </div>
                                            </div> 
                                        </div>
                                    </form>
                            </div> 
                            )
                        })}
                        
                        
                    </div>
                </div>
                </div>
	        </div>
        
    );
}

export default Master;