import React from 'react'
import CardBuyer from '../CardBuyer'
import "./styles.scss"
const ListCardBuyer = () => {
    return (
            <div className='row justify-content-center list_content'>
                <div className='col-12 col-md-10'>
                    <CardBuyer />
                    <CardBuyer />
                    <CardBuyer />
                </div>
            </div>
    )
}

export default ListCardBuyer