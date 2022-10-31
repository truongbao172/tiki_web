import React from 'react'
import CreateAccForm from '../../components/CreateAccForm'
import "./style.scss"
const CreateAccount = () => {
  return (
    <div id='createAcc'>
      <div className='creAcc_title text-center'>
          <h1>CREATE NEW CUSTOMER ACCOUNT</h1>
      </div>
      <div className='creAcc_form row'>
          <div className='col-md-6 col-12'>
            <CreateAccForm/>
          </div>
      </div>
    </div>
  )
}

export default CreateAccount