import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <div>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                    <img src="./logo192.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.desc}</p>
                        <button type="button" class="btn btn-outline-primary my-3">
                            <Link to="/carddesc" className="nav-link" aria-current="page">Explore Now!</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
