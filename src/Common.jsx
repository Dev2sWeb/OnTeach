import React from 'react'
import {Link} from 'react-router-dom'
function Common(props) {
    return (
        
        <div>
            <div>
                {/*  */}

                <section id="header" className="d-flex align-items-center">
                    <div className="container-fluid my-5">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 my-5">
                                        <div className="my-5">
                                            {/* <h1>Geer up your minds with <strong className="text-info">OnTeach</strong></h1> */}
                                            {/* <h2 className="my-3">We teach you in your way.</h2> */}
                                            {/* <button type="button" class="btn btn-outline-info my-3"> */}
                                                {/* <Link to="/service" className="nav-link" aria-current="page">Get Started</Link> */}
                                            {/* </button> */}
                                            <h1>{props.head}<strong className="text-info">OnTeach</strong></h1>
                                            <h2>{props.head2}</h2>
                                            <button type="button" class="btn btn-outline-info my-3">
                                                <Link to={props.visit} className="nav-link" aria-current="page">{props.btnname}</Link>
                                            </button>
                                        </div>
                                    </div>


                                    <div className="col-lg-6 order-1 order-lg-2">
                                        <img src="./logo512.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Common
