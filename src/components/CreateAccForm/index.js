import { Field, Form, Formik, useFormik } from 'formik';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CreatAccountAction } from "../../redux/actions/index"
import chapcha from "../../assects/images/capcha.PNG"
import "./styles.scss"
function CreateAccForm() {
    const listInterests = ["Baby", "Cooking", "Crafting", "Decorating", "Electronics", "Fashion & Style", "Interior Design & Furniture", "Games", "Lighting", "Music", "Outdoors", "Parenting", "Pets", "Sports", "Travel", "Arts & Culture", "Movies & TV", "Food & Wine", "Health & Fitness", "Volunteering",];
    const listClassify = ["Traditional",
        "Rustic",
        "Modern",
        "Contemporary",
        "Coastal",
        "Vintage",
        "Bohemian"]
    const listRelate = ["Occasional Party Thrower",
        "Frequent Entertainer",
        "Backyard Griller",
        "Family Oriented",
        "Backyard Enthusiast",
        "Gardener"]

    const listSources = ["Search engines/apps (Google, Bing, Yahoo, etc.)",
        "Retailers' websites/apps (i.e. Amazon.com, Walmart.com, Target.com)",
        "Social media (i.e. Facebook, Pinterest, Instagram, Snapchat, Twitter)",
        "Video sites/apps (i.e. YouTube, Vimeo)",
        "Publishers' and aggregator websites/apps (i.e. BuzzFeed, Reddit, Huffington Post, People, News sites)",
        "Magazines",
        "Websites/apps for product brands",
        "Television shows",
        "Radio shows or podcasts",
        "Blogs",
        "Other mobile apps",
        "Newspapers",]
    const renderListInterests = (data) => {
        return <>
            <label htmlFor="">What are your interests?</label>
            {
                data.map((val, index) => {
                    return <div>
                        <Field type="checkbox" name="interests" value={val} />{val}
                    </div>
                })
            }
        </>
    }

    const renderClassify = (data) => {
        return <>
            <label htmlFor="">How would you classify your style?</label>
            {
                data.map((val, index) => {
                    return <div>
                        <Field type="checkbox" name="yourStyle" value={val} />{val}
                    </div>

                })
            }
        </>
    }
    const renderRelate = (data) => {
        return <>
            <label htmlFor="">To which of the following do you relate?</label>
            <div className="control">
                {
                    data.map((val, index) => {
                        return <div>
                            <Field type="checkbox" name="youRelate" value={val} />{val}
                        </div>
                    })
                }
            </div>
        </>
    }
    const renderSources = (data) => {
        return <>
            <label htmlFor="">What are your top sources for information and inspiration about outdoor entertaining?</label>
            <div className="control">
                {
                    data.map((val, index) => {
                        return <div>
                            <Field type="checkbox" name="infoOutdoor" value={val} />{val}
                        </div>
                    })
                }
            </div>
        </>
    }

    const checkValidatePassword = () => {
        let password = document.getElementById("password")
            , confirm_password = document.getElementById("confirm_password");
        const validatePassword = () => {
            if (password.value !== confirm_password.value) {
                confirm_password.setCustomValidity("Passwords Don't Match");
            } else {
                confirm_password.setCustomValidity('');
            }
        }
        password.onchange = validatePassword;
        confirm_password.onkeyup = validatePassword;
    }
    useEffect(() => {
        checkValidatePassword()
    })
    const dispatch = useDispatch();
    return (
        <div id="create_acc_form" className='text-left'>
            <Formik initialValues={{
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                birthday: '',
                gender: '',
                householdSize: '',
                whichOfHousehold: [],
                useTheTorchesOnYear: '',
                rentOrOwn: '',
                interests: [],
                yourStyle: [],
                youRelate: [],
                infoOutdoor: [],
                torchesOnYear: '',
                listSomeOfYourFavorite: ''

            }} onSubmit={(values, actions) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    const actionValue = {
                        email: values.email,
                        password: values.password,
                        desDetail:{
                            firstName: values.firstName,
                            lastName: values.lastName,
                            birthday: values.birthday,
                            gender: values.gender,
                            householdSize: values.householdSize,
                            whichOfHousehold: values.whichOfHousehold,
                            useTheTorchesOnYear: values.useTheTorchesOnYear,
                            rentOrOwn: values.rentOrOwn,
                            interests: values.interests,
                            yourStyle: values.yourStyle,
                            youRelate: values.youRelate,
                            infoOutdoor: values.infoOutdoor,
                            torchesOnYear: values.torchesOnYear,
                            listSomeOfYourFavorite: values.listSomeOfYourFavorite
                        }
                    }
                    console.log("action", actionValue)
                    console.log(JSON.stringify(actionValue, null, 2));
                    const action = CreatAccountAction(actionValue)
                    dispatch(action)
                }, 1000);
            }}>
               {
                props =>(
                    <Form onSubmit={props.handleSubmit}>
                    <div className='info'>
                        <legend className='form_title'>
                            Personal Information
                        </legend>
                        <div className="form-group field">
                            <label>First Name <span className='doc'>*</span></label>
                            <input onChange={props.handleChange} value={props.values.firstName} id='firstName' name='firstName' type="text" className="form-control" />
                        </div>
                        <div className="form-group field">
                            <label>Last Name <span className='doc'>*</span></label>
                            <input onChange={props.handleChange} value={props.values.lastName} id='lastName' name='lastName' type="text" className="form-control" />
                        </div>
                        <div className="form-group field">
                            <input type="checkbox" id="exampleCheck1" />
                            <span className="form-check-label" htmlFor="exampleCheck1">Sign Up for TIKI Email</span>
                        </div>
                        <div className="form-group field">
                            <label >What is your birthday?</label>
                            <Field id='birthday' name='birthday' type="date" className="form-control" value={props.values.birthday}/>
                        </div>
                        <div className="form-group field">
                            <label htmlFor="exampleFormControlSelect1">Which gender do you identify with?</label>
                            <Field as="select" id='gender' name="gender" className="form-select" aria-label="">
                                <option value={''}></option>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                                <option value={"Not Specified"}>Not Specified</option>
                            </Field>
                        </div>
                        <div className="form-group field">
                            <label htmlFor="exampleFormControlSelect2">What is your household size (including you)?</label>
                            <Field as="select" id='householdSize' name='householdSize' className="form-select" aria-label="">
                                <option value={0}></option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6+</option>
                            </Field>
                        </div>
                        <div className="form-group field">
                            <label htmlFor="">Which of the following are in your household?</label>
                            <div>
                                <Field type="checkbox" name="whichOfHousehold" value={"Children ages 0-10"} />Children ages 0-10
                            </div>
                            <div>
                                <Field type="checkbox" name="whichOfHousehold" value={"Children ages 11-18"} />Children ages 11-18
                            </div>
                            <div>
                                <Field type="checkbox" name="whichOfHousehold" value={"Dog"} />Dog(s)
                            </div>
                        </div>
                        <div className="form-group field">
                            <label htmlFor="exampleFormControlSelect3">Do you rent or own?</label>
                            <Field as="select" id='rentOrOwn' name='rentOrOwn' className="form-select" aria-label="">
                                <option value={""}></option>
                                <option value={"Rent"}>Rent</option>
                                <option value={"Own"}>Own</option>
                            </Field>
                        </div>
                        <div className="form-group field">
                            {
                                renderListInterests(listInterests)
                            }
                        </div>
                        <div className="form-group field">
                            {
                                renderClassify(listClassify)
                            }
                        </div>
                        <div classname="form-group field">
                            <label htmlfor="exampleFormControlSelect4">On average, how many outdoor torches do you buy each year?</label>
                            <Field as="select" className="form-select field" id="torchesOnYear" name="torchesOnYear">
                                <option value selected="selected"> </option>
                                <option value={"0"}>0</option>
                                <option value={"1-2"}>1-2</option>
                                <option value={"3-5"}>3-5</option>
                                <option value={"6-9"}>6-9</option>
                                <option value={"10+"}>10+</option>
                            </Field>
                        </div>
                        <div classname="form-group field">
                            <label htmlfor="exampleFormControlSelect5">During what times of year do you use your outdoor torches?</label>
                            <Field as="select" className="form-select field" id="useTheTorchesOnYear" name="useTheTorchesOnYear">
                                <option value selected="selected"> </option>
                                <option value={"Mostly Spring"}>Mostly Spring</option>
                                <option value={"Mostly Summer"}>Mostly Summer</option>
                                <option value={"Spring and Summer"}>Spring and Summer</option>
                                <option value={"Spring, Summer, and Fall"}>Spring, Summer, and Fall</option>
                                <option value={"All year"}>All year</option>
                            </Field>
                        </div>
                        <div className="form-group field">
                            {renderRelate(listRelate)}
                        </div>
                        <div className="form-group field">
                            {renderSources(listSources)}
                        </div>
                        <div className="mb-3 field">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Please list some of your favorite sources for outdoor entertaining news and trends.</label>
                            <textarea onChange={props.handleChange} value={props.values.listSomeOfYourFavorite} className="form-control" id="listSomeOfYourFavorite" name="listSomeOfYourFavorite" rows={5} defaultValue={""} />
                        </div>
                    </div>
                    <div className='account mt-5'>
                        <div className='form_title'>
                            Sign-in Information
                        </div>
                        <div>
                            <div className='field'>
                                <label htmlFor="exampleInputEmail1" className="form-label">Email <span className='doc'>*</span></label>
                                <input onChange={props.handleChange} value={props.values.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className='field'>
                                <label htmlFor="exampleInputPassword1" className="form-label">Password  <span className='doc'>*</span></label>
                                <input required onChange={props.handleChange} value={props.values.password} type="password" name="password" id="password" title="Password" className="form-control" data-password-min-length={8} data-password-min-character-sets={3} data-validate="{required:true, 'validate-customer-password':true}" autoComplete="off" aria-required="true" aria-autocomplete="list" />
                            </div>
                            <div className='field'>
                                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password  <span className='doc'>*</span></label>
                                <input type="password" id="confirm_password" name="password_confirmation" title="Confirm Password" className="form-control" aria-required="true" />
                            </div>
                            <div className='capcha'>
                                <img src={chapcha} alt="" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn_oran my-3">Create an Account</button>
                </Form>
                )
               }

            </Formik>
        </div>
    );
}

export default CreateAccForm