import React from 'react'
import "./styles.scss"
const FilterList = () => {
    const listFilter = [
        {
            id: "item1",
            title: 'CATEGORY',
            search: false,
            listItem: [
                { name: "Torches & Tabletop" },
            ]

        },
        {
            id: "item2",
            title: 'PRODUCT TYPES',
            search: false,
            listItem: [
                { name: "Candle" },
                { name: "Kit/Combo" },
                { name: "Table Torch" },
                { name: "TIKI Torch" },
                { name: "Torch Fuel" },
            ]

        },
        {
            id: "item3",
            title: 'PACKS',
            search: true,
            listItem: [
                { name: "Kit/Combo" },
                { name: "Multipack" },
            ]

        },
        {
            id: "item4",
            title: 'COLOR',
            search: false,
            listItem: [
                { name: "null" },
            ]

        },
        {
            id: "item5",
            title: 'STYLE',
            search: true,
            listItem: [
                { name: "Americana" },
                { name: "Classic TIKI" },
                { name: "Coastal/Nautical" },
                { name: "Modern" },
                { name: "Rustic" },
                { name: "Traditional" },
                { name: "Tropical" },
            ]

        },
        {
            id: "item6",
            title: 'FEATURES',
            search: true,
            listItem: [
                { name: "Adjustable Flame" },
                { name: "Contains Citronella" },
                { name: "Convertible" },
                { name: "Deck Clamp Included" },
                { name: "Easy Installation" },
                { name: "Large Flame" },
                { name: "Less Soot & Smoke" },
                { name: "New" },
                { name: "Repels Mosquitoes" },
                { name: "Weather Resistant" },
                { name: "Wide Mouth Can" },
            ]
        },
        {
            id: "item8",
            title: 'MATERIAL',
            search: true,
            listItem: [
                { name: "Bamboo" },
                { name: "Glass" },
                { name: "Metal" },
                { name: "Resin" },
            ]
        },
        {
            id: "item9",
            title: 'PRICE',
            search: false,
            listItem: [
                { name: "null" },
            ]
        },
        {
            id: "item10",
            title: 'AVAILABILITY',
            search: false,
            listItem: [
                { name: "Available Online" },
                { name: "In Store Only" },
            ]
        },
        {
            id: "item11",
            title: 'CUSTOMER RATING',
            search: false,
            listItem: [
                { name: "★★★★ & up" },
                { name: "★★★★★" },
            ]
        },


    ]
    const renderListFilter = () => {
        return listFilter.map((item, index) => {
            return <>
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`id${item.id}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.id}`} aria-expanded="true" aria-controls={item.id}>
                            {item.title}
                        </button>
                    </h2>
                    <div id={item.id} className="accordion-collapse collapse" aria-labelledby={`id${item.id}`} data-bs-parent={`#${item.id}`}>
                        <div className="accordion-body">
                            {item.search && <div className='searchFilter'>
                                <input type="text" className='inputSearch' placeholder="Search for options ..." title="Search for options ..." />
                            </div>}
                            <div className='list_item_filter'>
                                <ul>
                                    {
                                        item.listItem.map((value, index) => {
                                            return <li><span>{value.name}</span></li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        })
    }
    return (
        <div id='filterList'>
            <div className="accordion acc_filter" id="accordionFilter">
                {renderListFilter()}
            </div>
            <div className='wish'>
                <h2>MY WISH LIST</h2>
                <span>You have no items in your wish list.</span>
            </div>

        </div>
    )
}

export default FilterList