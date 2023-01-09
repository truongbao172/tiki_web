import React from 'react'
import Beadcrumb from '../../components/Beadcrumb'
import "./styles.scss"
const FAQs = () => {
    const beadcrumbProp = [
        { name: "HOME", status: "", url: "/" },
        { name: "FAQS", status: "ACTIVE", url: "/" },
    ];
  return (
    <div id='faq_page'>
        <div className="bcrum_faq">
                <Beadcrumb beadcrumbProp={beadcrumbProp} />
            </div>
    </div>
  )
}

export default FAQs