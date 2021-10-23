import React from 'react'
import Card from './Card'
function Service() {
    return (
        <div>
            <div><h1 className="text-center my-3">Our Specilas</h1></div>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <Card title="title1" desc="desc1"/>
                            <Card title="title1" desc="desc1"/>
                            <Card title="title1" desc="desc1"/>
                            <Card title="title1" desc="desc1"/>
                            <Card title="title1" desc="desc1"/>
                            <Card title="title1" desc="desc1"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
