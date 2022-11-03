import React from 'react'
import "./styles.scss"
const SortProduct = () => {
    return (
        <div className='sortProduct'>
            <div className='cout_list_card'>
                <span>ITEMS 1 TO 44</span>
            </div>
            <div className='sortBy'>
                <span>SORT BY</span>
                <div className="dropdown">
                    <span className="dropdown-toggle" type="button" id="dropdow_sort" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="dropdow_sort">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SortProduct