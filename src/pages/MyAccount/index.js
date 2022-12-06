import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Beadcrumb from '../../components/Beadcrumb'
import chapcha from "../../assects/images/capcha.PNG"
import { useFormik } from "formik";
import "./styles.scss"
import { useDispatch } from 'react-redux';
import { LoginAction } from '../../redux/actions';
const MyAccount = () => {
    const beadcrumbProp = [{name:'HOME',status:'',url:'/'},{name:'ACCOUNT SIGN IN',status:'ACTIVE',url:'/customer'}]
    const dispatch = useDispatch();
   
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        const action = LoginAction(values);
        dispatch(action);
        console.log("values", values);
      },
    });
    return (
      <div id="myAccount">
        <div className='bcrumAcc'>
        <Beadcrumb beadcrumbProp={beadcrumbProp}/>
        </div>
        <div className='myAccount_title text-center mb-5'>
          <h1>ACCOUNT SIGN IN</h1>
        </div>
        <div className="main row">
          <div className="col-md-6 col-12">
            <div className="login-form">
              <form onSubmit={formik.handleSubmit}>
                <div className="login_form_tilte">
                  <h2 className='block-new-customer-heading'>SIGN IN</h2>
                  <p className='p_title'>If you have an account, sign in with your email address.</p>
                </div>
                <div className="form-group">
                  <label>Email <span className='doc'>*</span></label>
                  <input id="email" onChange={formik.handleChange} type="email" className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                  <label>Password <span className='doc'>*</span></label>
                  <input id="password" onChange={formik.handleChange} type="password" className="form-control" placeholder="" />
                </div>
                <div className='py-3'>
                  <img src={chapcha} alt="" />
                </div>
                <div className='btn_login d-flex align-items-center'>
                  <button type="submit" className="btn btn_oran" >SIGN IN</button>
                  <h5>Forgot Your Password?</h5>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-6 col-12'>
            <div>
              <h2 class="block-new-customer-heading" role="heading">Sign Up</h2>
            </div>
            <div className="block-content">
              <p className='p_title'>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
              <div className="actions-toolbar">
                <div className="primary">
                  <Link to="/customer/account/create/" className="btn btn_oran"><span>Create an Account</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MyAccount