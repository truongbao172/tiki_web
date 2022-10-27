import React from 'react'
import "./styles.scss"
const MyAccount = () => {
  return (
    <div className='myAccount'>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>

    </div>
  )
}

export default MyAccount