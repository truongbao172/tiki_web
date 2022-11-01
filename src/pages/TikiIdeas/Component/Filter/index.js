import React from 'react'
import "./styles.scss"
const Filter = () => {
    return (
        <div id='filterIdeas' className='mt-4 mb-2'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="wdt_btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            EXPLORE BY TOPIC
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="togglec accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className='row py-4'>
                                <div className='col-md-3'>
                                    <div className="ideas-filters-section text-uppercase fw-bold">Space</div>
                                    <div className="ideas-filters-option ">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-backyard" defaultValue="Space - Backyard" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-backyard">Backyard</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-patio" defaultValue="Space - Patio" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-patio">Patio</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-tabletop" defaultValue="Space - Tabletop" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-tabletop">Tabletop</label>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-3'>
                                    <div className="ideas-filters-section text-uppercase fw-bold">OUTDOOR LIVING</div>
                                    <div className="ideas-filters-option ">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-backyard" defaultValue="Space - Backyard" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-backyard">Easy Entertaining</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-patio" defaultValue="Space - Patio" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-patio">Everyday</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-tabletop" defaultValue="Space - Tabletop" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-tabletop">Dining Al Fresco</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-patio" defaultValue="Space - Patio" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-patio">Holiday</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-tabletop" defaultValue="Space - Tabletop" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-tabletop">Camping</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="ideas-filters-section text-uppercase fw-bold">STYLE</div>
                                    <div className="ideas-filters-option ">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-backyard" defaultValue="Space - Backyard" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-backyard">Modern</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-patio" defaultValue="Space - Patio" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-patio">Tropical</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-tabletop" defaultValue="Space - Tabletop" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-tabletop">Classic TIKI</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-patio" defaultValue="Space - Patio" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-patio">Americana</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-tabletop" defaultValue="Space - Tabletop" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-tabletop">Traditional</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-patio" defaultValue="Space - Patio" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-patio">Coastal</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ideas-filters-option-space-tabletop" defaultValue="Space - Tabletop" />
                                            <label className="form-check-label" htmlFor="ideas-filters-option-space-tabletop">Bohemian</label>
                                        </div>
                                    </div>
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