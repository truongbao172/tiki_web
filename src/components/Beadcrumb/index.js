import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"
function Beadcrumb() {
  return (
    <div id='beadCrumb'>
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">ACCOUNT SIGN IN</li>
            </ol>
      </nav>
    </div>
  )
}

export default Beadcrumb