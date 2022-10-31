import React from 'react'
import "./styles.scss"
const Filter = () => {
    return (
        <div id='filterIdeas' className='my-5'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="wdt_btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            EXPLORE BY TOPIC
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className="ideas-filters-section text-uppercase fw-bold">Space</div>

                                </div>
                                <div className='col-md-3'>
                                    <div className="ideas-filters-section text-uppercase fw-bold">OUTDOOR LIVING</div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="ideas-filters-section text-uppercase fw-bold">STYLE</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter