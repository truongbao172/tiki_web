import React, { useState } from 'react'
import { useEffect } from 'react'
import "./styles.scss"
const FilterList = (props) => {
    const listFilter = [
        {
            id: "item1",
            title: 'CATEGORY',
            search: false,
            listItem: [
                { name: "Torches & Tabletop", id: "cate1" },
            ]

        },
        {
            id: "item2",
            title: 'PRODUCT TYPES',
            search: false,
            listItem: [
                { name: "Candle", id: "ptype1" },
                { name: "Kit/Combo", id: "ptype2" },
                { name: "Table Torch", id: "ptype3" },
                { name: "TIKI Torch", id: "ptype4" },
                { name: "Torch Fuel", id: "ptype5" },
            ]

        },
        {
            id: "item3",
            title: 'PACKS',
            search: true,
            listItem: [
                { name: "Kit/Combo", id: "parks1" },
                { name: "Multipack", id: "parks2" },
            ]

        },
        {
            id: "item4",
            title: 'COLOR',
            search: false,
            listItem: [
                { name: "null", id: "color1" },
            ]

        },
        {
            id: "item5",
            title: 'STYLE',
            search: true,
            listItem: [
                { name: "Americana", id: "style1" },
                { name: "Classic TIKI", id: "style2" },
                { name: "Coastal/Nautical", id: "style3" },
                { name: "Modern", id: "style4" },
                { name: "Rustic", id: "style5" },
                { name: "Traditional", id: "style6" },
                { name: "Tropical", id: "style7" },
            ]

        },
        {
            id: "item6",
            title: 'FEATURES',
            search: true,
            listItem: [
                { name: "Adjustable Flame", id: "features1" },
                { name: "Contains Citronella", id: "features2" },
                { name: "Convertible", id: "features3" },
                { name: "Deck Clamp Included", id: "features4" },
                { name: "Easy Installation", id: "features5" },
                { name: "Large Flame", id: "features6" },
                { name: "Less Soot & Smoke", id: "features7" },
                { name: "New", id: "features8" },
                { name: "Repels Mosquitoes", id: "features9" },
                { name: "Weather Resistant", id: "features10" },
                { name: "Wide Mouth Can", id: "features11" },
            ]
        },
        {
            id: "item8",
            title: 'MATERIAL',
            search: true,
            listItem: [
                { name: "Bamboo", id: "material1" },
                { name: "Glass", id: "material2" },
                { name: "Metal", id: "material3" },
                { name: "Resin", id: "material4" },
            ]
        },
        {
            id: "item9",
            title: 'PRICE',
            search: false,
            listItem: [
                { name: "null", id: "price1" },
            ]
        },
        {
            id: "item10",
            title: 'AVAILABILITY',
            search: false,
            listItem: [
                { name: "Available Online", id: "ava1" },
                { name: "In Store Only", id: "ava2" },
            ]
        },
        {
            id: "item11",
            title: 'CUSTOMER RATING',
            search: false,
            listItem: [
                { name: "★★★★ & up", id: "rating1" },
                { name: "★★★★★", id: "rating2" },
            ]
        },


    ]


    const [arrFilter, setArrFilter] = useState([])
    const [loading, setLoading] = useState(false)
    const searchFilter = (e) => {
        const data = e.target.id
        let dataLast = ''
        let temp = [...arrFilter]
        listFilter.map((item) => {
            return item.listItem.map((val) => {
                if (val.id === data) {
                    dataLast = { title: item.title, value: val.name, id: data }
                    temp.push(dataLast)
                }
            })
        })
        return setArrFilter(temp)
    }
    const handleDeteleFilter = (e) => {
        const index = e.target.id
        let deleteFilter = arrFilter.filter(item => item.id !== index)
        setArrFilter(deleteFilter)

    }
    const clearAll = () => {
        setArrFilter([])
    }

    const renderSeachFilter = () => {
        return <div>
            {
                arrFilter.map((item, index) => {
                    return <button key={index} className='search_filter_item'><i onClick={(e) => { handleDeteleFilter(e) }} className="fa-regular fa-x" id={item.id}></i><span>{item.title}: {item.value}</span></button>
                })
            }
            {arrFilter.length > 0 ? <span className='clearAll' onClick={() => { clearAll() }}>CLEAR ALL</span> : ""}
        </div>

    }
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
                                            return <li><span onClick={(e) => { searchFilter(e) }} id={value.id}>{value.name}</span></li>
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
                <div className='search_filter'>
                    <div className='search_filter_container'>
                        {renderSeachFilter()}
                    </div>
                </div>
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