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
                <span classname="dropdown">
                    <select id="sorter" data-role="sorter" className="sorter-options" data-acsb-navigable="true" data-acsb-now-navigable="true" aria-hidden="false" data-acsb-hidden="false" type="select-one" data-acsb-validation-uuid="sorter" data-acsb-field-visible="true" aria-label="Sort By" placeholder="Sort By" data-acsb-tooltip="Sort By">
                        <option value="position~asc" selected="selected">
                            Most Relevant </option>
                        <option value="name~asc">
                            Alphabetical (A-Z)</option>
                        <option value="name~desc">
                            Alphabetical (Z-A)</option>
                        <option value="price~asc">
                            Price (Low to High)</option>
                        <option value="price~desc">
                            Price (High to Low)</option>
                        <option value="new_arrivals~desc">
                            Newest </option>
                        <option value="top_seller~desc">
                            Best Selling </option>
                        <option value="bv_average_overall_rating~asc">
                            Top Rated</option>
                        <option value="bv_total_reviews~asc">
                            Most Reviewed  </option>
                    </select>
                </span>

            </div>
        </div>
    )
}

export default SortProduct