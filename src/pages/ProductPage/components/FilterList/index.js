import React from 'react'
import "./styles.scss"
const FilterList = () => {
    const listFilter = [
        {
            id:"item1",
            title: 'CATEGORY',
            listItem: [
                { name: "Torches & Tabletop" },
                { name: "Torches & Tabletop 1" },
                { name: "Torches & Tabletop 2" },
            ]

        },
        {
            id:"item2",
            title: 'PRODUCT TYPES',
            listItem: [
                { name: "Torches & Tabletop" },
                { name: "Torches & Tabletop 1" },
                { name: "Torches & Tabletop 2" },
            ]

        },
        {
            id:"item3",
            title: 'PACKS',
            listItem: [
                { name: "Torches & Tabletop" },
                { name: "Torches & Tabletop 1" },
                { name: "Torches & Tabletop 2" },
            ]

        },
        {
            id:"item4",
            title: 'COLOR',
            listItem: [
                { name: "Torches & Tabletop" },
                { name: "Torches & Tabletop 1" },
                { name: "Torches & Tabletop 2" },
            ]

        },
        {
            id:"item5",
            title: 'STYLE',
            listItem: [
                { name: "Torches & Tabletop" },
                { name: "Torches & Tabletop 1" },
                { name: "Torches & Tabletop 2" },
            ]

        },
        {
            id:"item6",
            title: 'FEATURES',
            listItem: [
                { name: "Torches & Tabletop" },
                { name: "Torches & Tabletop 1" },
                { name: "Torches & Tabletop 2" },
            ]
        },
        {
            id:"item8",
            title: 'PRICE',
            listItem: [
                { name: "Torches & Tabletop" },
                { name: "Torches & Tabletop 1" },
                { name: "Torches & Tabletop 2" },
            ]
        },
        {
            id:"item9",
            title: 'MATERIAL',
            listItem: [
                { name: "Torches & Tabletop" },
                { name: "Torches & Tabletop 1" },
                { name: "Torches & Tabletop 2" },
            ]
        },
        {
            id:"item10",
            title: 'AVAILABILITY',
            listItem: [
                { name: "Torches & Tabletop" },
                { name: "Torches & Tabletop 1" },
                { name: "Torches & Tabletop 2" },
            ]
        },
        {
            id:"item11",
            title: 'CUSTOMER RATING',
            listItem: [
                { name: "Torches & Tabletop" },
                { name: "Torches & Tabletop 1" },
                { name: "Torches & Tabletop 2" },
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