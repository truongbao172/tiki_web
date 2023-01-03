import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"
const Beadcrumb = (props) => {
  const data = props.beadcrumbProp
  const renderBeadcrumb = () =>{
    return data.map((item, index)=>{
      return <li key={index} className="breadcrumb-item"><Link className={`${item.status === 'ACTIVE' ? "active" : "abc "}`} to={item.url}>{item.name}</Link></li>
      })
  }
  return (
    <div id='beadCrumb'>
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {/* <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">ACCOUNT SIGN IN</li> */}
               {renderBeadcrumb()}
            </ol>
      </nav>
    </div>
  )
}

export default Beadcrumb