import React from 'react'
import './Section9.css'
import img from '../../Assets/text.png'
import map from '../../Assets/map.png'


export default function Section9() {
    return (
        <div className='s-l-9'>
            <div className='l-s-t'>
                <img src={img} alt='...' />
                <img src={map} alt='' width={"315px"} height={"320px"} />
                <h2>Family Office Adresse <br />
                    <span>
                        Tölzerstraße 1, 82031 Grünwald bei München<br />

                        info@kueffner-group.com</span></h2>
            </div>
            <div className='s-l-9-2'>

                <div className="bg_img"></div>
                <div className="form_wrapper">
                    <div className="form_container">
                        <div className="title_container s-l-9-2">
                            <h3>Du hast Fragen, Anregungen oder möchtest geschäftlich <br />
                                mit der Küffner Group in Kontakt treten?</h3>
                            <span>Küffner Group in Kontakt treten?</span>
                        </div>
                        <form>
                            <div className="row clearfix">
                                <div className="col_half">
                                    <label>First name</label>
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                        <input type="text" name="first_name" placeholder="John" required />
                                    </div>
                                </div>
                                <div className="col_half">
                                    <label>Last name</label>
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                        <input type="text" name="last_name" placeholder="Doe" />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col_half">
                                    <label>Email</label>
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                        <input type="email" name="email" placeholder="johndoe@gmail.com" required />
                                    </div>
                                </div>
                                <div className="col_half">
                                    <label>Phone</label>
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                        <input type="tel" name="phone" placeholder="Phone no" pattern="[0-9]{10}" />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div>
                                    <label>Comments</label>
                                    <div className="textarea_field"> <span><i aria-hidden="true" className="fa fa-comment"></i></span>
                                        <textarea cols="46" rows="3" name="comments"></textarea>
                                    </div>
                                </div>
                            </div>
                            <input className="button" type="submit" value="Sumbit" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
